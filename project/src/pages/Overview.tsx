import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Users,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { TaskPopup } from '../components/TaskPopup';
import { ProfileModal } from '../components/ProfileModal';

export const Overview = () => {
  const {
    userName,
    userRole,
    email,
    phone,
    location,
    activeProjects,
    teamMembers,
    tasksDueToday,
    completedTasks,
    tasks,
    activities,
    markTaskCompleted,
    setShowProfileModal
  } = useStore();

  return (
    <div className="p-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome back, {userName}!</h2>
            <p className="text-gray-600 mt-1">{userRole}</p>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{location}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setShowProfileModal(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View Profile
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        {[
          { label: 'Active Projects', value: activeProjects, icon: <Briefcase className="text-indigo-500" /> },
          { label: 'Team Members', value: teamMembers, icon: <Users className="text-green-500" /> },
          { label: 'Tasks Due Today', value: tasksDueToday, icon: <Clock className="text-amber-500" /> },
          { label: 'Completed Tasks', value: completedTasks, icon: <CheckCircle2 className="text-blue-500" /> }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-700">View All</button>
          </div>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 bg-indigo-500 rounded-full"></div>
                <div>
                  <p className="text-gray-800">{activity.text}</p>
                  <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Upcoming Tasks</h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-700">View All</button>
          </div>
          <div className="space-y-4">
            {tasks.filter(task => !task.completed).map((task, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-gray-800 font-medium">{task.text}</p>
                  <p className="text-sm text-gray-500 mt-1">{task.deadline}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.priority === 'High'
                      ? 'bg-red-100 text-red-600'
                      : task.priority === 'Medium'
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {task.priority}
                  </span>
                  <button
                    onClick={() => markTaskCompleted(task.id, task.text)}
                    className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full hover:bg-indigo-700"
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TaskPopup />
      <ProfileModal />
    </div>
  );
};