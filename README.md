# 🧠 UniBot — Chatbot Universitario con RAG + ChatGPT  
Landing page en React + TailwindCSS + Backend en Python/Flask

UniBot es un proyecto diseñado para ofrecer un asistente virtual capaz de responder preguntas basadas en documentos proporcionados por la institución (admisiones, procesos, certificaciones, sedes, horarios, etc.).  
Combina una **landing page moderna** hecha en **React + TailwindCSS** y un **backend en Python con RAG (Retrieval Augmented Generation)** conectado con **ChatGPT**.

---

## 🚀 Tecnologías utilizadas

### **Frontend**
- React + Vite  
- TailwindCSS  
- React Router  
- Despliegue en producción: *Vercel /*  

### **Backend**
- Python  
- Flask  
- OpenAI API (ChatGPT)  
- FAISS (vector database)  
- PyPDF2 / pdfplumber para lectura de PDFs  
- CORS configurado  
- Despliegue en producción: *Render /*  

---

## 🎯 Funcionalidades principales

### ✅ Landing Page (React)
- Diseño moderno y responsive  
- Secciones: Inicio, Funciones, FAQ, Contacto  
- Barra de navegación con scroll automático suave  
- Tarjetas informativas  
- Integración del chatbot mediante componente o iframe

### ✅ Chatbot inteligente (Python + ChatGPT)
- Procesa PDF internos para generar conocimiento  
- Sistema de RAG (vectorización + FAISS)  
- Conversación natural con ChatGPT  
- Recarga automática de nuevos PDFs al iniciar el servidor  
- API sencilla:
  ```json
  POST /chat
  { "message": "texto del usuario" }
