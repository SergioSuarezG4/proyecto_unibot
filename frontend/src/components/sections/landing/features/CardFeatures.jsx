const CardFeatures = ({title, description, icon: Icon}) => {
  return (
    <div
      className="bg-card border-gray-300 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border">
      <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};
export default CardFeatures;
