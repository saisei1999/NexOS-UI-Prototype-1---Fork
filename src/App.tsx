import React, { useEffect, useState, createElement } from 'react';
import { Search, ArrowLeft, ArrowRight, Download, X, Plus, ChevronDown, ChevronRight, Hash, MoreHorizontal, FileText, Star, Tag, TrendingUp, BarChart2, PieChart, DollarSign, LineChart, BriefcaseBusiness, Eye, BookOpen, Layers, Zap, AlertCircle, Clock, Percent, ArrowUpRight, ArrowDownRight, Inbox, Maximize2, Mic, Signal, Folder } from 'lucide-react';
import { NavigationItem } from './src/NavigationItem';
export function App() {
  return <div className="flex h-screen w-full bg-[#f8f9fa] text-gray-800 overflow-hidden">
      <Sidebar />
      <MainContent />
    </div>;
}
const Sidebar = () => {
  return <div className="w-[220px] bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-2">
        <div className="flex items-center gap-2 bg-[#f0f2f5] rounded p-1.5 text-sm shadow-sm">
          <Search className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">Search</span>
          <span className="text-xs text-gray-500 ml-auto">Ctrl+K</span>
        </div>
      </div>
      <div className="p-1 space-y-1">
        <NavigationItem icon={<Signal className="h-4 w-4 text-[#64b5f6]" />} label="Feed" onClick={() => console.log('Feed clicked')} data-id="feed-nav-item" className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<TrendingUp className="h-4 w-4 text-[#4caf50]" />} label="P/L" onClick={() => console.log('P/L clicked')} data-id="pl-nav-item" className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
      </div>
      <div className="p-2 text-xs text-gray-500">Investments</div>
      <div className="p-1 space-y-1">
        <NavigationItem icon={<Eye className="h-4 w-4 text-[#64b5f6]" />} label="Watchlist" onClick={() => console.log('Watchlist clicked')} data-id="watchlist-nav-item" className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<BriefcaseBusiness className="h-4 w-4 text-[#4caf50]" />} label="Portfolio" onClick={() => console.log('Portfolio clicked')} data-id="portfolio-nav-item" className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<BookOpen className="h-4 w-4 text-[#ba68c8]" />} label="Research" onClick={() => console.log('Research clicked')} data-id="research-nav-item" className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
      </div>
      <div className="flex items-center justify-between p-2 text-xs text-gray-500">
        <span>Documents</span>
        <div className="flex">
          <ChevronDown className="h-3 w-3 mr-1" />
          <Plus className="h-3 w-3" />
        </div>
      </div>
      <div className="p-1 space-y-1 overflow-y-auto flex-grow">
        <NavigationItem icon={<Folder className="h-4 w-4 text-[#ff9800]" />} label="Investment Strategy" onClick={() => console.log('Investment Strategy clicked')} data-id="investment-strategy-nav-item" className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-4 w-4 text-gray-400" />} label="2023 Market Outlook Analysis" indent={4} onClick={() => console.log('Market Analysis clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-4 w-4 text-[#4caf50]" />} label="Trading Notes" indent={1} collapsed onClick={() => console.log('Trading Notes clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-4 w-4 text-[#2196f3]" />} label="Research Reports" indent={1} collapsed onClick={() => console.log('Research Reports clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<Folder className="h-4 w-4 text-[#ff5722]" />} label="Portfolio Management" indent={1} onClick={() => console.log('Portfolio Management clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<Folder className="h-4 w-4 text-gray-400" />} label="2023 Portfolio Review" indent={2} onClick={() => console.log('2023 Portfolio Review clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<Folder className="h-4 w-4 text-gray-400" />} label="Q4 2023 Performance" indent={3} onClick={() => console.log('Q4 2023 Performance clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-3 w-3 text-gray-400" />} label="Tech sector outperformed expectations" indent={4} onClick={() => console.log('Tech sector note clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-3 w-3 text-gray-400" />} label="Dividend stocks provided stability" indent={4} onClick={() => console.log('Dividend stocks note clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-3 w-3 text-gray-400" />} label="Rebalance needed for 2024" indent={4} onClick={() => console.log('Rebalance note clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-3 w-3 text-gray-400" />} label="Interest rate impact analysis" indent={4} onClick={() => console.log('Interest rate note clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-3 w-3 text-gray-400" />} label="Small cap underperformance review" indent={4} onClick={() => console.log('Small cap note clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-3 w-3 text-gray-400" />} label="International exposure benefits" indent={4} onClick={() => console.log('International exposure note clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-3 w-3 text-gray-400" />} label="Tax loss harvesting strategies" indent={4} onClick={() => console.log('Tax loss harvesting note clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-3 w-3 text-gray-400" />} label="Risk assessment and adjustments" indent={4} onClick={() => console.log('Risk assessment note clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
        <NavigationItem icon={<FileText className="h-4 w-4 text-[#ffc107]" />} label="Tools & Calculators" indent={1} collapsed onClick={() => console.log('Tools & Calculators clicked')} className="rounded-md hover:bg-blue-50 transition-colors duration-200" />
      </div>
      <div className="mt-auto p-2 border-t border-gray-200 flex items-center">
        <div className="bg-[#4caf50] h-6 w-6 rounded-sm flex items-center justify-center text-xs text-white mr-2">
          TR
        </div>
        <span className="text-sm text-gray-700">trader_pro</span>
      </div>
    </div>;
};
const SidebarItem = ({
  icon,
  label,
  indent = 0,
  collapsed = false
}) => {
  return <div className="flex items-center px-2 py-1.5 text-sm hover:bg-gray-100 cursor-pointer">
      {icon}
      {!collapsed && <span className={`ml-2 ${indent ? `pl-${indent * 3}` : ''}`}>
          {label}
        </span>}
      {collapsed && <ChevronRight className="ml-auto h-3 w-3" />}
    </div>;
};
const MessageCircle = ({
  className
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>;
};
const TickerTape = () => {
  const stockData = [{
    symbol: 'AAPL',
    price: 187.68,
    change: 1.28,
    changePercent: 0.69
  }, {
    symbol: 'MSFT',
    price: 418.42,
    change: -2.13,
    changePercent: -0.51
  }, {
    symbol: 'GOOGL',
    price: 155.72,
    change: 0.87,
    changePercent: 0.56
  }, {
    symbol: 'AMZN',
    price: 178.22,
    change: -1.34,
    changePercent: -0.75
  }, {
    symbol: 'TSLA',
    price: 239.45,
    change: 5.67,
    changePercent: 2.42
  }, {
    symbol: 'META',
    price: 474.99,
    change: 8.23,
    changePercent: 1.76
  }, {
    symbol: 'NVDA',
    price: 822.79,
    change: 15.43,
    changePercent: 1.91
  }, {
    symbol: 'JPM',
    price: 196.62,
    change: -0.78,
    changePercent: -0.4
  }, {
    symbol: 'V',
    price: 275.24,
    change: 1.15,
    changePercent: 0.42
  }, {
    symbol: 'WMT',
    price: 59.84,
    change: 0.32,
    changePercent: 0.54
  }];
  return;
};
const MarketOverview = () => {
  const indices = [{
    name: 'S&P 500',
    value: '4,783.35',
    change: '+23.17',
    changePercent: '+0.49%',
    color: 'text-[#4caf50]',
    icon: <ArrowUpRight className="h-4 w-4" />
  }, {
    name: 'NASDAQ',
    value: '16,742.39',
    change: '+93.45',
    changePercent: '+0.56%',
    color: 'text-[#4caf50]',
    icon: <ArrowUpRight className="h-4 w-4" />
  }, {
    name: 'DOW',
    value: '38,797.38',
    change: '-127.19',
    changePercent: '-0.33%',
    color: 'text-[#ef5350]',
    icon: <ArrowDownRight className="h-4 w-4" />
  }, {
    name: 'VIX',
    value: '13.62',
    change: '-0.84',
    changePercent: '-5.81%',
    color: 'text-[#4caf50]',
    icon: <ArrowUpRight className="h-4 w-4" />
  }];
  return;
};
const MainContent = () => {
  return <div className="flex-1 flex flex-col overflow-hidden">
      <div className="p-2 flex items-center bg-white shadow-sm">
        <div className="flex items-center">
          <ArrowLeft className="h-5 w-5 mr-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-150" />
          <ArrowRight className="h-5 w-5 mr-2 text-gray-300 opacity-50 cursor-not-allowed" />
          <div className="flex items-center bg-white rounded px-2 py-1">
            <Signal className="h-4 w-4 mr-2 text-[#64b5f6]" />
            <span className="text-gray-700">Feed</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative flex flex-col items-center">
            <Search className="h-5 w-5 text-[#64b5f6]" />
            <div className="absolute bottom-[-8px] h-[2px] w-5 bg-[#64b5f6] rounded-full"></div>
          </div>
          <Plus className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-150" />
        </div>
      </div>
      <TickerTape />
      <MarketOverview />
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        <div className="flex justify-end mb-4"></div>
        <div className="flex justify-end mb-4">
          <div className="bg-white border border-gray-200 rounded-lg p-3 max-w-[70%] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded text-xs border border-gray-100">
                <DollarSign className="h-3 w-3 text-[#4caf50]" />
                <span className="font-medium text-gray-800">AAPL</span>
              </div>
              <div className="flex items-center text-[#4caf50] text-xs">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span className="font-semibold">+1.28 (+0.69%)</span>
              </div>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Looking to add more Apple to my portfolio. The new product
              announcement looks promising.
            </p>
            <p className="text-xs text-gray-500 text-right mt-1">Yesterday</p>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="bg-white border border-gray-200 rounded-lg p-3 max-w-[70%] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded text-xs border border-gray-100">
                <DollarSign className="h-3 w-3 text-[#ef5350]" />
                <span className="font-medium text-gray-800">TSLA</span>
              </div>
              <div className="flex items-center text-[#ef5350] text-xs">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                <span className="font-semibold">-15.32 (-6.01%)</span>
              </div>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Tesla's volatility is concerning. Might reduce my position if it
              breaks below support.
            </p>
            <p className="text-xs text-gray-500 text-right mt-1">Yesterday</p>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="bg-white border border-gray-200 rounded-lg p-3 max-w-[70%] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded text-xs border border-gray-100">
                <DollarSign className="h-3 w-3 text-[#4caf50]" />
                <span className="font-medium text-gray-800">SPY</span>
              </div>
              <div className="flex items-center text-[#4caf50] text-xs">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span className="font-semibold">+2.47 (+0.49%)</span>
              </div>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Market seems to be stabilizing. The Fed's comments yesterday were
              bullish for equities.
            </p>
            <p className="text-xs text-gray-500 text-right mt-1">Yesterday</p>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="bg-white border border-gray-200 rounded-lg p-3 max-w-[70%] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded text-xs border border-gray-100">
                <DollarSign className="h-3 w-3 text-[#4caf50]" />
                <span className="font-medium text-gray-800">NVDA</span>
              </div>
              <div className="flex items-center text-[#4caf50] text-xs">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span className="font-semibold">+15.43 (+1.91%)</span>
              </div>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              NVIDIA continues to outperform. AI demand remains strong.
            </p>
            <div className="flex items-center mt-1">
              <span className="text-[#64b5f6] rounded px-1 text-xs font-bold">
                #Semiconductor
              </span>
              <p className="text-xs text-gray-500 ml-auto">Yesterday</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="bg-white border border-gray-200 rounded-lg p-3 max-w-[70%] shadow-sm">
            <div className="flex items-center justify-between mb-2"></div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Need to rebalance my ETF portfolio. Considering adding more
              exposure to small caps.
            </p>
            <p className="text-xs text-gray-500 text-right mt-1">Yesterday</p>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="bg-white border border-gray-200 rounded-lg p-3 max-w-[70%] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded text-xs border border-gray-100">
                <DollarSign className="h-3 w-3 text-[#4caf50]" />
                <span className="font-medium text-gray-800">AMZN</span>
              </div>
              <div className="flex items-center text-[#ef5350] text-xs">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                <span className="font-semibold">-1.34 (-0.75%)</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-1">
              Amazon Q2 Earnings Report
            </p>
            <p className="text-sm text-[#64b5f6] underline">
              https://investor.amazon.com/quarterly-results
            </p>
            <div className="flex items-center mt-1">
              <p className="text-xs text-gray-500 ml-auto">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 bg-white">
        <div className="mx-4 mb-2 bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
          <div className="flex items-center text-gray-600 text-xs mb-3">
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
              <Plus className="h-3.5 w-3.5 mr-1.5 text-[#4caf50]" />
              <span>Add context</span>
            </div>
          </div>
          <div className="text-gray-600 text-sm">
            $ before ticker: eg $TICKER, @ to mention
          </div>
        </div>
      </div>
    </div>;
};
// Add this CSS to your stylesheet for the ticker animation
// This will be injected via the style tag in the component
const style = document.createElement('style');
style.textContent = `
  @keyframes ticker {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-ticker {
    animation: ticker 30s linear infinite;
  }
`;
document.head.appendChild(style);