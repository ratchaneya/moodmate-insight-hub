
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Eye, EyeOff } from 'lucide-react';

const PersonalInfoTwo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    biometricEnabled: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = () => {
    navigate('/terms-privacy');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8 mt-4">
        <h1 className="text-2xl font-bold text-orange-600">Personal information</h1>
      </div>

      <div className="flex-1 space-y-8">
        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Password</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Write your password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="h-12 bg-orange-200 border-orange-300 rounded-full placeholder-orange-400 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-orange-500" />
              ) : (
                <Eye className="w-5 h-5 text-orange-500" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Confirm password</label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Write your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
              className="h-12 bg-orange-200 border-orange-300 rounded-full placeholder-orange-400 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5 text-orange-500" />
              ) : (
                <Eye className="w-5 h-5 text-orange-500" />
              )}
            </button>
          </div>
        </div>

        {/* Biometric Authentication */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-4">Login with Touch ID / Face ID</label>
          <div className="flex items-center justify-between p-4 bg-orange-200 rounded-full">
            <span className="text-orange-600 font-medium">Enable to allow log-in with Touch ID / Face ID</span>
            <Switch
              checked={formData.biometricEnabled}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, biometricEnabled: checked }))}
              className="data-[state=checked]:bg-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-8 mb-4">
        <Button
          onClick={handleNext}
          className="w-full h-14 text-lg font-semibold bg-orange-400 hover:bg-orange-500 text-white rounded-full flex items-center justify-center space-x-2"
        >
          <span>Next</span>
          <span className="text-xl">›</span>
        </Button>
      </div>

      {/* Bottom Indicator */}
      <div className="flex justify-center">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default PersonalInfoTwo;
