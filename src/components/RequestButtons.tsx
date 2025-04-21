import { useState } from 'react';
import { FileText, Coffee, Send, X } from 'lucide-react';
import { Button } from '../components/common/Button';

const RequestButtons = () => {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  

  const RequestModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-2xl p-8 w-96 shadow-2xl border border-green-600/20 relative">
        <Button 
                    onClick={onClose}
                    className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 p-0"
                    // eslint-disable-next-line react/no-children-prop
                    icon={<X className="h-5 w-5" />} children={undefined}            />

          <h2 className="text-2xl font-bold mb-6 text-green-400 text-center">
            Request a Website
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-300 mb-4">
              Send your website request or improvement suggestions at instagram:{' '}
              <a href="https://instagram.com/nanda.kshr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                @nanda.kshr
              </a>{' '}
              or at telegram:{' '}
              <a href="https://t.me/elbeastz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                @elbeastz
              </a>
            </p>
            
          </div>
        </div>
      </div>
    );
  };

  const CustomModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-2xl p-8 w-96 shadow-2xl border border-green-600/20 relative">
          <Button 
            onClick={onClose}
            variant="secondary"
            className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 p-0"
            // eslint-disable-next-line react/no-children-prop
            icon={<X className="h-5 w-5" />} children={undefined}                    />

          <h2 className="text-2xl font-bold mb-6 text-green-400 text-center">
            Add Custom Website
          </h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-4 rounded-lg border border-green-600/20">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Steps to Submit:</h3>
              <ol className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                  <span>Create your HTML file</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                  <span>Upload to Pastebin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                  <span>Share link via{' '}
                    <a href="https://www.buymeacoffee.com/nanda_kshr" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-green-400 hover:text-green-300 font-medium transition-colors inline-flex items-center gap-1">
                      <Coffee className="h-5 w-5" />
                      Buy Me a Coffee
                    </a>
                  </span>
                </li>
              </ol>
            </div>
            
            <div className="text-gray-300 text-sm">
              Your template will be reviewed within 48 hours. If approved, it will be added to our collection.
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center space-x-6 pt-8">
       
      <Button
        onClick={() => setIsRequestModalOpen(true)}
        className="text-lg px-10 py-4 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
        icon={<Send size={20} />}
      >
        Request a Website
      </Button>
      
      <Button
        onClick={() => setIsCustomModalOpen(true)}
        variant="secondary" 
        className="text-lg px-10 py-4 hover:bg-gray-700 transition-colors duration-300"        
        icon={<FileText size={20} />}
      >
        Add Custom Website
      </Button>

      <RequestModal 
        isOpen={isRequestModalOpen} 
        onClose={() => setIsRequestModalOpen(false)} 
      />
      
      <CustomModal 
        isOpen={isCustomModalOpen} 
        onClose={() => setIsCustomModalOpen(false)} 
      />
    </div>
  );
};

export default RequestButtons;