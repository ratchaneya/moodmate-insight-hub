
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface RiskIndicatorProps {
  riskLevel: number; // 0-100
  title?: string;
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ 
  riskLevel, 
  title = "ความเสี่ยงโดยรวม" 
}) => {
  const getRiskInfo = (level: number) => {
    if (level <= 30) {
      return {
        text: 'ต่ำ',
        description: 'อาการอาจไม่เข้าข่ายความเสี่ยงรุนแรง ควรเฝ้าระวังและติดตามตนเอง',
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        icon: CheckCircle,
        progressColor: 'bg-green-500'
      };
    } else if (level <= 60) {
      return {
        text: 'ปานกลาง',
        description: 'ควรระวัง เริ่มมีสัญญาณอารมณ์ลบหรือความเครียด ควรปรึกษาเจ้าหน้าที่ด้านสุขภาพจิต',
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
        icon: AlertCircle,
        progressColor: 'bg-orange-500'
      };
    } else if (level <= 80) {
      return {
        text: 'สูง',
        description: 'มีสัญญาณความเสี่ยงที่ชัดเจน ควรพบแพทย์หรือผู้เชี่ยวชาญด้านจิตเวชโดยเร็ว',
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        icon: AlertTriangle,
        progressColor: 'bg-red-500'
      };
    } else {
      return {
        text: 'เข้าขั้นวิกฤติ',
        description: 'ควรได้รับการดูแลทางการแพทย์เร่งด่วน เช่น อยู่ในภาวะเสี่ยงต่อการทำร้ายตนเองหรือผู้อื่น',
        color: 'text-red-800',
        bgColor: 'bg-red-200',
        icon: XCircle,
        progressColor: 'bg-red-700'
      };
    }
  };

  const riskInfo = getRiskInfo(riskLevel);
  const Icon = riskInfo.icon;

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className={`w-6 h-6 ${riskInfo.color}`} />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{riskLevel}%</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${riskInfo.color} ${riskInfo.bgColor}`}>
            {riskInfo.text}
          </span>
        </div>
        
        <Progress value={riskLevel} className="h-3" />
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {riskInfo.description}
        </p>
      </div>
    </Card>
  );
};

export default RiskIndicator;
