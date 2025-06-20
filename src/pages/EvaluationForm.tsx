
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EvaluationForm = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('PHQ-9');
  const [answers, setAnswers] = useState<{[key: string]: number}>({});

  const phq9Questions = [
    "Bored, nothing is enjoyable to do.",
    "Feeling unwell, depressed or discouraged.",
    "Difficulty falling asleep, staying asleep, or sleeping too much.",
    "Easily tired or lacking energy.",
    "Bored, nothing is enjoyable to do.",
    "Loss of appetite or overeating.",
    "Feeling bad about yourself, thinking you are a failure or have let yourself or your family down.",
    "Feeling bad about yourself, thinking you are a failure or have let yourself or your family down.",
    "Feeling bad about yourself, thinking you are a failure or have let yourself or your family down."
  ];

  const suicideQuestions = [
    "Do you have thoughts about wanting to die or thinking that it would be better if you were dead?",
    "During the past month, have you had any thoughts about suicide?"
  ];

  const options4 = ['ไม่เคย', 'บางครั้ง', 'บ่อย ๆ', 'ทุกครั้ง'];
  const options2 = ['ใช่', 'ไม่'];

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [`${currentSection}-${questionIndex}`]: answerIndex
    }));
  };

  const handleSubmit = () => {
    navigate('/evaluation-results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-800">Evaluation form</h1>
          <div className="flex items-center space-x-2 bg-blue-200 rounded-full px-3 py-1">
            <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
            <span className="text-sm font-medium">Name</span>
            <span className="text-xs text-gray-600">Username</span>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Section Header */}
        <div className="bg-pink-200 rounded-lg px-4 py-2">
          <span className="text-pink-600 font-semibold">{currentSection}</span>
        </div>

        {/* Questions */}
        {currentSection === 'PHQ-9' && phq9Questions.map((question, index) => (
          <Card key={index} className="p-4 bg-orange-200">
            <div className="mb-3">
              <span className="text-orange-600 font-semibold text-lg mr-2">{index + 1}</span>
              <span className="text-gray-800 text-sm">{question}</span>
            </div>
            <div className="flex justify-between">
              {options4.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswer(index, optionIndex)}
                  className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
                    answers[`${currentSection}-${index}`] === optionIndex
                      ? 'bg-orange-400 text-white'
                      : 'bg-orange-300 text-orange-800 hover:bg-orange-400'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </Card>
        ))}

        {/* Suicide Questions Section */}
        {currentSection === 'PHQ-9' && (
          <>
            <div className="bg-pink-200 rounded-lg px-4 py-2 mt-6">
              <span className="text-pink-600 font-semibold">8Q</span>
            </div>

            {suicideQuestions.map((question, index) => (
              <Card key={`suicide-${index}`} className="p-4 bg-orange-200">
                <div className="mb-3">
                  <span className="text-orange-600 font-semibold text-lg mr-2">{index + 1}</span>
                  <span className="text-gray-800 text-sm">{question}</span>
                </div>
                <div className="flex justify-center space-x-8">
                  {options2.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswer(index, optionIndex)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                        answers[`suicide-${index}`] === optionIndex
                          ? 'bg-orange-400 text-white'
                          : 'bg-orange-300 text-orange-800 hover:bg-orange-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </Card>
            ))}
          </>
        )}

        {/* Submit Button */}
        <div className="pt-6">
          <Button
            onClick={handleSubmit}
            className="w-full h-12 bg-orange-400 hover:bg-orange-500 text-white rounded-full"
          >
            Submit Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EvaluationForm;
