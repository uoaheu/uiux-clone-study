import React from "react";
import { Settings } from 'lucide-react';

const accounts = [
    { name: 'WON 통장', bank: '—', color: 'bg-blue-400', balance: '1,000,000원' },
    { name: 'NH X 카카오페이통장', bank: 'NH', color: 'bg-blue-600', balance: '12,345원' },
    { name: '뱅크월렛 카카오통장 · 주계좌', bank: '₩', color: 'bg-green-500', balance: '11,111원' },
];

const FrequentAccountsCard = () => (
    <div className="mt-6 bg-white mx-4 rounded-2xl shadow-sm">
        {/* 자주 쓰는 계좌 제목 + 설정 아이콘 */}
        <div className="p-4 flex items-center justify-between">
            <span className="text-gray-600 font-medium">자주 쓰는 계좌</span>
            <Settings className="w-5 h-5 text-gray-400" />
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-100 mx-4"></div>

        {accounts.map((account, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${account.color} rounded-xl flex items-center justify-center`}>
                    <span className="text-white text-lg font-bold">{account.bank}</span>
                </div>
                <div>
                    <div className="text-xl font-bold text-gray-900">{account.balance}</div>
                    <div className="text-sm text-gray-500">{account.name}</div>
                </div>
                </div>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">송금</button>
            </div>
        ))}

        {/* 구분선 */}
        <div className="border-t border-gray-100 mx-4"></div>

        {/* 계좌 종류별 개수 요약 */}
        <div className="p-4 flex justify-between text-sm text-gray-600">
            <span>대출 1</span>
            <span>증권 2</span>
            <span>저축 3</span>
            <span className="text-blue-500 font-medium">모든 계좌</span>
        </div>
    </div>
);

export default FrequentAccountsCard;
