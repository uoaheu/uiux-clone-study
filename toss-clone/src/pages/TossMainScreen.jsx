import React from 'react';
import { Bell, Settings, ChevronRight, MoreHorizontal } from 'lucide-react';
import Header from '../components/Header';
import BankSummaryCard from '../components/cards/BankSummaryCard';
import FrequentAccountsCard from '../components/cards/FrequentAccountsCard';
import ExpenseCard from '../components/cards/ExpenseCard';
import CreditScoreCard from '../components/cards/CreditScoreCard';
import BottomNavBar from '../components/navigation/BottomNavBar';

const TossMainScreen = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <BankSummaryCard />
      <FrequentAccountsCard />
      <ExpenseCard />
      <CreditScoreCard />
      <BottomNavBar />
    </div>
  );
};

export default TossMainScreen;