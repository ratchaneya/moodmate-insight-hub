
import React from 'react';
import { Card } from '@/components/ui/card';

const EvaluationResults = () => {
  const results = [
    {
      test: 'PHQ-9',
      score: '12/27',
      result: 'You have moderate depression.',
      color: 'bg-yellow-200'
    },
    {
      test: '8Q',
      score: '9/44',
      result: 'You have currently at a moderate risk of suicide.',
      color: 'bg-purple-200'
    },
    {
      test: 'GAD-7',
      score: '10/21',
      result: 'You have Moderate Anxiety.',
      color: 'bg-green-200'
    },
    {
      test: 'PDSS',
      score: '28/28',
      result: 'You are at risk of developing panic disorder',
      color: 'bg-pink-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between">
          <div className="bg-pink-200 rounded-lg px-4 py-2">
            <span className="text-pink-600 font-semibold">Results</span>
          </div>
          <div className="flex items-center space-x-2 bg-blue-200 rounded-full px-3 py-1">
            <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
            <span className="text-sm font-medium">Name</span>
            <span className="text-xs text-gray-600">Username</span>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {results.map((result, index) => (
          <Card key={index} className={`p-6 ${result.color}`}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-pink-500">{result.test}</span>
                <span className="text-2xl font-bold text-blue-600">{result.score}</span>
              </div>
              
              <div>
                <p className="text-sm text-pink-500 mb-1">Test Results :</p>
                <div className="bg-orange-300 rounded-lg px-4 py-2">
                  <p className="text-sm font-medium text-gray-800">{result.result}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EvaluationResults;
