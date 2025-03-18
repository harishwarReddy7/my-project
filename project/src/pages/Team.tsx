import React from 'react';
import { Users, Mail, Phone, MapPin, Star, Award, TrendingUp } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  performance: number;
  projects: number;
  status: 'Active' | 'Away' | 'Busy';
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Senior UI Designer',
    email: 'sarah.chen@innovatecorp.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    performance: 95,
    projects: 8,
    status: 'Active'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Product Manager',
    email: 'michael.r@innovatecorp.com',
    phone: '+1 (555) 234-5678',
    location: 'New York, NY',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    performance: 88,
    projects: 5,
    status: 'Busy'
  },
  {
    id: '3',
    name: 'Emily Johnson',
    role: 'UX Researcher',
    email: 'emily.j@innovatecorp.com',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    performance: 92,
    projects: 6,
    status: 'Active'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Visual Designer',
    email: 'david.kim@innovatecorp.com',
    phone: '+1 (555) 456-7890',
    location: 'Seattle, WA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    performance: 85,
    projects: 4,
    status: 'Away'
  }
];

export const Team = () => {
  return (
    <div className="p-8">
      {/* Team Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Team Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[
            { label: 'Total Members', value: teamMembers.length, icon: <Users className="text-indigo-500" /> },
            { label: 'Active Projects', value: '15', icon: <Star className="text-amber-500" /> },
            { label: 'Performance', value: '91%', icon: <TrendingUp className="text-green-500" /> },
            { label: 'Awards', value: '12', icon: <Award className="text-purple-500" /> }
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

      {/* Team Members */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800">Team Members</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {teamMembers.map((member) => (
            <div key={member.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    member.status === 'Active'
                      ? 'bg-green-100 text-green-600'
                      : member.status === 'Away'
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {member.status}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{member.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{member.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{member.location}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-6">
                <div>
                  <p className="text-sm text-gray-500">Performance</p>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${member.performance}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{member.performance}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Projects</p>
                  <p className="mt-1 text-sm font-medium text-gray-600">{member.projects} projects</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};