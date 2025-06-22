
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bell, 
  Shield, 
  User, 
  Palette, 
  Download, 
  Globe, 
  Smartphone, 
  HelpCircle, 
  FileText 
} from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    dailyReminder: true,
    riskAlert: true,
    assessmentReminder: false
  });

  const settingsItems = [
    {
      title: 'Notification Settings',
      description: 'การตั้งค่าการแจ้งเตือน',
      icon: Bell,
      action: () => navigate('/settings/notifications')
    },
    {
      title: 'Privacy and Security',
      description: 'ความเป็นส่วนตัวและความปลอดภัย',
      icon: Shield,
      action: () => navigate('/settings/privacy')
    },
    {
      title: 'Account and Connectivity',
      description: 'จัดการบัญชีและการเชื่อมต่อ',
      icon: User,
      action: () => navigate('/settings/account')
    },
    {
      title: 'Display and Theme Customization',
      description: 'ปรับแต่งธีมและการแสดงผล',
      icon: Palette,
      action: () => navigate('/settings/theme')
    },
    {
      title: 'Backup and Sync',
      description: 'การสำรองข้อมูลและซิงค์',
      icon: Download,
      action: () => navigate('/settings/backup')
    },
    {
      title: 'Language Options',
      description: 'ตัวเลือกภาษา',
      icon: Globe,
      action: () => navigate('/settings/language')
    },
    {
      title: 'Software Updates',
      description: 'อัปเดตซอฟต์แวร์',
      icon: Smartphone,
      action: () => navigate('/settings/updates')
    },
    {
      title: 'Help & Support Options',
      description: 'ช่วยเหลือและสนับสนุน',
      icon: HelpCircle,
      action: () => navigate('/settings/help')
    },
    {
      title: 'Export Data',
      description: 'ส่งออกข้อมูล',
      icon: FileText,
      action: () => navigate('/settings/export')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/home')}
            className="p-2 -ml-2"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">ตั้งค่า</h1>
          <div className="flex items-center space-x-2 bg-blue-200 rounded-full px-3 py-1">
            <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
            <span className="text-sm font-medium">Name</span>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Quick Notification Settings */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">การแจ้งเตือนด่วน</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">การแจ้งเตือนรายวัน</p>
                <p className="text-sm text-gray-600">แจ้งเตือนให้บันทึกอารมณ์ทุกวัน</p>
              </div>
              <Switch
                checked={notifications.dailyReminder}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, dailyReminder: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">แจ้งเตือนความเสี่ยง</p>
                <p className="text-sm text-gray-600">แจ้งเตือนเมื่อความเสี่ยงสูง</p>
              </div>
              <Switch
                checked={notifications.riskAlert}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, riskAlert: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">แจ้งเตือนการประเมิน</p>
                <p className="text-sm text-gray-600">แจ้งเตือนให้ทำแบบประเมิน</p>
              </div>
              <Switch
                checked={notifications.assessmentReminder}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, assessmentReminder: checked }))
                }
              />
            </div>
          </div>
        </Card>

        {/* Settings Menu */}
        <div className="space-y-2">
          {settingsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-0">
                <button
                  onClick={item.action}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-800">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </Card>
            );
          })}
        </div>

        {/* App Information */}
        <Card className="p-4 mt-8">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
              <span className="text-white font-bold text-xl">MM</span>
            </div>
            <h3 className="text-lg font-semibold">MoodMate</h3>
            <p className="text-sm text-gray-600">เวอร์ชัน 1.0.0</p>
            <p className="text-xs text-gray-500">© 2024 MoodMate Team</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
