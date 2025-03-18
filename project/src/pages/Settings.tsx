import React from 'react';
import { Bell, Lock, Eye, Moon, Globe, User, Palette, BellRing } from 'lucide-react';

interface SettingSection {
  title: string;
  icon: JSX.Element;
  settings: {
    id: string;
    label: string;
    description: string;
    type: 'toggle' | 'select' | 'input';
    value?: string | boolean;
    options?: string[];
  }[];
}

const settingSections: SettingSection[] = [
  {
    title: 'Notifications',
    icon: <Bell className="text-indigo-500" />,
    settings: [
      {
        id: 'email-notifications',
        label: 'Email Notifications',
        description: 'Receive email notifications for important updates',
        type: 'toggle',
        value: true
      },
      {
        id: 'push-notifications',
        label: 'Push Notifications',
        description: 'Get push notifications in your browser',
        type: 'toggle',
        value: true
      },
      {
        id: 'notification-sound',
        label: 'Notification Sound',
        description: 'Play a sound when notifications arrive',
        type: 'toggle',
        value: false
      }
    ]
  },
  {
    title: 'Appearance',
    icon: <Palette className="text-green-500" />,
    settings: [
      {
        id: 'theme',
        label: 'Theme',
        description: 'Choose your preferred color theme',
        type: 'select',
        value: 'light',
        options: ['Light', 'Dark', 'System']
      },
      {
        id: 'density',
        label: 'Interface Density',
        description: 'Adjust the compactness of the interface',
        type: 'select',
        value: 'comfortable',
        options: ['Comfortable', 'Compact', 'Spacious']
      }
    ]
  },
  {
    title: 'Privacy',
    icon: <Lock className="text-amber-500" />,
    settings: [
      {
        id: 'activity-status',
        label: 'Activity Status',
        description: 'Show when you\'re active to other team members',
        type: 'toggle',
        value: true
      },
      {
        id: 'read-receipts',
        label: 'Read Receipts',
        description: 'Show others when you\'ve read their messages',
        type: 'toggle',
        value: true
      }
    ]
  },
  {
    title: 'Language',
    icon: <Globe className="text-purple-500" />,
    settings: [
      {
        id: 'language',
        label: 'Display Language',
        description: 'Select your preferred language',
        type: 'select',
        value: 'english',
        options: ['English', 'Spanish', 'French', 'German', 'Chinese']
      },
      {
        id: 'time-format',
        label: 'Time Format',
        description: 'Choose 12 or 24-hour time format',
        type: 'select',
        value: '12h',
        options: ['12-hour', '24-hour']
      }
    ]
  }
];

export const Settings = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

        <div className="space-y-6">
          {settingSections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  {section.icon}
                  <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {section.settings.map((setting) => (
                  <div key={setting.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <label htmlFor={setting.id} className="text-sm font-medium text-gray-900">
                          {setting.label}
                        </label>
                        <p className="text-sm text-gray-500 mt-1">{setting.description}</p>
                      </div>
                      {setting.type === 'toggle' ? (
                        <button
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${setting.value ? 'bg-indigo-600' : 'bg-gray-200'}`}
                          role="switch"
                          aria-checked={setting.value}
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${setting.value ? 'translate-x-5' : 'translate-x-0'}`}
                          />
                        </button>
                      ) : setting.type === 'select' ? (
                        <select
                          id={setting.id}
                          className="mt-1 block w-48 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          defaultValue={setting.value}
                        >
                          {setting.options?.map((option) => (
                            <option key={option} value={option.toLowerCase()}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};