
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-8">
        {/* Mascot Logo */}
        <div className="relative">
          <img 
            src="/lovable-uploads/86d4f92a-42dd-4769-85f6-4b866fb4b8a4.png" 
            alt="MoodMate Mascot" 
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* App Name */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            MoodMate
          </h1>
        </div>
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-20">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
