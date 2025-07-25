// import React from 'react';
// import { Bell, Settings, ChevronRight, MoreHorizontal } from 'lucide-react';
// import Header from '../components/Header';
// import BankSummaryCard from '../components/cards/BankSummaryCard';
// import FrequentAccountsCard from '../components/cards/FrequentAccountsCard';
// import ExpenseCard from '../components/cards/ExpenseCard';
// import CreditScoreCard from '../components/cards/CreditScoreCard';
// import BottomNavBar from '../components/navigation/BottomNavBar';

// const TossMainScreen = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <Header />
//       <BankSummaryCard />
//       <FrequentAccountsCard />
//       <ExpenseCard />
//       <CreditScoreCard />
//       <BottomNavBar />
//     </div>
//   );
// };

// export default TossMainScreen;



// 1. 당겨서 새로고침 -> 당기고 나서 스피너
// import React, { useState } from 'react';
// import PullToRefresh from 'react-pull-to-refresh';
// import Header from '../components/Header';
// import BankSummaryCard from '../components/cards/BankSummaryCard';
// import FrequentAccountsCard from '../components/cards/FrequentAccountsCard';
// import ExpenseCard from '../components/cards/ExpenseCard';
// import CreditScoreCard from '../components/cards/CreditScoreCard';
// import BottomNavBar from '../components/navigation/BottomNavBar';

// const TossMainScreen = () => {
//   const [isRefreshing, setIsRefreshing] = useState(false);
  
//   const handleRefresh = () => {
//     return new Promise((resolve) => {
//       setIsRefreshing(true);
//       setTimeout(() => {
//         setIsRefreshing(false);
//         resolve(); // refresh 완료
//       }, 1500);
//     });
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <Header />
      
//       {/* 로딩 스피너 - 헤더와 콘텐츠 사이에 표시 */}
//       {isRefreshing && (
//         <div className="flex justify-center items-center py-4">
//           <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//         </div>
//       )}
      
//       <PullToRefresh onRefresh={handleRefresh}>
//         <BankSummaryCard />
//         <FrequentAccountsCard />
//         <ExpenseCard />
//         <CreditScoreCard />
//       </PullToRefresh>
      
//       <BottomNavBar />
//     </div>
//   );
// };

// export default TossMainScreen;



// 2. 당겨서 새로고침 -> 당길 때 스피너
// import React, { useState, useRef } from 'react';
// import PullToRefresh from 'react-simple-pull-to-refresh';

// import Header from '../components/Header';
// import BankSummaryCard from '../components/cards/BankSummaryCard';
// import FrequentAccountsCard from '../components/cards/FrequentAccountsCard';
// import ExpenseCard from '../components/cards/ExpenseCard';
// import CreditScoreCard from '../components/cards/CreditScoreCard';
// import BottomNavBar from '../components/navigation/BottomNavBar';

// const TossMainScreen = () => {
//   const [isPulling, setIsPulling] = useState(false);
//   const startY = useRef(null);

//   const handleTouchStart = (e) => {
//     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     if (scrollTop === 0) {
//       startY.current = e.touches[0].clientY;
//     } else {
//       startY.current = null; // 스크롤이 아래면 무시
//     }
//   };

//   const handleTouchMove = (e) => {
//     if (startY.current !== null) {
//       const deltaY = e.touches[0].clientY - startY.current;
//       if (deltaY > 10) {
//         setIsPulling(true); // 아래로 당기기 시작했을 때
//       }
//     }
//   };

//   const handleTouchEnd = () => {
//     setIsPulling(false); // 손 뗐을 때 초기화
//     startY.current = null;
//   };

//   const handleRefresh = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 1500);
//     });
//   };

//   return (
//     <div
//       className="bg-gray-50 min-h-screen font-sans"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <Header />

//       {isPulling && (
//         <div className="flex justify-center items-center py-4">
//           <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//         </div>
//       )}

//       <PullToRefresh
//         onRefresh={handleRefresh}
//         pullingContent={<></>}
//         refreshingContent={<></>}
//       >
//         <BankSummaryCard />
//         <FrequentAccountsCard />
//         <ExpenseCard />
//         <CreditScoreCard />
//       </PullToRefresh>

//       <BottomNavBar />
//     </div>
//   );
// };

// export default TossMainScreen;



import React, { useState, useRef } from 'react';
import PullToRefresh from 'react-simple-pull-to-refresh';

import Header from '../components/Header';
import BankSummaryCard from '../components/cards/BankSummaryCard';
import FrequentAccountsCard from '../components/cards/FrequentAccountsCard';
import ExpenseCard from '../components/cards/ExpenseCard';
import CreditScoreCard from '../components/cards/CreditScoreCard';
import BottomNavBar from '../components/navigation/BottomNavBar';

const TossMainScreen = () => {
  const [isPulling, setIsPulling] = useState(false);
  const startY = useRef(null);

  const handleTouchStart = (e) => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop === 0) {
      startY.current = e.touches[0].clientY;
    } else {
      startY.current = null;
    }
  };

  const handleTouchMove = (e) => {
    if (startY.current !== null) {
      const deltaY = e.touches[0].clientY - startY.current;
      if (deltaY > 10) {
        setIsPulling(true);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsPulling(false);
    startY.current = null;
  };

  const handleRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  };

  return (
    <div
      className="bg-gray-50 min-h-screen font-sans"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Header isPulling={isPulling} /> {/* 👈 상태 전달 */}

      {isPulling && (
        <div className="flex justify-center items-center py-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <PullToRefresh
        onRefresh={handleRefresh}
        pullingContent={<></>}
        refreshingContent={<></>}
      >
        <BankSummaryCard />
        <FrequentAccountsCard />
        <ExpenseCard />
        <CreditScoreCard />
      </PullToRefresh>

      <BottomNavBar />
    </div>
  );
};

export default TossMainScreen;
