
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MoodSelector from '@/components/MoodSelector';
import RiskIndicator from '@/components/RiskIndicator';
import { Calendar, BarChart3, Settings, User, TrendingUp, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState<string>();
  const [currentRisk] = useState(25); // Mock data

  const recentDays = [
    { date: '16 ธ.ค.', risk: 20, mood: '😊', diary: 'วันนี้รู้สึกดี มีเรื่องดีๆ เกิดขึ้น...' },
    { date: '15 ธ.ค.', risk: 35, mood: '😐', diary: 'วันธรรมดา ทำงานตามปกติ...' },
    { date: '14 ธ.ค.', risk: 15, mood: '🙂', diary: 'ไปเที่ยวกับเพื่อนสนุกมาก...' },
    { date: '13 ธ.ค.', risk: 45, mood: '🙁', diary: 'รู้สึกเหนื่อยจากการทำงาน...' },
    { date: '12 ธ.ค.', risk: 10, mood: '😊', diary: 'วันหยุดพักผ่อนได้เต็มที่...' },
  ];

  const handleMoodSelect = (mood: any) => {
    setSelectedMood(mood.id);
    // Here you would save the mood to your backend
    console.log('Selected mood:', mood);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">สวัสดี! 👋</h1>
          <p className="text-muted-foreground mt-1">ยินดีต้อนรับสู่ MoodMate</p>
        </div>
        
        <div className="flex space-x-3">
          <Link to="/calendar">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              ปฏิทิน
            </Button>
          </Link>
          <Link to="/analytics">
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              สถิติ
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            ตั้งค่า
          </Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Risk Indicator */}
          <RiskIndicator riskLevel={currentRisk} />
          
          {/* Mood Selector */}
          <MoodSelector onMoodSelect={handleMoodSelect} selectedMood={selectedMood} />
          
          {/* Recent Days Timeline */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                ความเสี่ยง 5 วันล่าสุด
              </h3>
              <span className="text-sm text-muted-foreground">ธันวาคม 2024</span>
            </div>
            
            <div className="space-y-4">
              {recentDays.map((day, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="text-sm font-medium w-16">{day.date}</div>
                  <div className="text-2xl">{day.mood}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium">ความเสี่ยง: {day.risk}%</span>
                      <div className={`w-2 h-2 rounded-full ${
                        day.risk <= 30 ? 'bg-green-500' : 
                        day.risk <= 60 ? 'bg-orange-500' : 
                        'bg-red-500'
                      }`}></div>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{day.diary}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column - Profile */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">ข้อมูลส่วนตัว</h3>
                <p className="text-sm text-muted-foreground">ดูข้อมูลโปรไฟล์</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">อายุ:</span>
                <span>18 ปี</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">เพศ:</span>
                <span>หญิง</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">ประวัติสุขภาพจิต:</span>
                <span>ไม่มี</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">สถานะความสัมพันธ์:</span>
                <span>โสด</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">ความเสี่ยงปัจจุบัน:</span>
                <span className="text-green-600 font-medium">ต่ำ</span>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">การดำเนินการด่วน</h3>
            <div className="space-y-3">
              <Link to="/assessment" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  ทำแบบประเมิน
                </Button>
              </Link>
              
              <Link to="/chat" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  ปรึกษา AI
                </Button>
              </Link>
              
              <Link to="/diary" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  เขียนไดอารี่
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
