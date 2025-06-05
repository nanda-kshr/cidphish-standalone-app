
import { AlertTriangle } from 'lucide-react';

const DisclaimerBanner = () => {
  return (
    <div className="bg-black/30 border border-yellow-600/20 rounded-lg p-4 mb-6 mt-10">
      <div className="flex items-center">
        <AlertTriangle className="text-yellow-500 mr-3 flex-shrink-0" size={24} />
        <div>
          <h3 className="text-yellow-500 font-semibold mb-1">Disclaimer</h3>
          <p className="text-gray-300">
            This project is strictly for ethical and educational purposes. You are not supposed to edit any files. I am not responsible for any misuse. 
            Always use cybersecurity tools responsibly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBanner;