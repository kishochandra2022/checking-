
import React from 'react';
import { GitBranchIcon } from './icons/GitBranchIcon';
import { ReactIcon } from './icons/ReactIcon';

const Footer: React.FC = () => {
  const footerLinks = {
    'Product': ['Features', 'Pricing', 'Docs', 'Status'],
    'Company': ['About Us', 'Careers', 'Blog', 'Contact'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Security']
  };

  return (
    <footer className="bg-light dark:bg-secondary border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <GitBranchIcon className="w-7 h-7 text-accent" />
              <ReactIcon className="w-7 h-7 text-primary" />
              <span className="text-xl font-bold text-secondary dark:text-light">GitReact</span>
            </a>
            <p className="text-gray-500 dark:text-gray-400">Test with confidence.</p>
          </div>
          
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-bold text-secondary dark:text-white mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} GitReact Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
