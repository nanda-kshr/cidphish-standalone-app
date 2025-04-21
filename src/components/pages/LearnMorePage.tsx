import React from 'react';
import { 
  Shield, 
  BookOpen, 
  Target, 
  Lock, 
  Users, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/common/Button';

interface LearnMorePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const LearnMorePage: React.FC<LearnMorePageProps> = ({ setCurrentPage }) => {
  const detailedFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Training Modules",
      description: "Our platform offers in-depth educational resources covering the latest phishing techniques, social engineering tactics, and defense strategies.",
      color: "text-blue-400"
    },
    {
      icon: Target,
      title: "Customizable Simulation Scenarios",
      description: "Create tailored phishing scenarios that reflect real-world threats specific to your organization's industry and communication patterns.",
      color: "text-green-400"
    },
    {
      icon: Lock,
      title: "Advanced Security Protocols",
      description: "Implement cutting-edge security measures to ensure ethical use and protect sensitive information during training exercises.",
      color: "text-purple-400"
    }
  ];

  const whyChooseSections = [
    {
      icon: Users,
      title: "Empowering Security Teams",
      description: "Provide your team with hands-on experience in identifying and mitigating phishing threats through interactive, risk-free simulations."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Track performance metrics, identify vulnerabilities, and develop targeted training programs to enhance organizational cybersecurity resilience."
    }
  ];

  const handleStartTrial = () => {
    setCurrentPage('websitecreator');
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-24 max-w-7xl">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
            Dive Deeper into CidPhish
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore how our platform revolutionizes cybersecurity training through ethical, realistic phishing simulation technologies.
          </p>
        </div>
      </div>

      {/* Detailed Features Section */}
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
            Advanced Training Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive tools designed to simulate, educate, and strengthen your organization&apos;s cyber defense capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {detailedFeatures.map((feature, index) => (
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

      {/* Why Choose Section */}
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
                Transforming Security Awareness
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                CidPhish goes beyond traditional training methods, providing an immersive, data-driven approach to cybersecurity education.
              </p>
            </div>

            <div className="space-y-6">
              {whyChooseSections.map((section, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-6 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                >
                  <section.icon className="text-blue-400" size={36} strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
                    <p className="text-gray-400">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-3xl p-12 w-full max-w-md">
              <Shield className="w-full h-auto text-blue-400 opacity-70 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-800 py-24">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
              Take the First Step in Cyber Defense
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transform your organization&apos;s security posture with CidPhish&apos;s cutting-edge training platform. Experience the difference of proactive, ethical cybersecurity education.
            </p>
            
            <div className="flex justify-center space-x-6 pt-8">
              <Button 
                icon={<ArrowRight />} 
                onClick={handleStartTrial}
                className="text-lg px-10 py-4 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
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

export default LearnMorePage;