
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Send, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatBot = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "I've been feeling really overwhelmed lately.",
      sender: 'user',
      timestamp: new Date()
    },
    {
      id: 2,
      text: "Oh",
      sender: 'bot',
      timestamp: new Date()
    },
    {
      id: 3,
      text: "I'm sorry to hear that.",
      sender: 'bot',
      timestamp: new Date()
    },
    {
      id: 4,
      text: "Can you tell me what's going on?",
      sender: 'bot',
      timestamp: new Date()
    },
    {
      id: 5,
      text: "I have a lot on my plate",
      sender: 'user',
      timestamp: new Date()
    },
    {
      id: 6,
      text: "and it's hard to manage everything",
      sender: 'user',
      timestamp: new Date()
    },
    {
      id: 7,
      text: "Hmmm",
      sender: 'bot',
      timestamp: new Date()
    },
    {
      id: 8,
      text: "It's okay to feel that way.",
      sender: 'bot',
      timestamp: new Date()
    },
    {
      id: 9,
      text: "Have you tried breaking things into smaller tasks?",
      sender: 'bot',
      timestamp: new Date()
    },
    {
      id: 10,
      text: "I'll try that.",
      sender: 'user',
      timestamp: new Date()
    },
    {
      id: 11,
      text: "Thanks!",
      sender: 'user',
      timestamp: new Date()
    },
    {
      id: 12,
      text: "You're welcome! Take it one step at a time.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "ขอบคุณที่แบ่งปันให้ฟัง ฉันเข้าใจความรู้สึกของคุณ",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12 bg-yellow-200">
        <div className="flex items-center space-x-3">
          <button onClick={() => navigate('/dashboard')}>
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">🤖</span>
          </div>
          <span className="text-lg font-semibold text-orange-600">Mood Mate Bot</span>
        </div>
        <div className="flex items-center space-x-2 bg-yellow-300 rounded-full px-3 py-1">
          <Phone className="w-4 h-4 text-orange-600" />
          <span className="text-sm font-medium text-orange-600">Mental health counseling</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bot' && (
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-white text-sm">🤖</span>
              </div>
            )}
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-pink-200 text-gray-800'
                  : 'bg-orange-200 text-gray-800'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            className="flex-1 h-12 bg-yellow-100 border-yellow-300 rounded-full"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            onClick={handleSendMessage}
            className="w-12 h-12 bg-orange-400 hover:bg-orange-500 rounded-full p-0"
          >
            <Send className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
