
const Logo = ({ showText = true , textColor="text-foreground"}) => {
  return (
    <div 
    className="flex items-center gap-2">
      
      {/* Ícono */}
      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-sm">
        <span className="text-primary-foreground font-bold text-xl">U</span>
      </div>
      
      {/* Texto opcional */}
      {showText && (
        <span className={`font-bold ${textColor} text-xl`}>
          UniBot
        </span>
      )}
    </div>
  );
};

export default Logo;
