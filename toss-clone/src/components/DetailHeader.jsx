import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DetailHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm">
      {/* 왼쪽: 뒤로가기 버튼 */}
      <button
        className="p-1 focus:outline-none"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-6 h-6 text-gray-800" />
      </button>

      {/* 중앙: 제목 (있을 때만 표시) */}
      <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
        {title && (
          <h1 className="text-base font-medium text-gray-800 pointer-events-none">
            {title}
          </h1>
        )}
      </div>

      {/* 오른쪽 공간 확보용 빈 div */}
      <div className="w-6 h-6" />
    </div>
  );
};

export default DetailHeader;
