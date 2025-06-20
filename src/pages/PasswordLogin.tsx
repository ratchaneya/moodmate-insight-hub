
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Fingerprint } from 'lucide-react';

const PasswordLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = () => {
    navigate('/dashboard');
  };

  const handleBiometricLogin = () => {
    // Simulate biometric authentication
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12 mt-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Password</h1>
        <p className="text-gray-600">Enter your password to unlock the app</p>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-8">
        {/* Password Input */}
        <div>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-16 text-lg border-gray-300 rounded-xl pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="w-6 h-6 text-gray-500" />
              ) : (
                <Eye className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* Biometric Login */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Or use biometric authentication</p>
          <button
            onClick={handleBiometricLogin}
            className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto hover:bg-blue-600 transition-colors"
          >
            <Fingerprint className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          disabled={!password}
          className="w-full h-14 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl disabled:opacity-50"
        >
          Next
        </Button>
      </div>

      {/* Bottom Indicator */}
      <div className="flex justify-center mt-8">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default PasswordLogin;
