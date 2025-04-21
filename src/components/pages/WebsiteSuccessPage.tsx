import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { API_DOWNLOAD } from '@/constants';
import { auth } from '@/config/firebase';

export const WebsiteSuccessPage: React.FC<{
  websiteTitle: string,
  websiteType: string,
  websiteLink: string,
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}> = ({ websiteTitle, websiteType, websiteLink, setCurrentPage }) => {
  const handleGoToDashboard = () => {
    setCurrentPage('formdata');
  };

  const handleDownload = async () => {
    try {
      const idToken = await auth.currentUser?.getIdToken();
      if (!idToken) {
        alert("User is not authenticated.");
        return;
      }

      const headers = {
        Authorization: `Bearer ${idToken}`,
      };
          
      const response = await fetch(`${API_DOWNLOAD}?title=${websiteTitle}&template=${websiteType}`,
      {
        headers,
      });
      
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${websiteTitle}.html`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch  {
      alert('Error downloading website:');
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl bg-gray-800/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-green-600/20 text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-6 text-green-400 tracking-tight">
            Website Created Successfully!
          </h2>

          <div className="bg-black/30 p-6 rounded-xl border border-green-600/20 mb-6 space-y-3">
            <h3 className="text-2xl font-semibold text-green-500 mb-2">{websiteTitle}</h3>
            <div className="flex justify-center space-x-4 text-gray-300">
              <p>
                Website Type: <span className="text-green-400 font-medium">{websiteType}</span>
              </p>
              <div className="w-px bg-green-600/50 mx-2"></div>
              <p className="text-gray-400 italic">
                Ready in: <span className="text-green-400">3 secs</span>
              </p>
            </div>
          </div>

          <div className="bg-black/30 p-6 rounded-xl border border-green-600/20 mb-8">
            <h4 className="text-xl text-green-400 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Next Steps
            </h4>
            <ul className="text-gray-300 text-left space-y-3 pl-4">
              <li className="flex items-center">
                <span className="mr-3 text-green-500">➤</span>
                <span className="text-green-400">
                    <a
                      href={websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 flex items-center"
                    >
                      Download the website
                    </a>
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-500">➤</span>
                Log in to the website.
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-500">➤</span>
                Get details from the dashboard.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleDownload}
            className="flex-1 py-3 rounded-lg transition-all duration-300 flex items-center justify-center font-semibold group hover:shadow-xl hover:shadow-blue-600/30 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Download Website
            <Download className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
          </button>

          <button
            onClick={handleGoToDashboard}
            className='flex-1 py-3 rounded-lg transition-all duration-300 flex items-center justify-center font-semibold group hover:shadow-xl hover:shadow-green-600/30 bg-green-600 hover:bg-green-700 text-white'>
            Go to Dashboard
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteSuccessPage;