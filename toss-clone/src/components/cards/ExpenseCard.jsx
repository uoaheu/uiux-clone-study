import React from "react";

const ExpenseCard = () => (
    <div className="mt-6 bg-white mx-4 rounded-2xl shadow-sm">
        {/* 7월 지출 내역 */}
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                {/* 지출 아이콘 */}
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg font-bold">W</span>
                </div>
                {/* 지출 정보 */}
                <div>
                    <div className="text-xl font-bold text-gray-900">1,000,000원</div>
                    <div className="text-sm text-gray-500">7월에 쓴 돈</div>
                </div>
            </div>
            {/* 내역 보기 */}
            <span className="text-gray-500 text-sm">내역</span>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-100 mx-4"></div>

        {/* 카드 결제 예정 금액 */}
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                {/* 카드 아이콘 */}
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-400 rounded"></div>
                </div>
                {/* 카드값 정보 */}
                <div>
                    <div className="text-xl font-bold text-gray-900">10,000원</div>
                    <div className="text-sm text-gray-500">8월 13일 별 카드값</div>
                </div>
            </div>
        </div>
    </div>
);

export default ExpenseCard;