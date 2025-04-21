import React, { useEffect, useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  Cpu, 
  Battery, 
  Wifi, 
  Monitor, 
  Clock,
  Shield, Mouse, Keyboard, ArrowUpDown, HardDrive, ArrowLeftRight } from 'lucide-react';

interface DeviceInfoPageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}


interface DeviceInfo {
  title: string;
  value: string | number | boolean | null;
  icon?: React.ElementType;
}

const DeviceInfoPage: React.FC<DeviceInfoPageProps> = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo[]>([]);
  const [httpHeaders, setHttpHeaders] = useState<DeviceInfo[]>([]);
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [keyPressed, setKeyPressed] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [httpVersion, setHttpVersion] = useState<string | null>(null);
  const [storageAvailability, setStorageAvailability] = useState({
    indexedDB: false,
    localStorage: false,
    sessionStorage: false,
  });
  const [pageReferrer, setPageReferrer] = useState<string | null>(null);
const [cookiesEnabled, setCookiesEnabled] = useState<boolean>(false);
const [historyCount, setHistoryCount] = useState<number>(0);
const [visibilityChanges, setVisibilityChanges] = useState<string[]>([]);
const [popUpsAllowed, setPopUpsAllowed] = useState<string>('Unknown');

const [features, setFeatures] = useState({
  javascript: true,
  webrtc: false,
  webgl1: false,
  webgl2: false,
  extensions: true,
  websocket: true,
});
const [networkInfo, setNetworkInfo] = useState<DeviceInfo[]>([]);



  const handleScroll = () => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY });
  };

  // Track key pressed
  const handleKeyPress = (event: KeyboardEvent) => {
    setKeyPressed(event.key);
  };

  // Track mouse position
  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  





  useEffect(() => {

    
    setStorageAvailability({
        indexedDB: !!window.indexedDB,
        localStorage: !!window.localStorage,
        sessionStorage: !!window.sessionStorage,
      });
  
      // Set page referrer
      setPageReferrer(document.referrer);
  
      // Event listeners
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('keypress', handleKeyPress);
      window.addEventListener('mousemove', handleMouseMove);
  
      setCookiesEnabled(navigator.cookieEnabled);
        setHistoryCount(window.history.length);

        // Do Not Track
        // Pop-Ups Detection
        try {
            const popupTest = window.open('', '_blank', 'width=100,height=100');
            if (popupTest) {
            setPopUpsAllowed('Allowed');
            popupTest.close();
            } else {
            setPopUpsAllowed('Blocked');
            }
        } catch {
            setPopUpsAllowed('Blocked');
        }

        // JavaScript Enabled
        setFeatures((features) => ({
            ...features,
            javascript: true,
            webrtc: !!window.RTCPeerConnection,
            webgl1: !!window.WebGLRenderingContext,
            webgl2: !!window.WebGL2RenderingContext,
            websocket: 'WebSocket' in window,
        }));
        const fetchNetworkInfo = async () => {
            try {
              const response = await fetch('https://freeipapi.com/api/json/');
              if (response.ok) {
                const result = await response.json();
                
    
                const data: DeviceInfo[] = [
                  { title: 'IP Address (WAN)', value: result.ipAddress || 'Unknown', icon: Wifi },
                  { title: 'Country', value: result.countryName || 'Unknown', icon: Globe },
                  { title: 'Region', value: result.regionName || 'Unknown', icon: Globe },
                  { title: 'City', value: result.cityName || 'Unknown', icon: Globe },
                  { title: 'Latitude', value: result.latitude || 'Unknown', icon: Globe },
                  { title: 'Longitude', value: result.longitude || 'Unknown', icon: Globe },
                  { title: 'Time Zone', value: result.timeZone || 'Unknown', icon: Clock },
                  { title: 'VPN/Proxy Status', value: result.isProxy ? 'Detected' : 'Not detected', icon: Shield },
                  { title: 'Currency', value: result.currency?.name || 'Unknown', icon: Shield },
                  { title: 'Language', value: result.language || 'Unknown', icon: Shield },
                ];
          
                setNetworkInfo(data);
              } else {
                setNetworkInfo([
                  { title: 'IP Address (WAN)', value: 'Unable to fetch', icon: Wifi },
                  { title: 'VPN/Proxy Status', value: 'Unable to detect', icon: Shield },
                ]);
              }
            } catch  {
              alert('Error fetching network info:');
              setNetworkInfo([
                { title: 'IP Address (WAN)', value: 'Error fetching IP', icon: Wifi },
                { title: 'VPN/Proxy Status', value: 'Error detecting VPN', icon: Shield },
              ]);
            }
          };
        // Page Visibility Listener
        const visibilityHandler = () => {
            const now = new Date().toUTCString();
            setVisibilityChanges((prev) => [
            ...prev,
            `${document.visibilityState === 'visible' ? 'Visible' : 'Hidden'}: ${now}`,
            ]);
        };

        document.addEventListener('visibilitychange', visibilityHandler);


    const gatherDeviceInfo = async () => {
      const data: DeviceInfo[] = [];

      try {
        // Device Information
        let deviceType = 'Desktop or Laptop';
        if (/Mobi|Android/i.test(navigator.userAgent)) {
        deviceType = 'Mobile';
        } else if (/Tablet|iPad/i.test(navigator.userAgent)) {
        deviceType = 'Tablet';
        }
        data.push(
            { title: 'Device Type / Model', value: deviceType, icon: Smartphone },
          { title: 'Operating System', value: `${navigator.platform}`, icon: Monitor },
          { title: 'Browser', value: `${navigator.userAgent}`, icon: Globe }
        );


        


        // Date & Time
        const now = new Date();
        data.push(
          { title: 'System Time', value: now.toString(), icon: Clock },
          { title: 'Time Zone', value: Intl.DateTimeFormat().resolvedOptions().timeZone, icon: Clock }
        );

        // Device Information
        data.push(
          { title: 'CPU Cores', value: navigator.hardwareConcurrency, icon: Cpu },
          { title: 'Memory (RAM)', value: 'Not available', icon: Cpu }
        );

        // Screen Information
        data.push(
          { title: 'Screen Resolution', value: `${screen.width} x ${screen.height}`, icon: Monitor },
          { title: 'Color Depth', value: `${screen.colorDepth}-bit`, icon: Monitor }
        );

        // Battery Status
        const nav = navigator as Navigator & { getBattery?: () => Promise<{ level: number; charging: boolean }> };
        nav.getBattery?.().then((battery) => {
          data.push(
            { title: 'Battery Level', value: `${(battery.level * 100).toFixed(0)}%`, icon: Battery },
            { title: 'Charging Status', value: battery.charging ? 'Charging' : 'Not Charging', icon: Battery }
          );
        }).catch(() => {
          data.push(
            { title: 'Battery Status', value: 'Not available', icon: Battery }
          );
        });

        setDeviceInfo(data);
      } catch {
        alert('Error gathering device info:');
      }

      
    };
    const getHttpHeaders = async () => {
        try {
          const response = await fetch(window.location.href, { method: 'HEAD' });
          const headers = response.headers;

          const headerData: DeviceInfo[] = [];
          headers.forEach((value, key) => {
            headerData.push({
              title: key,
              value: value,
              icon: Shield
            });
          });
          setHttpHeaders(headerData);
        } catch {
          alert('Error fetching headers:');
        }

      };

      const detectHttpVersion = async () => {
        try {
          // Make a test fetch request to detect HTTP version
          await fetch(window.location.href, { method: 'HEAD' });
  
          // Use Performance API to check protocol
          const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
          const currentEntry = entries.find((entry) =>
            entry.name.includes(window.location.origin)
          );
  
          if (currentEntry) {
            setHttpVersion(currentEntry.nextHopProtocol || 'Unknown');
          } else {
            setHttpVersion('Could not detect');
          }
        } catch {
          alert('Error detecting HTTP version:');
          setHttpVersion('Error detecting');
        }
      };
  
      detectHttpVersion();
    fetchNetworkInfo();
    gatherDeviceInfo();
    getHttpHeaders();


    return () => {
     
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('keypress', handleKeyPress);
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('visibilitychange', visibilityHandler);
      };

  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <h1 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Device Information
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deviceInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6
                         transform hover:scale-105 hover:border-blue-500
                         transition-all duration-300 ease-in-out
                         shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {info.icon && <info.icon className="text-blue-400 mb-4" size={24} />}
              <h3 className="text-lg font-semibold text-gray-300 mb-2">{info.title}</h3>
              <p className="text-gray-400 break-words">{String(info.value)}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          HTTP Headers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {httpHeaders.map((header, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6
                         transform hover:scale-105 hover:border-blue-500
                         transition-all duration-300 ease-in-out
                         shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <Shield className="text-blue-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold text-gray-300 mb-2">{header.title}</h3>
              <p className="text-gray-400 break-words">{String(header.value)}</p>
            </div>
          ))}
        </div>
      <h2 className="text-4xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
        Live Metrics
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Scroll Position Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 transform hover:scale-105 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20">
          <ArrowUpDown className="text-blue-400 mb-4" size={24} />
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Page Scroll Position</h3>
          <p className="text-gray-400">X: {scrollPosition.x}px</p>
          <p className="text-gray-400">Y: {scrollPosition.y}px</p>
        </div>

        {/* Key Pressed Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 transform hover:scale-105 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20">
          <Keyboard className="text-blue-400 mb-4" size={24} />
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Last Key Pressed</h3>
          <p className="text-gray-400">{keyPressed || 'None'}</p>
        </div>

        {/* Mouse Position Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 transform hover:scale-105 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20">
          <Mouse className="text-blue-400 mb-4" size={24} />
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Mouse Position</h3>
          <p className="text-gray-400">View X: {mousePosition.x}, Y: {mousePosition.y}</p>
          <p className="text-gray-400">Page X: {mousePosition.x + scrollPosition.x}, Y: {mousePosition.y + scrollPosition.y}</p>
        </div>

        {/* Storage Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 transform hover:scale-105 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20">
          <HardDrive className="text-blue-400 mb-4" size={24} />
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Storage Availability</h3>
          <p className="text-gray-400">IndexedDB: {storageAvailability.indexedDB ? 'Allowed' : 'Not Allowed'}</p>
          <p className="text-gray-400">Local Storage: {storageAvailability.localStorage ? 'Allowed' : 'Not Allowed'}</p>
          <p className="text-gray-400">Session Storage: {storageAvailability.sessionStorage ? 'Allowed' : 'Not Allowed'}</p>
        </div>

        {/* Referrer Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 transform hover:scale-105 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20">
          <ArrowLeftRight className="text-blue-400 mb-4" size={24} />
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Page Referrer</h3>
          <p className="text-gray-400 break-words">{pageReferrer || 'None, or hidden'}</p>
        </div>
      </div>
        <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Browser Plugins
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navigator.plugins && navigator.plugins.length > 0 ? (
            Array.from(navigator.plugins).map((plugin, index) => (
                <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6
                            transform hover:scale-105 hover:border-blue-500
                            transition-all duration-300 ease-in-out
                            shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
                >
                <Monitor className="text-blue-400 mb-4" size={24} />
                <h3 className="text-lg font-semibold text-gray-300 mb-2">{plugin.name}</h3>
                <p className="text-gray-400 break-words">
                    <strong>Description:</strong> {plugin.description || 'No description available'}
                </p>
                <p className="text-gray-400 break-words">
                    <strong>Filename:</strong> {plugin.filename || 'Unknown'}
                </p>
                </div>
            ))
            ) : (
            <p className="text-gray-400">No plugins detected or browser does not support plugin detection.</p>
            )}
        </div>
        <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
    HTTP, TLS, and Features
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* HTTP Version */}
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">HTTP Version</h3>
        <p className="text-gray-400">{httpVersion || 'Detecting...'}</p>
    </div>

    

    {/* Cookies */}
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Cookies</h3>
        <p className="text-gray-400">{cookiesEnabled ? 'Enabled' : 'Disabled'}</p>
    </div>

    {/* History Entries */}
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">History Entries</h3>
        <p className="text-gray-400">{historyCount}</p>
    </div>

    {/* Visibility Changes */}
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Page Visibility Changes</h3>
        {visibilityChanges.map((change, index) => (
        <p key={index} className="text-gray-400">
            {change}
        </p>
        ))}
    </div>

    {/* Web Features */}
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Browser Features</h3>
        <p className="text-gray-400">JavaScript: {features.javascript ? 'Enabled' : 'Disabled'}</p>
        <p className="text-gray-400">WebRTC: {features.webrtc ? 'Enabled' : 'Disabled'}</p>
        <p className="text-gray-400">WebGL 1.0: {features.webgl1 ? 'Enabled' : 'Disabled'}</p>
        <p className="text-gray-400">WebGL 2.0: {features.webgl2 ? 'Enabled' : 'Disabled'}</p>
        <p className="text-gray-400">WebSocket: {features.websocket ? 'Supported' : 'Not Supported'}</p>
    </div>

    {/* Pop-Ups */}
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Pop-Ups</h3>
        <p className="text-gray-400">{popUpsAllowed}</p>
    </div>
    </div>
    <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
        Network Information
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {networkInfo.map((info, index) => (
            <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-6 transform hover:scale-105 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
            >
            {info.icon && <info.icon className="text-blue-400 mb-4" size={24} />}
            <h3 className="text-lg font-semibold text-gray-300 mb-2">{info.title}</h3>
            <p className="text-gray-400 break-words">{String(info.value)}</p>
            </div>
        ))}
        </div>



    </div>
    </div>
  );
};


export default DeviceInfoPage;