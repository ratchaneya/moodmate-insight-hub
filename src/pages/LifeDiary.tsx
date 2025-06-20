
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, Sun, Moon } from 'lucide-react';

const LifeDiary = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [diaryText, setDiaryText] = useState('');

  const moodEmojis = ['😊', '🙂', '😐', '😔', '😢'];
  
  const dailyQuestions = [
    "How was your diet today?",
    "How was your sleep behavior today?"
  ];

  const dailyEntries = [
    { day: '5th', risk: 72, mood: 4, diary: 'วันนี้รู้สึกท้อแท้มาก...' },
    { day: '4th', risk: 69, mood: 3, diary: 'อีกวันที่ยากลำบาก เริ่มรู้สึกแพ้...' },
    { day: '3rd', risk: 71, mood: 4, diary: 'เมื่อวานเป็นหายนะ วันนี้จะแย่ไปกว่านั้น...' },
    { day: '2nd', risk: 70, mood: 3, diary: 'จริงๆ แล้วนี่เป็นเรื่องตลกของจักรวาลใช่ไหม...' },
    { day: '1st', risk: 72, mood: 4, diary: 'จริงๆ แล้วนี่เป็นเรื่องตลกของจักรวาลใช่ไหม...' }
  ];

  return (
    <div className={`min-h-screen pb-20 ${isNightMode ? 'bg-gradient-to-br from-blue-800 to-blue-900' : 'bg-gradient-to-br from-yellow-50 to-orange-50'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <h1 className={`text-lg font-semibold ${isNightMode ? 'text-white' : 'text-gray-800'}`}>
          {isNightMode ? 'Night Diary' : 'Life Diary'}
        </h1>
        <button 
          onClick={() => setIsNightMode(!isNightMode)}
          className="p-2 rounded-full bg-white shadow-md"
        >
          {isNightMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      <div className="px-4 space-y-6">
        {/* Month Header */}
        <div className="text-center">
          <h2 className={`text-lg font-semibold ${isNightMode ? 'text-white' : 'text-green-600'}`}>
            April 2025
          </h2>
        </div>

        {/* Today's Entry */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${isNightMode ? 'text-white' : 'text-gray-800'}`}>
            5th
          </h3>
          
          {/* Mood Selector */}
          <div className="mb-4">
            <h4 className={`text-sm font-medium mb-2 ${isNightMode ? 'text-white' : 'text-gray-700'}`}>
              How are you feeling?
            </h4>
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
          <div className="mb-6">
            <Input
              placeholder={isNightMode ? "Write down the sounds you think about after waking up." : "Write your daily diary."}
              value={diaryText}
              onChange={(e) => setDiaryText(e.target.value)}
              className={`h-12 rounded-full ${isNightMode ? 'bg-blue-700 border-blue-600 text-white placeholder-blue-300' : 'bg-yellow-100 border-yellow-300'}`}
            />
          </div>
        </div>

        {/* Daily Questions (only in day mode) */}
        {!isNightMode && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Daily Questions</h3>
            
            {dailyQuestions.map((question, qIndex) => (
              <Card key={qIndex} className="p-4 bg-yellow-100">
                <p className="text-sm font-medium text-gray-800 mb-3">{question}</p>
                <div className="flex justify-between">
                  {['น้อย', 'ค่อนข้างน้อย', 'ปกติ', 'ค่อนข้างมาก', 'มาก'].map((option, index) => (
                    <button
                      key={index}
                      className="w-12 h-8 bg-orange-200 rounded-full text-xs font-medium hover:bg-orange-300 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Daily Entries History */}
        <div className="space-y-4">
          {dailyEntries.map((entry, index) => (
            <Card key={index} className={`p-4 ${isNightMode ? 'bg-blue-700 bg-opacity-50' : 'bg-white'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-lg font-semibold ${isNightMode ? 'text-white' : 'text-green-600'}`}>
                  {entry.day}
                </span>
                <div className="flex items-center space-x-2">
                  <span className={`font-semibold ${isNightMode ? 'text-blue-200' : 'text-orange-600'}`}>
                    {entry.risk}%
                  </span>
                  <span className={`text-sm ${isNightMode ? 'text-blue-200' : 'text-orange-600'}`}>
                    risk of negative mental health.
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{moodEmojis[entry.mood]}</span>
                </div>
                <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-xl">🐕</span>
                </div>
              </div>
              
              <p className={`text-sm mt-2 ${isNightMode ? 'text-blue-100' : 'text-gray-600'}`}>
                {entry.diary}
              </p>
              <button className="mt-1">
                <ChevronDown className={`w-4 h-4 ${isNightMode ? 'text-blue-300' : 'text-gray-400'}`} />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeDiary;
