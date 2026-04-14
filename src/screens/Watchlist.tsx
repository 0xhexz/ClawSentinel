import React from 'react';
import { Plus, Filter, ArrowUpDown, MoreHorizontal, ShieldAlert, Brain, TrendingDown, Activity } from 'lucide-react';

export function Watchlist() {
  return (
    <div className="space-y-6 max-w-screen-2xl mx-auto w-full">
      {/* HEADER & ACTIONS */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Operational Risk Board</h2>
          <p className="text-on-surface-variant text-sm mt-1">On-Chain Risk Intelligence</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center bg-surface-container rounded-lg border border-outline-variant/15 p-1">
            <button className="px-4 py-1.5 text-xs font-bold bg-surface-container-high text-white rounded shadow-sm">All</button>
            <button className="px-4 py-1.5 text-xs font-bold text-on-surface-variant hover:text-white">High Risk</button>
            <button className="px-4 py-1.5 text-xs font-bold text-on-surface-variant hover:text-white">Anomalies</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary-container/10">
            <Plus size={16} />
            Add Asset
          </button>
        </div>
      </div>

      {/* SUMMARY STRIP */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-surface-container p-5 rounded-xl border border-outline-variant/10 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
            <ShieldAlert className="text-error" size={20} />
          </div>
          <div>
            <p className="text-2xl font-headline font-bold text-white">12</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Critical Alerts</p>
          </div>
        </div>
        <div className="bg-surface-container p-5 rounded-xl border border-outline-variant/10 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
            <Brain className="text-primary-container" size={20} />
          </div>
          <div>
            <p className="text-2xl font-headline font-bold text-white">8</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">AI Interventions</p>
          </div>
        </div>
        <div className="bg-surface-container p-5 rounded-xl border border-outline-variant/10 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
            <Activity className="text-tertiary" size={20} />
          </div>
          <div>
            <p className="text-2xl font-headline font-bold text-white">104</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Stable Assets</p>
          </div>
        </div>
        <div className="bg-surface-container p-5 rounded-xl border border-outline-variant/10 flex flex-col justify-center">
          <p className="text-[10px] text-primary uppercase tracking-widest font-bold mb-1">Sentinel Priority</p>
          <p className="text-sm font-medium text-white line-clamp-2">Review Risk <span className="text-error font-bold">AERO</span> and <span className="text-error font-bold">PENDLE</span> due to sudden liquidity shifts.</p>
        </div>
      </div>

      {/* MAIN DATA TABLE */}
      <div className="bg-surface-container rounded-xl border border-outline-variant/10 overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-high">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/15 rounded text-xs text-on-surface-variant hover:text-white transition-colors">
              <Filter size={14} /> Risk Level
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/15 rounded text-xs text-on-surface-variant hover:text-white transition-colors">
              <Filter size={14} /> Chain
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/15 rounded text-xs text-on-surface-variant hover:text-white transition-colors">
              <Filter size={14} /> Sector
            </button>
          </div>
          <div className="text-xs text-on-surface-variant">
            Showing 1-10 of 142
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/10 bg-surface-container-lowest/50">
                <th className="p-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">Asset</th>
                <th className="p-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">Risk Score <ArrowUpDown size={12} className="inline ml-1" /></th>
                <th className="p-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">Status</th>
                <th className="p-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">24h Volatility</th>
                <th className="p-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">Liquidity Depth</th>
                <th className="p-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">AI Verdict</th>
                <th className="p-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {/* Row 1: High Risk */}
              <tr className="hover:bg-surface-container-high transition-colors group cursor-pointer">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-xs">AE</div>
                    <div>
                      <p className="text-sm font-bold text-white">AERO</p>
                      <p className="text-[10px] text-outline">Base</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-headline font-bold text-error">88</span>
                    <TrendingDown size={14} className="text-error" />
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-error-container/20 text-error text-[10px] font-bold rounded border border-error-container/30 uppercase">Critical</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1 bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full bg-error w-[85%]"></div>
                    </div>
                    <span className="text-xs text-white">High</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-white">$12.4M <span className="text-[10px] text-error ml-1">(-14%)</span></td>
                <td className="p-4">
                  <p className="text-xs text-on-surface-variant line-clamp-1 max-w-[200px]">Liquidity drain detected in primary pool.</p>
                </td>
                <td className="p-4 text-right">
                  <button className="text-outline hover:text-white transition-colors"><MoreHorizontal size={18} /></button>
                </td>
              </tr>

              {/* Row 2: Medium Risk */}
              <tr className="hover:bg-surface-container-high transition-colors group cursor-pointer">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-xs">PE</div>
                    <div>
                      <p className="text-sm font-bold text-white">PENDLE</p>
                      <p className="text-[10px] text-outline">Ethereum</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-headline font-bold text-orange-400">64</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold rounded border border-orange-500/20 uppercase">Elevated</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1 bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full bg-orange-400 w-[60%]"></div>
                    </div>
                    <span className="text-xs text-white">Med</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-white">$84.2M <span className="text-[10px] text-outline ml-1">(-2%)</span></td>
                <td className="p-4">
                  <p className="text-xs text-on-surface-variant line-clamp-1 max-w-[200px]">Whale wallet accumulation observed.</p>
                </td>
                <td className="p-4 text-right">
                  <button className="text-outline hover:text-white transition-colors"><MoreHorizontal size={18} /></button>
                </td>
              </tr>

              {/* Row 3: Low Risk */}
              <tr className="hover:bg-surface-container-high transition-colors group cursor-pointer">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-xs">ET</div>
                    <div>
                      <p className="text-sm font-bold text-white">ETH</p>
                      <p className="text-[10px] text-outline">Ethereum</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-headline font-bold text-tertiary">24</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-tertiary-container/20 text-tertiary text-[10px] font-bold rounded border border-tertiary-container/30 uppercase">Stable</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1 bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary w-[20%]"></div>
                    </div>
                    <span className="text-xs text-white">Low</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-white">$1.2B <span className="text-[10px] text-tertiary ml-1">(+1%)</span></td>
                <td className="p-4">
                  <p className="text-xs text-on-surface-variant line-clamp-1 max-w-[200px]">Normal market conditions.</p>
                </td>
                <td className="p-4 text-right">
                  <button className="text-outline hover:text-white transition-colors"><MoreHorizontal size={18} /></button>
                </td>
              </tr>
              
              {/* Row 4: Low Risk */}
              <tr className="hover:bg-surface-container-high transition-colors group cursor-pointer">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-xs">SO</div>
                    <div>
                      <p className="text-sm font-bold text-white">SOL</p>
                      <p className="text-[10px] text-outline">Solana</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-headline font-bold text-tertiary">31</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-tertiary-container/20 text-tertiary text-[10px] font-bold rounded border border-tertiary-container/30 uppercase">Stable</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1 bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary w-[35%]"></div>
                    </div>
                    <span className="text-xs text-white">Low</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-white">$420M <span className="text-[10px] text-tertiary ml-1">(+4%)</span></td>
                <td className="p-4">
                  <p className="text-xs text-on-surface-variant line-clamp-1 max-w-[200px]">Strong buy support at current levels.</p>
                </td>
                <td className="p-4 text-right">
                  <button className="text-outline hover:text-white transition-colors"><MoreHorizontal size={18} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
