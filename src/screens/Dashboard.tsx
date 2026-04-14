import React from 'react';
import { Shield, Brain, Grid, ShieldAlert } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-8 max-w-screen-2xl mx-auto w-full">
      {/* Section 1: Top Metric Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Asset</p>
          <p className="text-lg font-headline font-bold text-white">ETH</p>
        </div>
        <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Price</p>
          <p className="text-lg font-headline font-bold text-white">$2,405.12</p>
        </div>
        <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">24h Change</p>
          <p className="text-lg font-headline font-bold text-tertiary">+2.4%</p>
        </div>
        <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Liquidity</p>
          <p className="text-lg font-headline font-bold text-white">$1.2B</p>
        </div>
        <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Market Cap</p>
          <p className="text-lg font-headline font-bold text-white">$280B</p>
        </div>
        <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Trend Rank</p>
          <p className="text-lg font-headline font-bold text-white">#4</p>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/5 flex flex-col justify-center items-end">
          <p className="text-[8px] text-on-surface-variant uppercase tracking-widest">Live Sync</p>
          <p className="text-[10px] font-mono text-[#8E8E8E]">14:22:05 UTC</p>
        </div>
      </div>

      {/* Section 2: Dashboard Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Risk & Decision */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-surface-container p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-colors"></div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <h2 className="text-on-surface-variant text-sm font-medium mb-2 uppercase tracking-widest">Risk Intelligence Score</h2>
                <div className="flex items-baseline gap-4">
                  <span className="text-7xl font-headline font-bold text-white">84<span className="text-2xl text-on-surface-variant">/100</span></span>
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold uppercase tracking-widest border border-tertiary/20">Stable</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-on-surface-variant text-xs mb-1 italic">Last evaluated 4m ago</p>
                <Shield className="text-primary-container ml-auto" size={36} />
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-surface-container-high p-6 rounded-xl border border-outline-variant/15">
                <h3 className="text-white font-headline font-bold mb-4 flex items-center gap-2">
                  <Grid className="text-tertiary" size={20} />
                  Decision Matrix
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-center p-3 border border-outline-variant/10 rounded-lg w-1/2 mr-2">
                    <p className="text-[10px] text-on-surface-variant uppercase">Current</p>
                    <p className="text-lg font-headline font-bold text-white">WATCH</p>
                  </div>
                  <div className="text-center p-3 bg-error-container/10 border border-error/20 rounded-lg w-1/2 ml-2">
                    <p className="text-[10px] text-error uppercase">Action</p>
                    <p className="text-lg font-headline font-bold text-error">REDUCE</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl border border-outline-variant/15 flex flex-col justify-center">
                <p className="text-on-surface-variant text-xs mb-2">Exposure Recommendation</p>
                <p className="text-xl font-headline font-bold text-white">Limit <span className="text-[#0066FF]">$4.5M</span> USD</p>
                <p className="text-[10px] text-[#8E8E8E] mt-2">Based on current volatility & depth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Intelligence Rail */}
        <div className="lg:col-span-4 bg-surface-container p-6 rounded-xl border border-outline-variant/15 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-headline font-bold flex items-center gap-2">
              <Brain className="text-[#0066FF]" size={20} />
              AI Analyst
            </h3>
            <div className="flex items-center gap-1">
              <span className="text-xs text-on-surface-variant">Confidence</span>
              <span className="text-xs font-bold text-tertiary">98.2%</span>
            </div>
          </div>
          <div>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">What Changed</p>
            <p className="text-sm text-white leading-relaxed">Whale wallet <span className="text-[#0066FF]">0x4f...a2</span> moved 12k ETH to Coinbase. Sell pressure spiked by 18% in the last 15 minutes.</p>
          </div>
          <div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-primary-container">
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Why This Matters</p>
            <p className="text-sm text-on-surface italic leading-relaxed">"Large exchange inflows usually precede localized liquidity exits, suggesting a short-term volatility window."</p>
          </div>
          <div className="pt-4 border-t border-outline-variant/10">
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-3">Suggested Action</p>
            <button className="w-full bg-white text-black py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-on-surface-variant transition-colors">
              <ShieldAlert size={16} /> Review Hedge Recommendation
            </button>
          </div>
        </div>
      </div>

      {/* Section 3: Main Chart */}
      <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-xl font-headline font-bold text-white">Intelligence Trend</h2>
            <p className="text-sm text-on-surface-variant">Macro-risk variance vs Asset Performance (7D)</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-surface-container-high rounded text-xs text-[#8E8E8E] hover:text-white transition-colors">1H</button>
            <button className="px-3 py-1 bg-[#201F1F] text-[#0066FF] border border-[#0066FF]/30 rounded text-xs font-bold">1D</button>
            <button className="px-3 py-1 bg-surface-container-high rounded text-xs text-[#8E8E8E] hover:text-white transition-colors">1W</button>
          </div>
        </div>
        <div className="h-64 w-full relative">
          {/* Placeholder for Chart Visual */}
          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="h-px w-full bg-outline-variant/10"></div>
            <div className="h-px w-full bg-outline-variant/10"></div>
            <div className="h-px w-full bg-outline-variant/10"></div>
            <div className="h-px w-full bg-outline-variant/10"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <path d="M0 180 Q 150 120, 300 160 T 600 80 T 900 140 T 1200 60" fill="none" stroke="#0066FF" strokeWidth="3"></path>
              <path d="M0 180 Q 150 120, 300 160 T 600 80 T 900 140 T 1200 60 L 1200 256 L 0 256 Z" fill="url(#chartGradient)" opacity="0.1"></path>
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0066FF"></stop>
                  <stop offset="100%" stopColor="#0066FF" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              {/* Anomaly Marker */}
              <circle className="animate-pulse" cx="600" cy="80" fill="#FFB4AB" r="6"></circle>
              <text fill="#FFB4AB" fontFamily="Space Grotesk" fontSize="10" x="615" y="75">ANOMALY DETECTED</text>
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-[10px] text-[#424656]">Oct 12</span>
          <span className="text-[10px] text-[#424656]">Oct 14</span>
          <span className="text-[10px] text-[#424656]">Oct 16</span>
          <span className="text-[10px] text-[#424656]">Oct 18</span>
        </div>
      </div>

      {/* Section 4: Analytical Grid (Bottom) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Contract Risk Summary */}
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
          <h4 className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">Contract Risk</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-white">Re-entrancy</span>
              <span className="text-xs font-bold text-tertiary">Passed</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-white">Flash Loan Resistance</span>
              <span className="text-xs font-bold text-tertiary">Passed</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-white">Ownership Centralization</span>
              <span className="text-xs font-bold text-error">Critical</span>
            </div>
          </div>
        </div>

        {/* Holder Concentration */}
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
          <h4 className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">Top Wallets</h4>
          <ul className="space-y-3">
            <li className="flex justify-between text-xs">
              <span className="text-on-surface-variant font-mono">0x71...e21</span>
              <span className="text-white font-bold">12.4%</span>
            </li>
            <li className="flex justify-between text-xs">
              <span className="text-on-surface-variant font-mono">0xac...f44</span>
              <span className="text-white font-bold">8.1%</span>
            </li>
            <li className="flex justify-between text-xs">
              <span className="text-on-surface-variant font-mono">0x22...10a</span>
              <span className="text-white font-bold">5.3%</span>
            </li>
          </ul>
        </div>

        {/* Pressure Visualizer */}
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
          <h4 className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">Market Pressure</h4>
          <div className="flex justify-between text-[10px] mb-2">
            <span className="text-tertiary font-bold uppercase">Buy (42%)</span>
            <span className="text-error font-bold uppercase">Sell (58%)</span>
          </div>
          <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden flex">
            <div className="h-full bg-tertiary" style={{ width: '42%' }}></div>
            <div className="h-full bg-error" style={{ width: '58%' }}></div>
          </div>
          <p className="text-[10px] text-[#8E8E8E] mt-4 text-center">Net delta: -16.4 ETH/min</p>
        </div>

        {/* Anomaly Events */}
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
          <h4 className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">Live Anomalies</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-error mt-1"></div>
              <div>
                <p className="text-[11px] text-white font-medium">Flash Liquidity Drain</p>
                <p className="text-[9px] text-[#8E8E8E]">2m ago · Uniswap V3</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-error mt-1"></div>
              <div>
                <p className="text-[11px] text-white font-medium">Sudden Hashrate Drop</p>
                <p className="text-[9px] text-[#8E8E8E]">15m ago · Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
