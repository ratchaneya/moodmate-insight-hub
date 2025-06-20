
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    navigate('/personal-info');
  };

  const handleGoogleSignUp = () => {
    navigate('/personal-info');
  };

  const handleAppleSignUp = () => {
    navigate('/personal-info');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12 mt-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-blue-600">Mood</span>
          <span className="text-pink-400">Mate</span>
        </h1>
        <p className="text-gray-600 text-lg mb-2">Create an account</p>
        <p className="text-gray-500">Enter your email to Sign up for this app</p>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          {/* Email Input */}
          <div>
            <Input
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-lg border-gray-300 rounded-xl"
            />
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            className="w-full h-14 text-lg font-semibold bg-pink-400 hover:bg-pink-500 text-white rounded-xl"
          >
            Continue
          </Button>

          {/* Divider */}
          <div className="text-center">
            <span className="text-gray-400">or</span>
          </div>

          {/* Social Sign Up Buttons */}
          <div className="space-y-4">
            <Button
              onClick={handleGoogleSignUp}
              variant="outline"
              className="w-full h-14 text-lg border-gray-300 rounded-xl bg-gray-100 hover:bg-gray-200"
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">G</span>
                </div>
                <span className="text-pink-400">Continue with Google</span>
              </div>
            </Button>

            <Button
              onClick={handleAppleSignUp}
              variant="outline"
              className="w-full h-14 text-lg border-gray-300 rounded-xl bg-gray-100 hover:bg-gray-200"
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-6 h-6 rounded bg-black flex items-center justify-center">
                  <span className="text-white text-xs">🍎</span>
                </div>
                <span className="text-pink-400">Continue with Apple</span>
              </div>
            </Button>
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center mt-8">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/login" className="text-orange-500 font-semibold">
            Log in here.
          </Link>
        </div>

        {/* Bottom Indicator */}
        <div className="flex justify-center mt-8">
          <div className="w-32 h-1 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
