import React from 'react';
import { FileText, Users, Clock, TrendingUp, BarChart2, CheckCircle2, AlertCircle } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  team: string[];
  deadline: string;
  status: 'On Track' | 'At Risk' | 'Completed';
  budget: string;
  tasks: {
    total: number;
    completed: number;
  };
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Project Aurora',
    description: 'Design and development of the next-generation user interface components.',
    progress: 75,
    team: ['Sarah Chen', 'David Kim', 'Emily Johnson'],
    deadline: '2024-03-15',
    status: 'On Track',
    budget: '$45,000',
    tasks: {
      total: 24,
      completed: 18
    }
  },
  {
    id: '2',
    name: 'Mobile App Redesign',
    description: 'Complete overhaul of the mobile application with focus on user experience.',
    progress: 45,
    team: ['Michael Rodriguez', 'Emily Johnson'],
    deadline: '2024-04-01',
    status: 'At Risk',
    budget: '$32,000',
    tasks: {
      total: 18,
      completed: 8
    }
  },
  {
    id: '3',
    name: 'Design System 2.0',
    description: 'Updating and expanding the design system with new components and guidelines.',
    progress: 100,
    team: ['Sarah Chen', 'David Kim'],
    deadline: '2024-02-28',
    status: 'Completed',
    budget: '$28,000',
    tasks: {
      total: 16,
      completed: 16
    }
  },
  {
    id: '4',
    name: 'Customer Portal',
    description: 'Development of a new customer portal for account management and support.',
    progress: 60,
    team: ['Michael Rodriguez', 'Sarah Chen', 'Emily Johnson'],
    deadline: '2024-05-15',
    status: 'On Track',
    budget: '$56,000',
    tasks: {
      total: 32,
      completed: 19
    }
  }
];

export const Projects = () => {
  return (
    <div className="p-8">
      {/* Projects Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Projects Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[
            { label: 'Total Projects', value: projects.length, icon: <FileText className="text-indigo-500" /> },
            { label: 'Team Members', value: '8', icon: <Users className="text-green-500" /> },
            { label: 'Total Budget', value: '$161,000', icon: <BarChart2 className="text-amber-500" /> },
            { label: 'Avg. Progress', value: '70%', icon: <TrendingUp className="text-purple-500" /> }
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

      {/* Project List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'On Track'
                      ? 'bg-green-100 text-green-600'
                      : project.status === 'At Risk'
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Progress</span>
                  <span className="text-sm font-medium text-gray-600">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Due {project.deadline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{project.team.length} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart2 size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{project.budget}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {project.tasks.completed}/{project.tasks.total} tasks
                  </span>
                </div>
              </div>

              <div className="mt-4 flex -space-x-2">
                {project.team.map((member, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                    title={member}
                  >
                    <span className="text-xs font-medium">{member.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};