import React from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between">
      {/* 할 일 버튼 */}
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onClick={() => navigate('/tasks')}
      >
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
        <span className="text-lg font-medium text-gray-800">할 일</span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </button>

      {/* 결제, 알림 버튼 */}
      <div className="flex items-center space-x-3">
        <button
          className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600 hover:bg-gray-200 focus:outline-none"
          onClick={() => navigate('/payment')}
        >
          결제
        </button>
        <button
          className="p-1 rounded hover:bg-gray-100 focus:outline-none"
          onClick={() => navigate('/notifications')}
        >
          <Bell className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default Header;
