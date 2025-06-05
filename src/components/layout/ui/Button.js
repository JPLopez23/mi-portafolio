const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  icon, 
  className = '', 
  disabled = false 
}) => {
  const baseClasses = 'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105',
    secondary: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-700/30'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${disabled ? 'opacity-70 cursor-not-allowed hover:scale-100' : ''} ${className}`}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;