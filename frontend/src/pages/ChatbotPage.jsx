"use client";

import { useState, useEffect, useRef } from "react";
import ChatMessageBubble from "../components/chatbot/ChatMessage";
import ChatInput from "../components/chatbot/ChatInput";
import Sidebar from "../components/chatbot/Sidebar";
import { Menu } from "lucide-react";
import { sendMessage } from "../api/chat"; // IMPORTANTE

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: "1",
      type: "bot",
      content: "¡Hola! Soy UniBot. ¿En qué puedo ayudarte hoy?",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ================================
  // 🔥 handleSend conectado al backend
  // ================================
  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Mensaje del usuario
    const userMsg = {
      id: Date.now(),
      type: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMsg]);

    const textToSend = inputValue;
    setInputValue("");
    setIsLoading(true);

    // Llamada al backend
    const botReply = await sendMessage(textToSend);

    // Mensaje del bot
    const botMsg = {
      id: Date.now() + 1,
      type: "bot",
      content: botReply,
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="h-screen flex bg-background">

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main area */}
      <div className="flex-1 flex flex-col">

        {/* Top bar */}
        <div className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 hover:bg-muted rounded-lg"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-semibold">UniBot Asistente</h1>
          </div>

          <p className="text-sm text-muted-foreground">Disponible 24/7</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <ChatMessageBubble key={msg.id} {...msg} />
          ))}

          {isLoading && <ChatMessageBubble content="•••" type="bot" />}

          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="bg-card border-t border-border p-4">
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleSend}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
