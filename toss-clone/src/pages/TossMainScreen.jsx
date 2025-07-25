import React from 'react';
import { Bell, Settings, ChevronRight, MoreHorizontal } from 'lucide-react';
import Header from '../components/Header';

const TossMainScreen = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      {/* =========================== */}
      {/* 첫 번째 카드: 토스뱅크 통장 + 내 토스뱅크 */}
      {/* =========================== */}
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

      {/* =========================== */}
      {/* 두 번째 카드: 자주 쓰는 계좌 전체 */}
      {/* =========================== */}
      <div className="mt-6 bg-white mx-4 rounded-2xl shadow-sm">
        {/* 자주 쓰는 계좌 제목 + 설정 아이콘 */}
        <div className="p-4 flex items-center justify-between">
          <span className="text-gray-600 font-medium">자주 쓰는 계좌</span>
          <Settings className="w-5 h-5 text-gray-400" />
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-100 mx-4"></div>

        {/* 우리은행 통장 */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* 우리은행 통장 아이콘 */}
            <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center">
              <div className="text-white text-lg font-bold">—</div>
            </div>
            {/* 잔액 정보 */}
            <div>
              <div className="text-xl font-bold text-gray-900">1,000,000원</div>
              <div className="text-sm text-gray-500">WON 통장</div>
            </div>
          </div>
          {/* 송금 버튼 */}
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
            송금
          </button>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-100 mx-4"></div>

        {/* NH은행 통장 */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* NH은행 아이콘 */}
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xs font-bold">NH</span>
            </div>
            {/* 잔액 정보 */}
            <div>
              <div className="text-xl font-bold text-gray-900">12,345원</div>
              <div className="text-sm text-gray-500">NH X 카카오페이통장</div>
            </div>
          </div>
          {/* 송금 버튼 */}
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
            송금
          </button>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-100 mx-4"></div>

        {/* 하나은행 통장 */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* 하나은행 아이콘 */}
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
              <div className="text-white text-lg">₩</div>
            </div>
            {/* 잔액 정보 */}
            <div>
              <div className="text-xl font-bold text-gray-900">11,111원</div>
              <div className="text-sm text-gray-500">뱅크월렛 카카오통장 · 주계좌</div>
            </div>
          </div>
          {/* 송금 버튼 */}
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
            송금
          </button>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-100 mx-4"></div>

        {/* 계좌 종류별 개수 요약 */}
        <div className="p-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">대출 1</span>
            <span className="text-gray-600">증권 2</span>
            <span className="text-gray-600">저축 3</span>
            <span className="text-blue-500 font-medium">모든 계좌</span>
          </div>
        </div>
      </div>

      {/* =========================== */}
      {/* 세 번째 카드: 지출 내역 */}
      {/* =========================== */}
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

      {/* =========================== */}
      {/* 네 번째 카드: 신용점수 + 퀵액션 */}
      {/* =========================== */}
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

      {/* =========================== */}
      {/* 하단 네비게이션 바 */}
      {/* =========================== */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          {/* 홈 탭 (활성화 상태) */}
          <button className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 bg-gray-800 rounded mb-1"></div>
            <span className="text-xs text-gray-800 font-medium">홈</span>
          </button>
          {/* 혜택 탭 */}
          <button className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 bg-gray-400 rounded-full mb-1"></div>
            <span className="text-xs text-gray-400">혜택</span>
          </button>
          {/* 토스쇼핑 탭 */}
          <button className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 bg-gray-400 rounded mb-1"></div>
            <span className="text-xs text-gray-400">토스쇼핑</span>
          </button>
          {/* 증권 탭 */}
          <button className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 bg-gray-400 rounded mb-1"></div>
            <span className="text-xs text-gray-400">증권</span>
          </button>
          {/* 전체 탭 */}
          <button className="flex flex-col items-center py-2 px-4">
            <MoreHorizontal className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-400">전체</span>
          </button>
        </div>
      </div>

      {/* 하단 네비게이션을 위한 여백 */}
      <div className="h-20"></div>
    </div>
  );
};

export default TossMainScreen;