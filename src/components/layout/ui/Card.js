const Card = ({ 
  children, 
  className = '', 
  hoverEffect = true, 
  gradientBorder = false 
}) => {
  const baseClasses = 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300';
  
  const hoverClasses = hoverEffect 
    ? 'hover:bg-gray-700/30 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10' 
    : '';
  
  const gradientBorderClasses = gradientBorder 
    ? 'relative group before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:bg-gradient-to-r before:from-blue-500 before:to-purple-600 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100'
    : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientBorderClasses} ${className}`}>
      {gradientBorder ? (
        <div className="relative h-full rounded-[10px] bg-gray-800/50">
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Card;