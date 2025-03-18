import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { useStore } from '../store/useStore';

export const TaskPopup = () => {
  const { showTaskPopup, completedTaskMessage, setShowTaskPopup } = useStore();

  useEffect(() => {
    if (showTaskPopup) {
      const timer = setTimeout(() => {
        setShowTaskPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showTaskPopup, setShowTaskPopup]);

  if (!showTaskPopup) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-green-100 p-4 flex items-center gap-3 animate-slide-up">
      <CheckCircle className="text-green-500" size={24} />
      <p className="text-gray-800">{completedTaskMessage}</p>
    </div>
  );
};