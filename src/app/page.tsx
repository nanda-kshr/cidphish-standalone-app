"use client";

import React, { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import HomePage from '@/components/pages/HomePage';
import { SignInPage } from '@/components/pages/SignInPage';
import { SignUpPage } from '@/components/pages/SignUpPage';
import { WebsiteCreatorPage } from '@/components/pages/WebsiteCreatorPage';
import { FormDataPage } from '@/components/pages/FormDataPage';
//import { WebsiteDashboardPage } from './components/pages/WebsiteDashboardPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebase';
import { LoadingProvider } from '@/components/LoadingContent';
import LearnMorePage from '@/components/pages/LearnMorePage';
import DeviceInfoPage from '@/components/pages/DeviceInfoPage';
import { API_LIST_TEMPLATES, API_TEMPLATE_LIST } from '../constants';
import axios from 'axios';
import { FormSubmission } from '@/types/types';
 

export default function HOME(){
    interface WebsiteType {
      value: string;
      label: string;
      description: string;
    }
  const [currentPage, setCurrentPage] = useState('home');
  const [user, loading] = useAuthState(auth);
  const [websiteTypes, setWebsiteTypes] = useState<WebsiteType[]>([]);
  const hasFetched = useRef(false);
  const hasFetchedf = useRef(false);
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);
  const formatTimeAgo = (timestamp: Date | null): string => {
    if (!timestamp) return "Unknown";

    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    return `${days} day${days === 1 ? '' : 's'} ago`;
  };
  
  useEffect(() => {
    

    if (user) {
      setCurrentPage('home');
      const fetchTemplate = async () => {
      
        if (hasFetched.current) return; 
        hasFetched.current = true;
        const response = await axios.get(API_TEMPLATE_LIST);
        const templates = response.data; 
        const formattedTemplates: WebsiteType[] = templates.map((name: string) => ({
            value: name,
            label: name,
            description: '',
          }));
          setWebsiteTypes(formattedTemplates);
      };
  
      fetchTemplate();

      const fetchTemplates = async () => {
          const idToken = await auth.currentUser?.getIdToken();
          const headers = {
            Authorization: `Bearer ${idToken}`,
          };
          if (! hasFetchedf.current) { 
          hasFetchedf.current = true;
    
          const response = await axios.get(API_LIST_TEMPLATES, { headers });
    
          if (response.data?.websites) {
            interface Website {
              websiteName?: string;
              entries?: number;
              websiteLink?: string;
              templateUsed?: string;
              createdAt?: string;
            }
            const submissions: FormSubmission[] = response.data.websites.map((website: Website, index: number) => ({
              id: index + 1,
              website: website.websiteName || 'Unknown',
              entries: website.entries || 0,
              websiteLink: website.websiteLink || 'Unknown',
              template: website.templateUsed || 'Unknown',
              lastSubmission: website.createdAt
                ? formatTimeAgo(new Date(website.createdAt))
                : "Unknown",
            }));
            setFormSubmissions(submissions);
          }}
      };
      fetchTemplates();

    } else {
      setCurrentPage('signup');
    }
  }, [user]);

  const handleSignOut = () => {
    auth.signOut();
  };
  const renderPage = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage}/>;
      case 'learnmore': return <LearnMorePage setCurrentPage={setCurrentPage} />;
      case 'signin': return <SignInPage  setCurrentPage={setCurrentPage}/>;
      case 'signup': return <SignUpPage setCurrentPage={setCurrentPage} />;
      case 'deviceInfo': return <DeviceInfoPage setCurrentPage={setCurrentPage}/>;
      case 'websitecreator': return user ? <WebsiteCreatorPage setCurrentPage={setCurrentPage} websiteTypes={websiteTypes}/> : <SignInPage  setCurrentPage={setCurrentPage}/>;
      case 'formdata': return user ? <LoadingProvider><FormDataPage setCurrentPage={setCurrentPage} formSubmissionsPrev={formSubmissions}/></LoadingProvider> : <SignInPage  setCurrentPage={setCurrentPage}/>;
      default: return <HomePage  setCurrentPage={setCurrentPage}/>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation 
        setCurrentPage={setCurrentPage} 
        user={user || null}
        onSignOut={handleSignOut}
      />

      {renderPage()}
      <Footer />

    </div>
  );
};

