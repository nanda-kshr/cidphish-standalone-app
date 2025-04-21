import React, { useState } from 'react';
import { Lock, User, Mail } from 'lucide-react';

import { WebsiteSuccessPage } from './WebsiteSuccessPage';
import {auth} from '@/config/firebase'
import { Loader2 } from 'lucide-react';
import { API_CREATE_REPO } from '@/constants';
import RequestButtons from '@/components/RequestButtons';
import DisclaimerBanner from '@/components/DisclaimerBanner';



const AuthModal: React.FC<{ 
  isOpen: boolean, 
  onClose: () => void, 
  onSignIn: () => void
}> = ({ isOpen, onClose, onSignIn }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-2xl p-8 w-96 shadow-2xl border border-green-600/20">
        <h2 className="text-2xl font-bold mb-6 text-green-400 text-center">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
        
        <div className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full pl-10 pr-3 py-2 bg-black/30 rounded-lg border border-green-600/20"
              />
            </div>
          )}
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full pl-10 pr-3 py-2 bg-black/30 rounded-lg border border-green-600/20"
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-10 pr-3 py-2 bg-black/30 rounded-lg border border-green-600/20"
            />
          </div>
          
          <button 
            onClick={onSignIn} 
            className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg transition"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
          
          <div className="text-center">
            <span className="text-gray-400">
              {isSignUp 
                ? 'Already have an account? ' 
                : 'Don\'t have an account? '}
              <button 
                onClick={() => setIsSignUp(!isSignUp)} 
                className="text-green-400 hover:underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </span>
          </div>
        </div>
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

interface WebsiteType {
  value: string;
  label: string;
  description: string;
}
interface WebsiteCreatorPageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  websiteTypes: WebsiteType[];
}

export const WebsiteCreatorPage: React.FC<WebsiteCreatorPageProps> = ({ setCurrentPage,  websiteTypes}) => {
  

  const [websiteType, setWebsiteType] = useState('');
  const [websiteTitle, setWebsiteTitle] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [creationSuccessful, setCreationSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateWebsite = async() => {
    setIsLoading(true);
    try {
      const idToken = auth.currentUser 
        ? await auth.currentUser.getIdToken() 
        : null;

      if (!idToken) {
        throw new Error("User is not authenticated.");
      }
      const data = {
        "websiteName":websiteTitle,
        "templateUsed":websiteType
      }
      const respo = await fetch(API_CREATE_REPO, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${idToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!respo.ok) {
        throw new Error('Failed to create website');
      }
      
      const responseData = await respo.json();
      setWebsiteLink(responseData.link);
      setCreationSuccessful(true);
    } catch {
      alert('Error creating website:');
      setIsLoading(false);
    }
  };


  const LoadingOverlay = () => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 
          className="mx-auto mb-4 animate-spin text-green-400" 
          size={64} 
        />
        <h2 className="text-2xl font-bold text-green-400 mb-2">
          Creating Your Website
        </h2>
        <p className="text-gray-300">
          We&apos;re setting up your {websiteType} website. 
          This might take a moment...
        </p>
      </div>
    </div>
  );

  if (creationSuccessful) {
    return (
      <WebsiteSuccessPage
        websiteTitle={websiteTitle}
        websiteType={websiteType}
        websiteLink={websiteLink}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return (
    <>
      {isLoading && <LoadingOverlay />}
      
      <div className="container mx-auto px-4 pt-24">
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onSignIn={() => {
          setIsAuthModalOpen(false);
        }}
      />

      <div className="bg-gray-800/60 backdrop-blur-xl p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Website Creator</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input 
              type="text" 
              placeholder="Website Title" 
              value={websiteTitle}
              onChange={(e) => setWebsiteTitle(e.target.value)}
              className="w-full bg-black/30 p-3 rounded-lg mb-4 border border-green-600/20"
            />
            
            <div className="mb-4">
              <select 
                value={websiteType}
                onChange={(e) => setWebsiteType(e.target.value)}
                className="w-full bg-black/30 p-3 rounded-lg border border-green-600/20"
              >
                <option value="">Select Website Type</option>
                {websiteTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 bg-black/30 p-4 rounded-lg border border-green-600/20 text-gray-300">
              <h3 className="text-xl text-green-400">Additional Information</h3>
              <p className="mt-2">
                Once you select a website type, we will guide you through the customization process.
              </p>
            </div>

            <div className="mt-6 bg-black/30 p-4 rounded-lg border border-green-600/20 text-gray-300">
              <h3 className="text-xl text-green-400">What’s Next?</h3>
              <p className="mt-2">
                After you click &quot;Create Website&quot;, we’ll walk you through additional steps to follow.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-black/30 p-4 rounded-lg border border-green-600/20 h-full">
              <h3 className="text-xl mb-4 text-green-400">How It Works</h3>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Select a website type that matches your needs.</li>
                <li>Customize the title for your page.</li>
                <li>Download the page.</li>
                <li>Open Dashboard and manage your page data with ease.</li>
              </ul>
              <DisclaimerBanner />
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleCreateWebsite}
          disabled={!websiteType || !websiteTitle || isLoading}
          className={`w-full p-3 rounded-lg mt-6 transition flex items-center justify-center ${
            websiteType && websiteTitle && !isLoading
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-gray-600 cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={20} />
              Creating...
            </>
          ) : (
            'Create Website'
          )}
        </button>

      </div>
      <RequestButtons/>
    </div>
    </>
  );
};
