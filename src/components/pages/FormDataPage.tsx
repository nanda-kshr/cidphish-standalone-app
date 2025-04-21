import React, { useRef, useState } from 'react';
import { Loader2, RefreshCw, ExternalLink, Download, PlusCircle } from 'lucide-react';
import { FormSubmission, FormEntry } from '@/types/types';
import { API_FETCH_CREDENTIALS, API_DELETE_REPO, API_LIST_TEMPLATES, API_DOWNLOAD } from '@/constants';
import { auth } from '@/config/firebase';
import DisclaimerBanner from '@/components/DisclaimerBanner';

export interface WEBSITE {

  websiteName: string;

  entries: number;

  websiteLink: string;

  templateUsed: string;

  createdAt: string;

}

const LoadingOverlay = () => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
    <div className="text-center">
      <Loader2 className="mx-auto mb-4 animate-spin text-green-400" size={48} />
      <h2 className="text-xl font-bold text-green-400 mb-2">Loading Data</h2>
      <p className="text-gray-300 text-sm">Please wait...</p>
    </div>
  </div>
);

const NoWebsitesView = ({ onCreateNew }: { onCreateNew: () => void }) => (
  <div className="flex flex-col items-center justify-center h-48 space-y-4 p-4">
    <p className="text-lg text-gray-400 text-center">No websites created yet</p>
    <button
      onClick={onCreateNew}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
    >
      <PlusCircle size={18} />
      <span>Create Website</span>
    </button>
  </div>
);

const WebsiteCard = ({ 
  submission,
  onView,
  onDownload,
  onDelete 
}: {
  submission: FormSubmission;
  onView: (submission: FormSubmission) => void;
  onDownload: (website: string, template: string) => void;
  onDelete: (website: string) => void;
}) => (
  <div className="bg-gray-800/40 p-4 rounded-lg mb-4">
    <div className="flex justify-between items-start mb-3">
      <h3 className="font-medium text-green-400">{submission.website}</h3>
      <span className="text-sm text-gray-400">{submission.lastSubmission}</span>
    </div>
    <div className="text-sm text-gray-300 mb-4">
      Entries: {submission.entries}
    </div>
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onView(submission)}
        className="bg-green-600/20 hover:bg-green-600/40 px-3 py-1.5 rounded text-sm"
      >
        View
      </button>
      <button
        onClick={() => onDownload(submission.website, submission.template)}
        className="bg-blue-600/20 hover:bg-blue-600/40 px-3 py-1.5 rounded text-sm flex items-center"
      >
        <Download size={14} className="mr-1" />
        Download
      </button>
      <button
        onClick={() => onDelete(submission.website)}
        className="bg-red-600/20 hover:bg-red-600/40 px-3 py-1.5 rounded text-sm"
      >
        Delete
      </button>
    </div>
  </div>
);

const EntriesModal = ({
  submission,
  entries,
  isLoading,
  isRefreshing,
  onRefresh,
  onClose,
}: {
  submission: FormSubmission;
  entries: FormEntry[];
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md max-h-[90vh] shadow-2xl border border-green-600/20">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-green-400 truncate">
          {submission.website}
        </h3>
        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          className="text-green-400 hover:bg-green-600/20 p-1.5 rounded-full disabled:opacity-50"
        >
          <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
        </button>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <Loader2 className="animate-spin text-green-400" size={36} />
        </div>
      ) : (
        <>
          <div className="max-h-48 overflow-y-auto mb-4">
            {Array.isArray(entries) && entries.length > 0 ? (
              entries.map((entry) => (
                <div key={entry.id} className="py-2 border-b border-green-600/10">
                  <div className="text-sm break-all">{entry.email}</div>
                  <div className="text-sm text-gray-400 break-all">{entry.password}</div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400 text-center">No entries found.</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm"
          >
            Close
          </button>
        </>
      )}
    </div>
  </div>
);
export const FormDataPage: React.FC<{
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>, 
  formSubmissionsPrev: FormSubmission[];
}> = ({ setCurrentPage, formSubmissionsPrev }) => {
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>(formSubmissionsPrev); // Initialize with formSubmissionsPrev
  const [formEntries, setFormEntries] = useState<FormEntry[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(false);
  const [isLoadingCredentials, setIsLoadingCredentials] = useState(false);
  const [isRefreshingTemplates, setIsRefreshingTemplates] = useState(false);
  const [isRefreshingCredentials, setIsRefreshingCredentials] = useState(false);
  const [hasNoWebsites, setHasNoWebsites] = useState(false);
  const hasFetched = useRef(false);

  const fetchTemplates = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setIsRefreshingTemplates(true);
        hasFetched.current = false;

      } else {
        setIsLoadingTemplates(true);
        hasFetched.current = false;
      }

      
      const idToken = await auth.currentUser?.getIdToken();
      if (!idToken) {
        alert("User is not authenticated.");
        return;
      }

      const headers = {
        Authorization: `Bearer ${idToken}`,
      };
      if (! hasFetched.current) { 
      hasFetched.current = true;

      const response = await fetch(API_LIST_TEMPLATES, { 
        headers,
        method: 'GET'
      });
      
      const data = await response.json();
      

      if (data?.websites) {
        const submissions: FormSubmission[] = data.websites.map((website: WEBSITE, index: number) => ({
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
        setHasNoWebsites(false);
      }}
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Failed to refresh templates. Please try again.");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    } finally {
      if (isRefresh) {
        setIsRefreshingTemplates(false);
      } else {
        setIsLoadingTemplates(false);
      }
    }
  };

  const handleDownload = async (websiteName: string, template: string) => {
    try {
      const idToken = await auth.currentUser?.getIdToken();
      if (!idToken) {
        alert("User is not authenticated.");
        return;
      }

      const headers = {
        Authorization: `Bearer ${idToken}`,
      };
          
      const response = await fetch(`${API_DOWNLOAD}?title=${websiteName}&template=${template}`,
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
      a.download = `${websiteName}.html`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch {
      console.log("Failed to download website. Please try again.");
    }
  };

 

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

  const handleDeleteWebsite = async (websiteName: string) => {
    try {
      const idToken = await auth.currentUser?.getIdToken();
      if (!idToken) {
        alert("User is not authenticated.");
        return;
      }

      const headers = {
        Authorization: `Bearer ${idToken}`,
      };

      const data = {
        websiteName,
      };

      await fetch(API_DELETE_REPO, { 
        headers,
        method: 'POST',
        body: JSON.stringify(data)
      });
      
      setFormSubmissions((prevSubmissions) =>
        prevSubmissions.filter((submission) => submission.website !== websiteName)
      );
    } catch{
      console.log("Failed to delete website. Please try again.");
    }
  };

  const handleViewEntries = async (submission: FormSubmission, isRefresh = false) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
    
    if (isRefresh) {
      setIsRefreshingCredentials(true);
    } else {
      setIsLoadingCredentials(true);
    }

    try {
      const idToken = await auth.currentUser?.getIdToken();
      if (!idToken) {
        alert("User is not authenticated.");
        return;
      }

      const headers = {
        Authorization: `Bearer ${idToken}`,
      };

      const response = await fetch(`${API_FETCH_CREDENTIALS}?websiteName=${encodeURIComponent(submission.website)}`, {
        headers,
        method: 'GET',
      });
      
      const data = await response.json();

      if (data) {
        const entries: FormEntry[] = data.map((entry: { email: string; password: string }, index: number) => ({
          id: index + 1,
          email: String(entry.email),
          password: String(entry.password),
        }));

        setFormEntries(entries);
      }
    } catch {
      alert("No entries found or an error occurred while fetching the data.");
    } finally {
      if (isRefresh) {
        setIsRefreshingCredentials(false);
      } else {
        setIsLoadingCredentials(false);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleVisitWebsite = (websiteLink: string) => {
    // Ensure the link starts with http:// or https://
    const validatedLink = websiteLink.startsWith('http') 
      ? websiteLink 
      : `https://${websiteLink}`;
    
    window.open(validatedLink, '_blank', 'noopener,noreferrer');
  };

  // ... [Keep all the existing state and function declarations] ...

  return (
    <div className="container mx-auto px-4 pt-16 pb-8">
      {isLoadingTemplates && <LoadingOverlay />}

      {isModalOpen && selectedSubmission && (
        <EntriesModal
          submission={selectedSubmission}
          entries={formEntries}
          isLoading={isLoadingCredentials}
          isRefreshing={isRefreshingCredentials}
          onRefresh={() => handleViewEntries(selectedSubmission, true)}
          onClose={handleCloseModal}
        />
      )}
  
      <div className="bg-gray-800/60 backdrop-blur-xl p-4 sm:p-6 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-400">Websites</h2>
          <button
            onClick={() => fetchTemplates(true)}
            disabled={isRefreshingTemplates}
            className="text-green-400 hover:bg-green-600/20 p-2 rounded-full disabled:opacity-50"
          >
            <RefreshCw size={20} className={isRefreshingTemplates ? 'animate-spin' : ''} />
          </button>
        </div>
        
        {hasNoWebsites ? (
          <NoWebsitesView onCreateNew={() => setCurrentPage('websitecreator')} />
        ) : (
          <div className="grid gap-4 sm:hidden">
            {formSubmissions.map((submission) => (
              <WebsiteCard
                key={submission.id}
                submission={submission}
                onView={() => handleViewEntries(submission)}
                onDownload={handleDownload}
                onDelete={handleDeleteWebsite}
              />
            ))}
          </div>
        )}

        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-green-600/20">
                <th className="p-3 text-left">Website</th>
                <th className="p-3 text-left">Entries</th>
                <th className="p-3 text-left">Created</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {formSubmissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-black/20">
                  <td className="p-3">{submission.website}</td>
                  <td className="p-3">{submission.entries}</td>
                  <td className="p-3">{submission.lastSubmission}</td>
                  <td className="p-3 text-right space-x-2">
                    <button
                      onClick={() => handleViewEntries(submission)}
                      className="bg-green-600/20 hover:bg-green-600/40 px-3 py-1.5 rounded text-sm"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(submission.website, submission.template)}
                      className="bg-blue-600/20 hover:bg-blue-600/40 px-3 py-1.5 rounded text-sm inline-flex items-center"
                    >
                      <Download size={14} className="mr-1" />
                      Download
                    </button>
                    <button
                      onClick={() => handleDeleteWebsite(submission.website)}
                      className="bg-red-600/20 hover:bg-red-600/40 px-3 py-1.5 rounded text-sm"
                    >
                      Delete
                    </button>
                    {submission.websiteLink !== 'Unknown' && (
                      <button
                        onClick={() => handleVisitWebsite(submission.websiteLink)}
                        className="bg-blue-600/20 hover:bg-blue-600/40 px-3 py-1.5 rounded text-sm inline-flex items-center"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Visit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DisclaimerBanner />
    </div>
  );
};