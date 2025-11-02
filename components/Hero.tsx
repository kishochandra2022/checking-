
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-light dark:bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-secondary dark:text-white leading-tight mb-4">
          Test Your React Apps with <span className="text-primary">Confidence</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          GitReact seamlessly integrates with your Git workflow to provide automated, intelligent, and visual testing for your React components. Catch bugs before they hit production.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
            Get Started for Free
          </a>
          <a href="#" className="bg-transparent border-2 border-secondary dark:border-light text-secondary dark:text-light font-bold py-3 px-8 rounded-lg hover:bg-secondary hover:text-white dark:hover:bg-light dark:hover:text-secondary transition-all duration-300 text-lg">
            View Docs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
