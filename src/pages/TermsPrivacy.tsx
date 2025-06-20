
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronLeft } from 'lucide-react';

const TermsPrivacy = () => {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleConfirm = () => {
    if (accepted) {
      navigate('/permission-request');
    }
  };

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    setAccepted(checked === true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate('/login')}
          className="p-2 -ml-2"
        >
          <ChevronLeft className="w-6 h-6 text-orange-600" />
        </button>
        <h1 className="text-xl font-bold text-orange-600 ml-4">Terms and Privacy Policy</h1>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">PRIVACY POLICY</h2>
          <p className="text-sm text-gray-600 mb-4">Last updated June 01, 2025</p>
          
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              This Privacy Notice for MoodMate ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Download and use our mobile application (Mood Mate), or any other application of ours that links to this Privacy Notice</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            
            <p>
              Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at moodmate.official@gmail.com.
            </p>
            
            <h3 className="font-semibold text-gray-800 mt-6">SUMMARY OF KEY POINTS</h3>
            <p>
              This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
            </p>
          </div>
        </div>

        {/* Acceptance */}
        <div className="flex items-start space-x-3 p-4 bg-orange-200 rounded-lg">
          <Checkbox
            id="accept-terms"
            checked={accepted}
            onCheckedChange={handleCheckboxChange}
            className="mt-1"
          />
          <label htmlFor="accept-terms" className="text-sm text-gray-700 leading-relaxed">
            I accept the <span className="text-orange-600 font-medium">terms and privacy policy</span>
          </label>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="mt-8 mb-4">
        <Button
          onClick={handleConfirm}
          disabled={!accepted}
          className="w-full h-14 text-lg font-semibold bg-orange-400 hover:bg-orange-500 text-white rounded-full disabled:opacity-50"
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

export default TermsPrivacy;
