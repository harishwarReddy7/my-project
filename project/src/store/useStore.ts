import { create } from 'zustand';

interface Task {
  id: string;
  text: string;
  deadline: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
}

interface Activity {
  id: string;
  text: string;
  time: string;
  type: string;
}

interface UserState {
  userName: string;
  userRole: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  activeProjects: number;
  teamMembers: number;
  tasksDueToday: number;
  completedTasks: number;
  tasks: Task[];
  activities: Activity[];
  notifications: number;
  showTaskPopup: boolean;
  showProfileModal: boolean;
  completedTaskMessage: string;
  markTaskCompleted: (taskId: string, taskName: string) => void;
  addActivity: (activity: Omit<Activity, 'id'>) => void;
  clearNotifications: () => void;
  setShowTaskPopup: (show: boolean) => void;
  setShowProfileModal: (show: boolean) => void;
}

export const useStore = create<UserState>((set) => ({
  userName: 'Hitesh',
  userRole: 'Product Design Lead',
  department: 'Design & Innovation',
  email: 'hitesh@innovatecorp.com',
  phone: '+1 (555) 234-5678',
  location: 'San Francisco, CA',
  activeProjects: 12,
  teamMembers: 8,
  tasksDueToday: 5,
  completedTasks: 156,
  notifications: 3,
  showTaskPopup: false,
  showProfileModal: false,
  completedTaskMessage: '',
  
  tasks: [
    { id: '1', text: 'Review Q2 design system updates', deadline: 'Today, 2:00 PM', priority: 'High', completed: false },
    { id: '2', text: 'Team sync with Engineering', deadline: 'Today, 4:00 PM', priority: 'Medium', completed: false },
    { id: '3', text: 'Prepare presentation for stakeholders', deadline: 'Tomorrow, 11:00 AM', priority: 'High', completed: false },
    { id: '4', text: 'Design review feedback implementation', deadline: 'Friday, 3:00 PM', priority: 'Low', completed: false }
  ],
  
  activities: [
    { id: '1', text: 'Design review meeting for Project Aurora', time: '2 hours ago', type: 'meeting' },
    { id: '2', text: 'Updated wireframes for mobile app', time: '4 hours ago', type: 'update' },
    { id: '3', text: 'Feedback submitted for UI components', time: '6 hours ago', type: 'feedback' },
    { id: '4', text: 'New team member onboarding completed', time: 'Yesterday', type: 'team' }
  ],

  markTaskCompleted: (taskId: string, taskName: string) =>
    set((state) => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      ),
      completedTasks: state.completedTasks + 1,
      showTaskPopup: true,
      completedTaskMessage: `Task "${taskName}" has been completed successfully!`
    })),

  addActivity: (activity: Omit<Activity, 'id'>) =>
    set((state) => ({
      activities: [{
        id: Math.random().toString(36).substr(2, 9),
        ...activity
      }, ...state.activities]
    })),

  clearNotifications: () =>
    set({ notifications: 0 }),

  setShowTaskPopup: (show: boolean) =>
    set({ showTaskPopup: show }),

  setShowProfileModal: (show: boolean) =>
    set({ showProfileModal: show })
}));