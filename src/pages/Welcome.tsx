
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
        {/* Logo */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center relative">
              {/* Character face */}
              <div className="relative">
                <div className="w-2 h-2 bg-green-600 rounded-full absolute -top-1 left-2"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full absolute -top-1 right-2"></div>
                <div className="w-3 h-1 bg-orange-500 rounded-full absolute top-1"></div>
              </div>
              {/* Heart icon */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          </div>
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
