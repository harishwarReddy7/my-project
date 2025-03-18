import React from 'react';
import { X, Mail, Phone, MapPin, Briefcase, Users2, Calendar } from 'lucide-react';
import { useStore } from '../store/useStore';

export const ProfileModal = () => {
  const { 
    showProfileModal, 
    setShowProfileModal,
    userName,
    userRole,
    department,
    email,
    phone,
    location,
    activeProjects,
    teamMembers
  } = useStore();

  if (!showProfileModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl mx-4">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
          <button
            onClick={() => setShowProfileModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-600">{userName[0]}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{userName}</h3>
              <p className="text-gray-600">{userRole}</p>
              <p className="text-gray-500 mt-1">{department}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">{email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-800">{phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800">{location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Briefcase className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Active Projects</p>
                  <p className="text-gray-800">{activeProjects} projects</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users2 className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Team Size</p>
                  <p className="text-gray-800">{teamMembers} members</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Joined Date</p>
                  <p className="text-gray-800">January 15, 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h4 className="font-semibold text-gray-800 mb-4">Skills & Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {['UI/UX Design', 'Product Strategy', 'Team Leadership', 'Design Systems', 'User Research', 'Prototyping'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 flex justify-end">
          <button
            onClick={() => setShowProfileModal(false)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};