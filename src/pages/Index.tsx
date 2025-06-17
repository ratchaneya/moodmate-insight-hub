
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, BarChart3, MessageCircle, Calendar, Shield, Smartphone } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'วิเคราะห์พฤติกรรม',
      description: 'ติดตามและวิเคราะห์พฤติกรรมการใช้โซเชียลมีเดียเพื่อประเมินสุขภาพจิต'
    },
    {
      icon: Heart,
      title: 'บันทึกอารมณ์',
      description: 'บันทึกอารมณ์และความรู้สึกประจำวันพร้อมการวิเคราะห์แนวโน้ม'
    },
    {
      icon: MessageCircle,
      title: 'AI ให้คำปรึกษา',
      description: 'ปรึกษาปัญหาและรับคำแนะนำจาก AI ที่เข้าใจด้านสุขภาพจิต'
    },
    {
      icon: Calendar,
      title: 'ติดตามรายวัน',
      description: 'ดูผลการวิเคราะห์และแนวโน้มสุขภาพจิตในรูปแบบปฏิทิน'
    },
    {
      icon: Shield,
      title: 'ความปลอดภัย',
      description: 'ข้อมูลของคุณได้รับการปกป้องด้วยระบบรักษาความปลอดภัยขั้นสูง'
    },
    {
      icon: Smartphone,
      title: 'ใช้งานง่าย',
      description: 'ออกแบบให้ใช้งานง่าย เข้าถึงได้จากทุกอุปกรณ์'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 mood-gradient rounded-2xl flex items-center justify-center shadow-lg animate-mood-pulse">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">MoodMate</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              แอปพลิเคชันวิเคราะห์สุขภาพจิตจากพฤติกรรมการใช้มือถือ
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              ช่วยให้คุณเข้าใจสุขภาพจิตของตนเอง ติดตามอาการเบื้องต้น และเข้าถึงการดูแลได้ง่ายขึ้น
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-3 mood-gradient border-0 hover:opacity-90 transition-all duration-200 hover:scale-105">
                  เริ่มใช้งาน
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-3">
                  เรียนรู้เพิ่มเติม
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ฟีเจอร์หลัก</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MoodMate มาพร้อมกับฟีเจอร์ครบครันเพื่อดูแลสุขภาพจิตของคุณอย่างรอบด้าน
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-200 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              เริ่มดูแลสุขภาพจิตของคุณวันนี้
            </h2>
            <p className="text-xl mb-8 opacity-90">
              เข้าร่วมกับผู้ใช้หลายพันคนที่ใช้ MoodMate เพื่อพัฒนาสุขภาวะทางจิตใจ
            </p>
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3 hover:scale-105 transition-all duration-200">
                เริ่มต้นฟรี
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
