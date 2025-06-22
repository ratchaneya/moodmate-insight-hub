
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const navigate = useNavigate();

  // Mock data for various charts
  const riskData = [
    { name: 'ไม่มีความเสี่ยง', value: 40, color: '#22c55e' },
    { name: 'ความเสี่ยงซึมเศร้า', value: 25, color: '#f59e0b' },
    { name: 'ความเสี่ยงวิตกกังวล', value: 20, color: '#ef4444' },
    { name: 'ความเสี่ยงย้ำคิดย้ำทำ', value: 10, color: '#8b5cf6' },
    { name: 'ความเสี่ยงฆ่าตัวตาย', value: 5, color: '#dc2626' }
  ];

  const dailyRiskData = [
    { date: '12/15', risk: 25 },
    { date: '12/16', risk: 45 },
    { date: '12/17', risk: 30 },
    { date: '12/18', risk: 60 },
    { date: '12/19', risk: 20 },
    { date: '12/20', risk: 35 },
    { date: '12/21', risk: 40 }
  ];

  const assessmentData = [
    { date: '12/10', phq9: 12, gad7: 10, pdss: 28 },
    { date: '12/15', phq9: 15, gad7: 12, pdss: 30 },
    { date: '12/20', phq9: 10, gad7: 8, pdss: 25 }
  ];

  const socialMediaData = [
    { name: 'วิถีชีวิต', value: 30, color: '#3b82f6' },
    { name: 'อาชีพอนาคต', value: 20, color: '#10b981' },
    { name: 'เงิน', value: 15, color: '#f59e0b' },
    { name: 'การศึกษา', value: 15, color: '#8b5cf6' },
    { name: 'เนื้อหาความรุนแรง', value: 10, color: '#ef4444' },
    { name: 'เกม', value: 5, color: '#6b7280' },
    { name: 'พัฒนาตนเอง', value: 5, color: '#22c55e' }
  ];

  const moodData = [
    { date: '12/15', mood: 4 },
    { date: '12/16', mood: 2 },
    { date: '12/17', mood: 3 },
    { date: '12/18', mood: 1 },
    { date: '12/19', mood: 4 },
    { date: '12/20', mood: 3 },
    { date: '12/21', mood: 2 }
  ];

  const behaviorData = [
    { date: '12/15', sleep: 7, eating: 8 },
    { date: '12/16', sleep: 6, eating: 6 },
    { date: '12/17', sleep: 8, eating: 9 },
    { date: '12/18', sleep: 5, eating: 5 },
    { date: '12/19', sleep: 7, eating: 8 },
    { date: '12/20', sleep: 6, eating: 7 },
    { date: '12/21', sleep: 8, eating: 8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/home')}
            className="p-2 -ml-2"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">แดชบอร์ดวิเคราะห์</h1>
          <div className="flex items-center space-x-2 bg-blue-200 rounded-full px-3 py-1">
            <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
            <span className="text-sm font-medium">Name</span>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Overall Risk Assessment */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-center">ความเสี่ยงทางสุขภาพจิตโดยรวม</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={riskData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {riskData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Daily Risk Analysis */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">ความเสี่ยงรายวัน</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dailyRiskData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="risk" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Assessment Results */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">ผลการประเมินจากแบบทดสอบ</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={assessmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="phq9" fill="#3b82f6" name="PHQ-9" />
              <Bar dataKey="gad7" fill="#10b981" name="GAD-7" />
              <Bar dataKey="pdss" fill="#8b5cf6" name="PDSS" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Social Media Analysis */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-center">การวิเคราะห์จากโซเชียลมีเดีย</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={socialMediaData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {socialMediaData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Diary Analysis */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">การวิเคราะห์จากไดอารี่</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">
              <strong>วิเคราะห์ล่าสุด:</strong> จากการเขียนไดอารี่ในรอบ 7 วันที่ผ่านมา
            </p>
            <p className="text-sm text-gray-600">
              ผู้ใช้แสดงสัญญาณของความเครียดจากการทำงาน และมีการกล่าวถึงความรู้สึกเหนื่อยล้า 
              แต่ยังคงมีช่วงเวลาที่รู้สึกมีความสุข โดยเฉพาะในวันหยุด แนะนำให้ติดตามอาการต่อไป
            </p>
          </div>
        </Card>

        {/* Mood Tracking */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">การติดตามอารมณ์รายวัน</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[1, 5]} />
              <Tooltip />
              <Line type="monotone" dataKey="mood" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Daily Behavior Tracking */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">การติดตามพฤติกรรมประจำวัน</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={behaviorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sleep" stroke="#3b82f6" strokeWidth={2} name="การนอน" />
              <Line type="monotone" dataKey="eating" stroke="#10b981" strokeWidth={2} name="การกิน" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
