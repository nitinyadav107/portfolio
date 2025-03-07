import React from 'react';

const SkillBadge = ({ name, level }) => (
  <div className="bg-white/80 dark:bg-gray-800/50 rounded-lg p-4 w-40 shadow-lg backdrop-blur-sm">
    <div className="text-center mb-2 font-medium dark:text-gray-100">{name}</div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default SkillBadge;