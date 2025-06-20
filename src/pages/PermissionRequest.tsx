
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronLeft } from 'lucide-react';

const PermissionRequest = () => {
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState({
    instagram: false,
    tiktok: false,
    facebook: false,
    youtube: false,
    x: false,
  });

  const handlePermissionChange = (platform: string) => {
    setPermissions(prev => ({
      ...prev,
      [platform]: !prev[platform as keyof typeof prev]
    }));
  };

  const handleConfirm = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate('/terms-privacy')}
          className="p-2 -ml-2"
        >
          <ChevronLeft className="w-6 h-6 text-orange-600" />
        </button>
        <h1 className="text-lg font-bold text-orange-600 ml-4">Request for permission to access the application</h1>
      </div>

      {/* Permission List */}
      <div className="flex-1 space-y-6">
        {[
          { key: 'instagram', name: 'Instagram' },
          { key: 'tiktok', name: 'Tiktok' },
          { key: 'facebook', name: 'Facebook' },
          { key: 'youtube', name: 'Youtube' },
          { key: 'x', name: 'X' },
        ].map((platform) => (
          <div key={platform.key} className="flex items-center space-x-4 p-4 bg-white rounded-lg">
            <Checkbox
              id={platform.key}
              checked={permissions[platform.key as keyof typeof permissions]}
              onCheckedChange={() => handlePermissionChange(platform.key)}
              className="w-6 h-6"
            />
            <label htmlFor={platform.key} className="text-lg text-gray-800 font-medium">
              {platform.name}
            </label>
          </div>
        ))}
      </div>

      {/* Confirm Button */}
      <div className="mt-8 mb-4">
        <Button
          onClick={handleConfirm}
          className="w-full h-14 text-lg font-semibold bg-orange-400 hover:bg-orange-500 text-white rounded-full"
        >
          confirm
        </Button>
      </div>

      {/* Bottom Indicator */}
      <div className="flex justify-center">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default PermissionRequest;
