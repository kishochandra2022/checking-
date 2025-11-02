
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Ship Bug-Free Code?
        </h2>
        <p className="text-lg text-secondary/80 max-w-2xl mx-auto mb-8">
          Join thousands of developers who test their React applications with GitReact. Start your free trial today. No credit card required.
        </p>
        <a href="#" className="bg-white hover:bg-gray-100 text-secondary font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
          Start Your Free Trial
        </a>
      </div>
    </section>
  );
};

export default CTA;
