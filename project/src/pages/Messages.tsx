import React, { useState } from 'react';
import { MessageSquare, Star, Archive, Trash2, Send, Search, Users, Clock } from 'lucide-react';

interface Message {
  id: string;
  sender: {
    name: string;
    avatar: string;
    email: string;
  };
  subject: string;
  preview: string;
  date: string;
  unread: boolean;
  starred: boolean;
}

const messages: Message[] = [
  {
    id: '1',
    sender: {
      name: 'Sarah Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      email: 'sarah.chen@innovatecorp.com'
    },
    subject: 'Design System Updates',
    preview: 'I\'ve updated the component library with the latest design tokens...',
    date: '10:30 AM',
    unread: true,
    starred: true
  },
  {
    id: '2',
    sender: {
      name: 'Michael Rodriguez',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      email: 'michael.r@innovatecorp.com'
    },
    subject: 'Project Aurora Sprint Review',
    preview: 'Here\'s the agenda for tomorrow\'s sprint review meeting...',
    date: '9:15 AM',
    unread: true,
    starred: false
  },
  {
    id: '3',
    sender: {
      name: 'Emily Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      email: 'emily.j@innovatecorp.com'
    },
    subject: 'User Research Findings',
    preview: 'Attached are the key insights from our recent user interviews...',
    date: 'Yesterday',
    unread: false,
    starred: true
  },
  {
    id: '4',
    sender: {
      name: 'David Kim',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      email: 'david.kim@innovatecorp.com'
    },
    subject: 'Visual Design Review',
    preview: 'Can we schedule a quick review of the latest mockups?',
    date: 'Yesterday',
    unread: false,
    starred: false
  }
];

export const Messages = () => {
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  const handleComposeClick = () => {
    setIsComposeOpen(true);
  };

  return (
    <div className="p-8">
      {/* Messages Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Messages</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[
            { label: 'Unread', value: messages.filter(m => m.unread).length, icon: <MessageSquare className="text-indigo-500" /> },
            { label: 'Starred', value: messages.filter(m => m.starred).length, icon: <Star className="text-amber-500" /> },
            { label: 'Archived', value: '24', icon: <Archive className="text-green-500" /> },
            { label: 'Sent', value: '156', icon: <Send className="text-purple-500" /> }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-8 relative">
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full px-4 py-3 pl-12 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
      </div>

      {/* Message List */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 hover:bg-gray-50 cursor-pointer ${message.unread ? 'bg-indigo-50' : ''}`}
          >
            <div className="flex items-center gap-4">
              <img
                src={message.sender.avatar}
                alt={message.sender.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className={`text-sm font-medium ${message.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                    {message.sender.name}
                  </h4>
                  <span className="text-sm text-gray-500">{message.date}</span>
                </div>
                <p className={`text-sm ${message.unread ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                  {message.subject}
                </p>
                <p className="text-sm text-gray-500 truncate">{message.preview}</p>
              </div>
              <div className="flex items-center gap-2">
                {message.starred && <Star size={16} className="text-amber-500" />}
                {message.unread && <div className="w-2 h-2 bg-indigo-500 rounded-full" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compose Button */}
      <button 
        onClick={handleComposeClick}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg"
      >
        <MessageSquare size={20} />
        Compose
      </button>

      {/* Compose Modal */}
      {isComposeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">New Message</h3>
              <button 
                onClick={() => setIsComposeOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To:</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter recipient email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md h-40 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Type your message here..."
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsComposeOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};