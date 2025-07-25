import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const BottomNavBar = () => (
    <>
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="flex justify-around py-2">
                {['홈', '혜택', '토스쇼핑', '증권'].map((label, idx) => (
                <button key={idx} className="flex flex-col items-center py-2 px-4">
                    <div className={`w-6 h-6 ${idx === 0 ? 'bg-gray-800' : 'bg-gray-400'} rounded${label === '혜택' ? '-full' : ''} mb-1`}></div>
                    <span className={`text-xs ${idx === 0 ? 'text-gray-800 font-medium' : 'text-gray-400'}`}>{label}</span>
                </button>
                ))}
                {/* 전체 탭 */}
                <button className="flex flex-col items-center py-2 px-4">
                    <MoreHorizontal className="w-6 h-6 text-gray-400 mb-1" />
                    <span className="text-xs text-gray-400">전체</span>
                </button>
            </div>
        </div>

        {/* 하단 네비게이션을 위한 여백 */}
        <div className="h-20"></div>
    </>
);

export default BottomNavBar;
