
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MoodOption {
  id: string;
  emoji: string;
  label: string;
  value: number;
  color: string;
}

const moodOptions: MoodOption[] = [
  { id: 'very-happy', emoji: '😊', label: 'มีความสุขมาก', value: 5, color: 'text-green-500' },
  { id: 'happy', emoji: '🙂', label: 'มีความสุข', value: 4, color: 'text-blue-500' },
  { id: 'neutral', emoji: '😐', label: 'เฉยๆ', value: 3, color: 'text-gray-500' },
  { id: 'sad', emoji: '🙁', label: 'เศร้า', value: 2, color: 'text-orange-500' },
  { id: 'very-sad', emoji: '😢', label: 'เศร้ามาก', value: 1, color: 'text-red-500' },
];

interface MoodSelectorProps {
  onMoodSelect: (mood: MoodOption) => void;
  selectedMood?: string;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodSelect, selectedMood }) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-center">วันนี้คุณรู้สึกอย่างไร?</h3>
      <div className="grid grid-cols-5 gap-3">
        {moodOptions.map((mood) => (
          <Button
            key={mood.id}
            variant={selectedMood === mood.id ? "default" : "outline"}
            className={`flex flex-col items-center justify-center h-20 space-y-2 transition-all duration-200 hover:scale-105 ${
              selectedMood === mood.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => onMoodSelect(mood)}
          >
            <span className="text-2xl">{mood.emoji}</span>
            <span className="text-xs font-medium text-center leading-tight">{mood.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default MoodSelector;
