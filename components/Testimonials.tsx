
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, imageUrl }) => {
  return (
    <div className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg">
      <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{quote}"</p>
      <div className="flex items-center">
        <img className="w-12 h-12 rounded-full object-cover mr-4" src={imageUrl} alt={author} />
        <div>
          <p className="font-bold text-secondary dark:text-white">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "GitReact has been a game-changer for our team. We're catching UI bugs 90% faster and our pull requests are cleaner than ever. I can't imagine our workflow without it.",
      author: 'Sarah Johnson',
      title: 'Lead Frontend Engineer, TechCorp',
      imageUrl: 'https://picsum.photos/id/1027/100/100'
    },
    {
      quote: "The visual regression testing is pure magic. It's saved us from so many embarrassing visual glitches. The setup was incredibly simple, and the value is immense.",
      author: 'Mike Chen',
      title: 'Staff Software Engineer, InnovateIO',
      imageUrl: 'https://picsum.photos/id/1005/100/100'
    },
    {
        quote: "As a product manager, I love the confidence GitReact gives us. We can ship faster knowing we have a robust testing safety net. It's a must-have for any serious React team.",
        author: 'Jessica Rodriguez',
        title: 'Director of Product, NextGen Solutions',
        imageUrl: 'https://picsum.photos/id/433/100/100'
      }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary dark:text-white">Trusted by Developers Worldwide</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
