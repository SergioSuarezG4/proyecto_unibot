import { Send } from "lucide-react";

export default function ChatInput({ value, onChange, onSubmit, disabled }) {
  return (
    <form onSubmit={onSubmit} className="flex gap-3">
      <input
        type="text"
        value={value}
        placeholder="Pregunta sobre horarios, salones,"
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="flex-1 bg-[#FFFFFF] border border-gray-500 rounded-lg px-4 py-3 
                   text-foreground placeholder:text-muted-foreground 
                   focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />

      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="bg-primary hover:bg-primary/90 disabled:bg-primary/50 
                   text-primary-foreground p-3 rounded-lg transition-colors"
      >
        <Send size={20} />
      </button>
    </form>
  );
}
