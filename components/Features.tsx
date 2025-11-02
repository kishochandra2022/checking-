
import React from 'react';
import { GitBranchIcon } from './icons/GitBranchIcon';
import { CodeIcon } from './icons/CodeIcon';
import { EyeIcon } from './icons/EyeIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <GitBranchIcon className="w-8 h-8 text-primary" />,
      title: 'Seamless Git Integration',
      description: 'Run tests automatically on every commit and pull request. Get instant feedback right in your PRs.'
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-primary" />,
      title: 'Automated Component Testing',
      description: 'Automatically generate and run snapshot, unit, and integration tests for your React components.'
    },
    {
      icon: <EyeIcon className="w-8 h-8 text-primary" />,
      title: 'Visual Regression Testing',
      description: 'Catch unintended UI changes by comparing component screenshots across commits.'
    },
    {
      icon: <CodeIcon className="w-8 h-8 text-primary" />,
      title: 'AI-Powered Test Generation',
      description: 'Leverage AI to suggest test cases and write boilerplate code, saving you time and effort.'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary dark:text-white">Why Choose GitReact?</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Focus on building features, not on manual testing. We've got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
