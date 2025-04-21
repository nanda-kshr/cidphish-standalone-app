import React from 'react';
import { 
  ArrowRight, 
  Globe, 
  Twitter, 
  Github, 
  Linkedin, 
  Facebook, 
  Shield, 
  Code, 
  Database, 
  Zap, 
  Check, 
  Rocket 
} from 'lucide-react';
import { Button } from '@/components/common/Button';


interface HomePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const socialIcons = [
    { Icon: Twitter, href: "https://t.me/cidint" },
    { Icon: Github, href: "https://t.me/cidint" },
    { Icon: Linkedin, href: "https://t.me/cidint" },
    { Icon: Facebook, href: "https://t.me/cidint" }
  ];
  const handleGoToCreation = () => {
    setCurrentPage('websitecreator');  // This will navigate to the dashboard page
  };
  const handleGoToLearn = () => {
    setCurrentPage('learnmore');  // This will navigate to the dashboard page
  };

  const features = [
    {
      icon: Shield,
      title: "Ethical Cybersecurity Training",
      description: "Build realistic phishing simulations to educate and prepare your team against cyber threats.",
      color: "text-blue-400"
    },
    {
      icon: Code,
      title: "User-Friendly Interface",
      description: "Easily create, customize, and deploy phishing templates without technical expertise.",
      color: "text-green-400"
    },
    {
      icon: Database,
      title: "Advanced Analytics",
      description: "Gain valuable insights into user interactions and identify areas for improvement in security awareness.",
      color: "text-purple-400"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white min-h-screen">
      
      <div className="container mx-auto px-6 pt-24 max-w-7xl">
      <a href="https://t.me/cidphish" target="_blank" rel="noopener noreferrer" className="bg-yellow-800 flex items-center justify-center gap-2 py-2 hover:underline">
          <Globe size={16} />
          Connect to our Telegram channel for updated links. Please re-download the template. Existing websites will continue to work until July 1st, 2025.
      </a>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
            <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
              CidPhish: Learn and Master Phishing Simulations
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              A cutting-edge platform designed to educate and empower ethical hackers, security teams, and educators in creating phishing simulations for training and awareness purposes.
            </p>
            </div>
            
            <div className="flex space-x-6">
              <Button 
                icon={<ArrowRight />} 
                className="shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
                onClick={handleGoToCreation}
              >
                Get Started
              </Button>
              <Button 
                variant="secondary" 
                className="hover:bg-gray-700 transition-colors duration-300"
                onClick={handleGoToLearn}
              >
                Learn More
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <h3 className="text-xl mb-4 text-gray-300">Connect With Us</h3>
              <div className="flex space-x-6">
                {socialIcons.map(({ Icon, href }, index) => (
                  <a 
                    key={index} 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:-translate-y-1"
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-3xl p-12 w-full max-w-md">
              <Globe className="w-full h-auto text-blue-400 opacity-70 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
          Key Features
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Explore the tools and features that make CidPhish the go-to platform for phishing simulations and security training.
        </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center 
                         transform hover:scale-105 hover:border-blue-500 
                         transition-all duration-300 ease-in-out 
                         shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <feature.icon className={`mx-auto mb-6 ${feature.color}`} size={64} strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
                Why Choose CidPhish?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Transform your digital strategy with our comprehensive suite of tools designed for modern, forward-thinking enterprises.
              </p>
            </div>

            <div className="space-y-6">
            {[
              { icon: Zap, text: "Realistic Phishing Scenarios", color: "text-yellow-400" },
              { icon: Check, text: "Ethical and Legal Use Only", color: "text-green-400" },
              { icon: Rocket, text: "Empower Your Security Teams", color: "text-purple-400" }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-6 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300"
              >
                <benefit.icon className={`${benefit.color}`} size={36} strokeWidth={1.5} />
                <span className="text-lg text-gray-300">{benefit.text}</span>
              </div>
            ))}
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-3xl p-12 w-full max-w-md">
              <Code className="w-full h-auto text-blue-400 opacity-70 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-800 py-24">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
            Ready to Enhance Security Awareness?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join organizations, educators, and ethical hackers in using CidPhish to build awareness and resilience against phishing attacks. Start your journey today!
          </p>
            
            <div className="flex justify-center space-x-6 pt-8">
              <Button 
                icon={<ArrowRight />} 
                className="text-lg px-10 py-4 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
                onClick={handleGoToCreation}
              >
                Start
              </Button>
              <Button 
                variant="secondary" 
                className="text-lg px-10 py-4 hover:bg-gray-700 transition-colors duration-300"
                onClick={() => window.open("https://github.com/nanda-kshr", "_blank")}
              >
                Support Developer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;