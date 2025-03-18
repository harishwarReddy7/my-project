import React from 'react';
import { Calendar as CalendarIcon, Clock, Users, MapPin, Video, MessageSquare } from 'lucide-react';

interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  attendees: number;
  location: string;
  type: 'In-Person' | 'Virtual';
  description: string;
}

const upcomingMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Design System Review',
    date: 'Today',
    time: '10:00 AM',
    duration: '1 hour',
    attendees: 6,
    location: 'Conference Room A',
    type: 'In-Person',
    description: 'Review and discuss updates to our design system components.'
  },
  {
    id: '2',
    title: 'Project Aurora Sprint Planning',
    date: 'Today',
    time: '2:00 PM',
    duration: '2 hours',
    attendees: 8,
    location: 'Zoom Meeting',
    type: 'Virtual',
    description: 'Plan and prioritize tasks for the upcoming sprint.'
  },
  {
    id: '3',
    title: 'Client Presentation',
    date: 'Tomorrow',
    time: '11:00 AM',
    duration: '1.5 hours',
    attendees: 12,
    location: 'Main Conference Room',
    type: 'In-Person',
    description: 'Present the latest product designs to the client stakeholders.'
  },
  {
    id: '4',
    title: 'Team Sync',
    date: 'Tomorrow',
    time: '3:00 PM',
    duration: '45 minutes',
    attendees: 5,
    location: 'Google Meet',
    type: 'Virtual',
    description: 'Weekly team sync to discuss progress and blockers.'
  }
];

export const Schedule = () => {
  return (
    <div className="p-8">
      {/* Schedule Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[
            { label: 'Today\'s Meetings', value: '4', icon: <CalendarIcon className="text-indigo-500" /> },
            { label: 'Total Hours', value: '6.5', icon: <Clock className="text-amber-500" /> },
            { label: 'Participants', value: '31', icon: <Users className="text-green-500" /> },
            { label: 'Rooms Booked', value: '3', icon: <MapPin className="text-purple-500" /> }
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

      {/* Upcoming Meetings */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800">Upcoming Meetings</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {upcomingMeetings.map((meeting) => (
            <div key={meeting.id} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{meeting.title}</h4>
                  <p className="text-gray-600 mt-1">{meeting.description}</p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{meeting.date}, {meeting.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{meeting.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{meeting.attendees} attendees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {meeting.type === 'Virtual' ? (
                        <Video size={16} className="text-gray-400" />
                      ) : (
                        <MapPin size={16} className="text-gray-400" />
                      )}
                      <span className="text-sm text-gray-600">{meeting.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-700">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 flex gap-4">
        <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <CalendarIcon size={20} />
          Schedule Meeting
        </button>
        <button className="flex-1 bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <MessageSquare size={20} />
          Send Reminder
        </button>
      </div>
    </div>
  );
};