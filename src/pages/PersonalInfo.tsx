
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronDown } from 'lucide-react';

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickname: '',
    username: '',
    dateOfBirth: { day: '', month: '', year: '' },
    gender: '',
    congenitalDisease: '',
    relationshipStatus: '',
    hormonalChanges: '',
    lastMenstrualPeriod: ''
  });

  const [showMenstrualField, setShowMenstrualField] = useState(false);

  const handleNext = () => {
    navigate('/personal-info-2');
  };

  const handleGenderChange = (value: string) => {
    setFormData(prev => ({ ...prev, gender: value }));
    setShowMenstrualField(value === 'female');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8 mt-4">
        <h1 className="text-2xl font-bold text-orange-600">Personal information</h1>
      </div>

      <div className="flex-1 space-y-6">
        {/* Nickname */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Nickname</label>
          <Input
            placeholder="Write your nickname"
            value={formData.nickname}
            onChange={(e) => setFormData(prev => ({ ...prev, nickname: e.target.value }))}
            className="h-12 bg-orange-200 border-orange-300 rounded-full placeholder-orange-400"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Username</label>
          <Input
            placeholder="Write your username"
            value={formData.username}
            onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
            className="h-12 bg-orange-200 border-orange-300 rounded-full placeholder-orange-400"
          />
        </div>

        {/* Date of birth */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Date of birth</label>
          <div className="flex space-x-2">
            <Input
              placeholder="dd"
              className="h-12 bg-orange-200 border-orange-300 rounded-full text-center"
              maxLength={2}
            />
            <Input
              placeholder="mm"
              className="h-12 bg-orange-200 border-orange-300 rounded-full text-center"
              maxLength={2}
            />
            <Input
              placeholder="yyyy"
              className="h-12 bg-orange-200 border-orange-300 rounded-full text-center"
              maxLength={4}
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">gender</label>
          <Select value={formData.gender} onValueChange={handleGenderChange}>
            <SelectTrigger className="h-12 bg-orange-200 border-orange-300 rounded-full">
              <SelectValue placeholder="Prefer not to say" />
              <ChevronDown className="w-4 h-4" />
            </SelectTrigger>
            <SelectContent className="bg-orange-100 border-orange-300">
              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="non-binary">Non-binary / Genderqueer</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Menstrual period field (conditional) */}
        {showMenstrualField && (
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Date of last menstrual period</label>
            <Input
              placeholder="Enter date"
              value={formData.lastMenstrualPeriod}
              onChange={(e) => setFormData(prev => ({ ...prev, lastMenstrualPeriod: e.target.value }))}
              className="h-12 bg-orange-200 border-orange-300 rounded-full placeholder-orange-400"
            />
          </div>
        )}

        {/* Congenital disease */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Congenital disease</label>
          <Select value={formData.congenitalDisease} onValueChange={(value) => setFormData(prev => ({ ...prev, congenitalDisease: value }))}>
            <SelectTrigger className="h-12 bg-orange-200 border-orange-300 rounded-full">
              <SelectValue placeholder="None" />
              <ChevronDown className="w-4 h-4" />
            </SelectTrigger>
            <SelectContent className="bg-orange-100 border-orange-300">
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="depressive-disorder">Depressive disorder</SelectItem>
              <SelectItem value="generalized-anxiety-disorder">Generalized anxiety disorder</SelectItem>
              <SelectItem value="bipolar-disorder">Bipolar disorder</SelectItem>
              <SelectItem value="obsessive-compulsive-disorder">Obsessive-compulsive disorder</SelectItem>
              <SelectItem value="adhd">ADHD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Relationship status */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Relationship status</label>
          <Select value={formData.relationshipStatus} onValueChange={(value) => setFormData(prev => ({ ...prev, relationshipStatus: value }))}>
            <SelectTrigger className="h-12 bg-orange-200 border-orange-300 rounded-full">
              <SelectValue placeholder="Single" />
              <ChevronDown className="w-4 h-4" />
            </SelectTrigger>
            <SelectContent className="bg-orange-100 border-orange-300">
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="in-a-relationship">In a relationship</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
              <SelectItem value="separated">Separated</SelectItem>
              <SelectItem value="complicated">Complicated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Hormonal changes */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Hormonal changes</label>
          <Select value={formData.hormonalChanges} onValueChange={(value) => setFormData(prev => ({ ...prev, hormonalChanges: value }))}>
            <SelectTrigger className="h-12 bg-orange-200 border-orange-300 rounded-full">
              <SelectValue placeholder="normal" />
              <ChevronDown className="w-4 h-4" />
            </SelectTrigger>
            <SelectContent className="bg-orange-100 border-orange-300">
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="pregnancy-status">Pregnancy status</SelectItem>
              <SelectItem value="menopause-perimenopause">Menopause or perimenopause</SelectItem>
              <SelectItem value="hormonal-therapy">Use of hormonal therapy</SelectItem>
              <SelectItem value="recent-fluctuations">Recent hormonal fluctuations</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-8 mb-4">
        <Button
          onClick={handleNext}
          className="w-full h-14 text-lg font-semibold bg-orange-400 hover:bg-orange-500 text-white rounded-full"
        >
          Next
        </Button>
      </div>

      {/* Bottom Indicator */}
      <div className="flex justify-center">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default PersonalInfo;
