const DetailsItem = ({ title, description, icon: Icon }) => {
  return (
    <div className="relative">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 text-primary-foreground shadow-lg">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
export default DetailsItem;