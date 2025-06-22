
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { ChevronLeft } from 'lucide-react';

const Calendar = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Mock data for mood and risk tracking
  const monthlyData = {
    '2024-12-15': { mood: 0, risk: 25, diary: 'วันนี้รู้สึกดี มีเรื่องดีๆ เกิดขึ้น...' },
    '2024-12-16': { mood: 2, risk: 45, diary: 'วันธรรมดา ทำงานตามปกติ...' },
    '2024-12-17': { mood: 1, risk: 30, diary: 'ไปเที่ยวกับเพื่อนสนุกมาก...' },
    '2024-12-18': { mood: 3, risk: 60, diary: 'รู้สึกเหนื่อยจากการทำงาน...' },
    '2024-12-19': { mood: 0, risk: 20, diary: 'วันหยุดพักผ่อนได้เต็มที่...' },
  };

  const moodEmojis = ['😊', '🙂', '😐', '🙁', '😢'];
  const moodLabels = ['มีความสุขมาก', 'มีความสุข', 'เฉยๆ', 'เศร้า', 'เศร้ามาก'];

  const selectedDateData = selectedDate ? monthlyData[selectedDate.toISOString().split('T')[0]] : null;

  const getDayContent = (date: Date) => {
    const dateKey = date.toISOString().split('T')[0];
    const dayData = monthlyData[dateKey];
    if (dayData) {
      return (
        <div className="flex flex-col items-center">
          <span className="text-xs">{date.getDate()}</span>
          <span className="text-lg">{moodEmojis[dayData.mood]}</span>
        </div>
      );
    }
    return date.getDate();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/home')}
            className="p-2 -ml-2"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">ปฏิทินอารมณ์</h1>
          <div className="flex items-center space-x-2 bg-blue-200 rounded-full px-3 py-1">
            <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
            <span className="text-sm font-medium">Name</span>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Month Header */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-orange-600">ธันวาคม 2024</h2>
        </div>

        {/* Calendar */}
        <Card className="p-4 bg-white">
          <CalendarComponent
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="w-full"
          />
        </Card>

        {/* Mood Legend */}
        <Card className="p-4 bg-orange-100">
          <h3 className="font-semibold mb-3 text-orange-600">สัญลักษณ์อารมณ์</h3>
          <div className="grid grid-cols-5 gap-2">
            {moodEmojis.map((emoji, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-1">{emoji}</div>
                <div className="text-xs text-gray-600">{moodLabels[index]}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Selected Date Details */}
        {selectedDateData && (
          <Card className="p-4 bg-pink-100">
            <h3 className="font-semibold mb-3 text-pink-600">
              รายละเอียดวันที่ {selectedDate?.toLocaleDateString('th-TH')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg">{moodEmojis[selectedDateData.mood]}</span>
                <span className="text-sm text-gray-600">{moodLabels[selectedDateData.mood]}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">ความเสี่ยง:</span>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  selectedDateData.risk <= 30 ? 'bg-green-200 text-green-800' :
                  selectedDateData.risk <= 60 ? 'bg-orange-200 text-orange-800' :
                  'bg-red-200 text-red-800'
                }`}>
                  {selectedDateData.risk}%
                </span>
              </div>
              
              <div>
                <span className="text-sm font-medium">ไดอารี่:</span>
                <p className="text-sm text-gray-700 mt-1">{selectedDateData.diary}</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Calendar;
