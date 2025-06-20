
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Settings, BarChart3, Calendar, ChevronDown, Edit3 } from 'lucide-react';
import RiskIndicator from '@/components/RiskIndicator';

const Home = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [diaryText, setDiaryText] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  const moodEmojis = ['😊', '🙂', '😐', '😔', '😢'];
  const moodLabels = ['มีความสุขมาก', 'มีความสุข', 'เฉยๆ', 'เศร้า', 'เศร้ามาก'];

  const dailyRiskData = [
    { day: '5th', risk: 72, mood: 4, diary: 'วันนี้รู้สึกท้อแท้มาก...' },
    { day: '4th', risk: 69, mood: 3, diary: 'อีกวันที่ยากลำบาก เริ่มรู้สึกแพ้...' },
    { day: '3rd', risk: 71, mood: 4, diary: 'เมื่อวานเป็นหายนะ วันนี้จะแย่ไปกว่านั้น...' },
    { day: '2nd', risk: 70, mood: 3, diary: 'จริงๆ แล้วนี่เป็นเรื่องตลกของจักรวาลใช่ไหม...' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <div className="flex items-center space-x-4">
          <div 
            className="flex items-center space-x-2 bg-yellow-200 rounded-full px-4 py-2 cursor-pointer"
            onClick={() => setShowProfile(!showProfile)}
          >
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">Name</p>
              <p className="text-xs text-gray-600">Username</p>
            </div>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/dashboard')}>
            <BarChart3 className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={() => navigate('/calendar')}>
            <Calendar className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={() => navigate('/settings')}>
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Profile Dropdown */}
      {showProfile && (
        <div className="mx-4 mb-4 p-4 bg-white rounded-lg shadow-lg">
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Age:</span> 20</p>
            <p><span className="font-medium">Gender:</span> Female</p>
            <p><span className="font-medium">Mental health history:</span> None</p>
            <p><span className="font-medium">Relationship status:</span> Single</p>
            <p><span className="font-medium">Current risk of mental health problems:</span> 72%</p>
          </div>
        </div>
      )}

      <div className="px-4 space-y-6">
        {/* Month Header */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-green-600">April 2025</h2>
        </div>

        {/* Risk Assessment Card */}
        <Card className="p-6 bg-gradient-to-r from-pink-100 to-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-pink-500 mb-1">They're focused mental health-related content has been detected</p>
              <p className="text-pink-600 font-semibold">You are at risk</p>
              <p className="text-pink-600 font-semibold">Depression</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-2xl font-bold text-green-600">
                  72%
                </div>
              </div>
              <div className="w-20 h-20">
                <div className="w-full h-full bg-yellow-300 rounded-full flex items-center justify-center">
                  <div className="text-2xl">🐕</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center space-x-2">
            <p className="text-sm text-gray-600">Analyze from your</p>
            <div className="flex space-x-1">
              <div className="w-6 h-6 bg-black rounded-full"></div>
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
            </div>
            <ChevronDown className="w-4 h-4" />
          </div>
        </Card>

        {/* Mood Selector */}
        <div>
          <h3 className="text-lg font-semibold mb-4">How are you feeling?</h3>
          <div className="flex justify-between">
            {moodEmojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => setSelectedMood(index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${
                  selectedMood === index ? 'bg-yellow-200 scale-110' : 'bg-gray-100'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Diary Input */}
        <div>
          <div className="relative">
            <Input
              placeholder="Write your daily diary."
              value={diaryText}
              onChange={(e) => setDiaryText(e.target.value)}
              className="h-12 bg-yellow-100 border-yellow-300 rounded-full pl-12"
            />
            <Edit3 className="w-5 h-5 text-yellow-600 absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Daily Risk History */}
        <div className="space-y-4">
          {dailyRiskData.map((day, index) => (
            <Card key={index} className="p-4 bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-green-600">{day.day}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-semibold">{day.risk}%</span>
                  <span className="text-sm text-orange-600">risk of negative mental health.</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{moodEmojis[day.mood]}</span>
                </div>
                <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-xl">🐕</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-2">{day.diary}</p>
              <button className="text-xs text-gray-400 mt-1">
                <ChevronDown className="w-4 h-4" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
