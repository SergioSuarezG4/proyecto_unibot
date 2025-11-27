export const sendMessage = async (text) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `message=${encodeURIComponent(text)}`
    });

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
    return "Error al conectar con el servidor.";
  }
};
