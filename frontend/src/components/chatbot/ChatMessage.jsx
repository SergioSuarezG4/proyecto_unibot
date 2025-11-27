const ChatMessage = ({ content, type = "bot" }) => {
  const isUser = type === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-3 rounded-lg ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-none"
            : "bg-card border border-border text-foreground rounded-bl-none"
        }`}
      >
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
};
export default ChatMessage;