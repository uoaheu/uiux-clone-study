import React from "react";

const CreditScoreCard = () => (
    <div className="mt-6 bg-white mx-4 rounded-2xl shadow-sm">
        {/* 내 신용점수 */}
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                {/* 신용점수 아이콘 */}
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="text-white text-lg">✓</div>
                </div>
                <span className="text-lg font-medium text-gray-800">내 신용점수</span>
            </div>
            {/* 변동 보기 버튼 */}
            <span className="text-blue-500 text-sm font-medium">변동 보기</span>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-100 mx-4"></div>

        {/* 퀵액션 버튼들 */}
        <div className="p-4">
            <div className="grid grid-cols-3 gap-4">
                <button className="text-center p-3">
                    <div className="text-gray-700 font-medium">계좌개설</div>
                </button>
                <button className="text-center p-3">
                    <div className="text-gray-700 font-medium">카드발급</div>
                </button>
                <button className="text-center p-3">
                    <div className="text-gray-700 font-medium">대출받기</div>
                </button>
            </div>
        </div>
    </div>
);

export default CreditScoreCard;