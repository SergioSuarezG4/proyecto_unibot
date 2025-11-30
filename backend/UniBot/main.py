# ==========================================================
# main.py — Chatbot con GPT + RAG + FAISS (2025)
# ==========================================================

from flask import Flask, request, jsonify
import os
import random

# ==========================================================
# 🔧 Inicializar Flask ANTES de usar CORS
# ==========================================================
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ==========================================================
# 🔧 Cargar variables de entorno ANTES de usar OpenAI
# ==========================================================
from dotenv import load_dotenv
dotenv_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path, override=True)

print("API KEY DETECTADA:", os.getenv("OPENAI_API_KEY"))

# ==========================================================
# 🔑 Cliente OpenAI (SDK oficial 2025)
# ==========================================================
from openai import OpenAI
client = OpenAI()

# Modelos previos (clusters del usuario)
from chatbot.data import training_data
from chatbot.model import build_and_train_model, load_model, predict_cluster

# Procesamiento de documentos
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader, TextLoader, Docx2txtLoader
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

VECTOR_PATH = "vector_db"
DOCS_PATH = "docs"

# ==========================================================
# 📄 Cargar y vectorizar documentos estáticos
# ==========================================================
def cargar_docs_estaticos():
    all_docs = []
    for file in os.listdir(DOCS_PATH):
        path = os.path.join(DOCS_PATH, file)
        ext = file.split(".")[-1].lower()

        if ext == "pdf":
            loader = PyPDFLoader(path)
        elif ext == "txt":
            loader = TextLoader(path)
        elif ext == "docx":
            loader = Docx2txtLoader(path)
        else:
            continue

        all_docs.extend(loader.load())

    splitter = RecursiveCharacterTextSplitter(chunk_size=800, chunk_overlap=100)
    chunks = splitter.split_documents(all_docs)

    embeddings = OpenAIEmbeddings()
    vector_db = FAISS.from_documents(chunks, embeddings)
    vector_db.save_local(VECTOR_PATH)
    return vector_db

# ==========================================================
# 🚀 Cargar vector DB al iniciar servidor
# ==========================================================
if os.path.exists(VECTOR_PATH):
    embeddings = OpenAIEmbeddings()
    vector_db = FAISS.load_local(VECTOR_PATH, embeddings, allow_dangerous_deserialization=True)
else:
    vector_db = cargar_docs_estaticos()

# ==========================================================
# 🤖 Modelo de Clusters del Usuario
# ==========================================================
model, vectorizer = load_model()
if model is None:
    model, vectorizer = build_and_train_model(training_data, n_clusters=6)

RESPUESTAS = {
    0: ["¡Hola! 😊 ¿Cómo estás?", "¡Qué gusto saludarte!", "¿En qué puedo ayudarte hoy?"],
    1: ["Hasta luego 👋", "Nos vemos pronto.", "¡Cuídate! 😊"],
    2: ["Soy un asistente virtual creado para ayudarte 💻", "Pregúntame lo que quieras 😉"],
    3: ["¡Claro! ¿En qué puedo ayudarte?", "Cuéntame tu problema 🤖"],
    4: ["¡Gracias a ti! ❤️", "Me alegra ser de ayuda 😄"],
    5: ["Lamento eso 😔, puedo intentarlo nuevamente.", "Parece que algo no salió bien 😅"],
}

# Listas para respuestas rápidas
SALUDOS = ["hola", "buenas", "hey", "que más", "saludos", "hello"]
DESPEDIDAS = ["chao", "adios", "hasta luego"]
AGRADECIMIENTOS = ["gracias", "muchas gracias", "te lo agradezco"]


# ==========================================================
# 🌐 RUTAS FLASK
# ==========================================================
@app.route("/chat", methods=["POST"])
def chat():
    user_text = request.form.get("message", "").strip().lower()

    if not user_text:
        return jsonify({"response": "Por favor escribe algo 😅"})

    # ==========================================================
    # 🧠 1️⃣ Respuestas rápidas (sin pasar por RAG)
    # ==========================================================
    if user_text in SALUDOS:
        return jsonify({"response": random.choice(RESPUESTAS[0])})

    if user_text in DESPEDIDAS:
        return jsonify({"response": random.choice(RESPUESTAS[1])})

    if user_text in AGRADECIMIENTOS:
        return jsonify({"response": random.choice(RESPUESTAS[4])})

    # ==========================================================
    # 🔍 2️⃣ RAG: Búsqueda de información en documentos
    # ==========================================================
    try:
        retriever = vector_db.as_retriever(search_kwargs={"k": 3})
        docs = retriever.invoke(user_text)

        # Si no hay documentos relevantes → usar clusters
        if not docs or len(docs) == 0:
            cluster = predict_cluster(model, vectorizer, user_text)
            response = random.choice(
                RESPUESTAS.get(cluster, ["No estoy seguro 😅 pero intento ayudarte."])
            )
            return jsonify({"response": response})

        contexto = "\n\n".join([d.page_content for d in docs])

        prompt = f"""
Eres un asistente universitario sobre información verificada de la Universidad de Caldas, Manizales, Colombia (2025).
Responde ÚNICAMENTE usando la información del contexto.
Si la información no está en el contexto, responde:
"No tengo información sobre eso".

--- CONTEXTO ---
{contexto}
----------------

Pregunta del usuario:
{user_text}
"""

        ai_response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Eres un asistente amable, útil y preciso."},
                {"role": "user", "content": prompt}
            ]
        )

        return jsonify({"response": ai_response.choices[0].message.content})

    except Exception as e:
        print("⚠ Error en RAG:", e)

    # ==========================================================
    # 🔄 3️⃣ Fallback final: Clusters
    # ==========================================================
    cluster = predict_cluster(model, vectorizer, user_text)
    response = random.choice(
        RESPUESTAS.get(cluster, ["No estoy seguro 😅 pero puedo intentarlo otra vez."])
    )
    return jsonify({"response": response})


# ==========================================================
# 🚀 Ejecutar servidor
# ==========================================================
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
