
import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const Podcast = () => {
  const podcasts = [
    {
      title: "Perfectionism ความสมบูรณ์แบบทำร้ายเราอย่างไร?",
      subtitle: "| Shortcut ปลุกจิต EP.28",
      description: "ความสมบูรณ์แบบทำให้เราค้างแค้นกับโลกที่ไม่ไปในทางที่..."
    },
    {
      title: "จิต มี สติ และศิลปินไปตึงต่องหนอ ให้เพลิดเพลินกับพูด",
      subtitle: "| Shortcut ปลุกจิต EP.29"
    },
    {
      title: "ข้อความการการลองขบต์ (ลีลาหอแป่นใบวัน)",
      subtitle: ": This is Attana's podcast"
    },
    {
      title: "เอาใจคนอม จบแบบส์มีตรีตายโถม์วลไปดียตจดูษา",
      subtitle: "ขั้น | PrimeCast EP.5 ไหม บาม"
    },
    {
      title: "[PODCAST] Re-Mind | EP.3 :",
      subtitle: "เรียนรู้และเข้าใจในความสับสัน | Mahidol Channel"
    },
    {
      title: "ดันดิงอูดนิปฏนุมณาร่ง \"โลกปลั่งตกร์\"",
      subtitle: "เอาเป็นเพินคริงโฟว"
    },
    {
      title: "รวม 9 พอตแนะทำลึงอะส่วง (ฃีมสื่อนมีวัติใส่ท่อง \"อำเร\"",
      subtitle: "| Podcast Longplay 5M"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 bg-yellow-200 rounded-full px-3 py-1">
            <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
            <span className="text-sm font-medium">Name</span>
            <span className="text-xs text-gray-600">Username</span>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-green-600">Podcast</h1>
          <h2 className="text-xl font-semibold text-pink-400">Recommended for you</h2>
        </div>

        {/* Podcast List */}
        <div className="space-y-4">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="p-4 bg-yellow-200">
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    {podcast.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {podcast.subtitle}
                  </p>
                  {podcast.description && (
                    <p className="text-xs text-gray-500">
                      {podcast.description}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-12 bg-orange-300 rounded"></div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
