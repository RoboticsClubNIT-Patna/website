import { useState, useEffect } from 'react';
import './App.css'
import AppRoutes from "./routes"
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onlineStatusHandler = () => {
      setIsOnline(navigator.onLine);
    };

    // Add event listeners for online and offline events
    window.addEventListener('online', onlineStatusHandler);
    window.addEventListener('offline', onlineStatusHandler);

    AOS.init();
    AOS.refresh();

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', onlineStatusHandler);
      window.removeEventListener('offline', onlineStatusHandler);
    };
  }, []);

  return (
    <div className='min-h-screen h-full relative'>
      <div className={`h-screen bg-black backdrop-blur ease-in-out delay-75 transition-all bg-opacity-80 fixed inset-0 z-[200] ${isOnline && 'hidden'}`}>
        <div className='bg-red-900 border-b border-b-red-700 bg-opacity-30 py-5 text-red-500  w-full text-center flex flex-col items-center justify-cente px-6'>
          <div className="flex gap-2 items-center"><p>You are currently offline. Please check your internet connection.</p></div>
        </div>
      </div>

      <AppRoutes />
    </div>
  )
}

export default App
