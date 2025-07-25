import React from "react";
import { ChevronRight } from "lucide-react";

const BankSummaryCard = () => (
    <div className="bg-white mx-4 mt-4 rounded-2xl shadow-sm">
        {/* 토스뱅크 통장 잔액 표시 */}
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                {/* 토스뱅크 아이콘 */}
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                </div>
                {/* 잔액 정보 */}
                <div>
                    <div className="text-xl font-bold text-gray-900">54,321원</div>
                    <div className="text-sm text-gray-500">토스뱅크 통장</div>
                </div>
            </div>
            {/* 송금 버튼 */}
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                송금
            </button>
        </div>
        
        {/* 구분선 */}
        <div className="border-t border-gray-100 mx-4"></div>
        
        {/* 내 토스뱅크 메뉴 */}
        <div className="p-4 flex items-center justify-between">
            <span className="text-gray-800 font-medium">내 토스뱅크</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
    </div>
);

export default BankSummaryCard;