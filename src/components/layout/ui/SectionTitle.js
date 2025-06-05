  const SectionTitle = ({ title, subtitle, highlight }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;