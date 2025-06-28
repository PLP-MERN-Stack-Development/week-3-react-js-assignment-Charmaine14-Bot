const Card = ({
  children,
  className = "",
  hover = false,
  padding = "p-6",
  ...props
}) => {
  const baseClasses = "card-base";
  const hoverClasses = hover ? "hover:shadow-xl hover:-translate-y-1" : "";
  const classes = `${baseClasses} ${hoverClasses} ${padding} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
