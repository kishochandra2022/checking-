
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Repository',
      description: 'Authorize GitReact with your GitHub, GitLab, or Bitbucket account. Select the repositories you want to test.'
    },
    {
      number: '02',
      title: 'Configure Your Pipeline',
      description: 'Use our simple configuration file to define your testing strategy. Or let our AI auto-configure it for you.'
    },
    {
      number: '03',
      title: 'Push Your Code',
      description: 'Simply push your code. GitReact will automatically pick up changes, run tests, and report back status.'
    },
    {
      number: '04',
      title: 'Review Results',
      description: 'Get detailed reports with logs, screenshots, and performance metrics directly in your pull requests.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-light dark:bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary dark:text-white">Get Up and Running in Minutes</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A simple, intuitive process to integrate powerful testing into your workflow.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30" aria-hidden="true"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-2xl border-4 border-light dark:border-secondary">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
