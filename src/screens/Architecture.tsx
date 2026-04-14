import React from 'react';
import { Database, Cpu, Network, ShieldAlert, ArrowRight, CheckCircle, Brain, FileText } from 'lucide-react';

export function Architecture() {
  return (
    <div className="flex gap-8 max-w-screen-2xl mx-auto w-full">
      {/* MAIN CONTENT */}
      <div className="flex-1 max-w-[calc(100%-24rem)] space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Risk Intelligence Architecture</h2>
            <p className="text-on-surface-variant text-sm mt-1">On-Chain Risk Intelligence</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-surface-container-high text-white rounded-lg text-sm font-medium hover:bg-surface-bright transition-colors border border-outline-variant/10">
              View Architecture Docs
            </button>
          </div>
        </div>

        {/* Pipeline Visualization */}
        <div className="bg-surface-container rounded-xl border border-outline-variant/10 p-8">
          <div className="flex flex-col gap-12 relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-12 bottom-12 w-1 bg-outline-variant/20 rounded-full"></div>

            {/* Stage 1: Ingestion */}
            <div className="flex gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-highest border-2 border-outline-variant/30 flex items-center justify-center shrink-0">
                <Database className="text-outline" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-headline font-bold text-white mb-2">1. Raw Signal Ingestion</h3>
                <p className="text-sm text-on-surface-variant mb-4">Continuous indexing of mempool data, block headers, and DEX router contracts across supported chains.</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10">
                    <p className="text-[10px] font-bold text-outline uppercase mb-1">Latency</p>
                    <p className="text-lg font-headline font-bold text-white">~400ms</p>
                  </div>
                  <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10">
                    <p className="text-[10px] font-bold text-outline uppercase mb-1">Throughput</p>
                    <p className="text-lg font-headline font-bold text-white">12k TPS</p>
                  </div>
                  <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10">
                    <p className="text-[10px] font-bold text-outline uppercase mb-1">Nodes</p>
                    <p className="text-lg font-headline font-bold text-white">14 Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2: Processing */}
            <div className="flex gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary-container/20 border-2 border-primary-container/50 flex items-center justify-center shrink-0">
                <Cpu className="text-primary-container" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-headline font-bold text-white mb-2">2. Risk Processing Engine</h3>
                <p className="text-sm text-on-surface-variant mb-4">Heuristic analysis of transaction patterns, liquidity depth changes, and smart contract state mutations.</p>
                <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/10 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white">Anomaly Detection Model</span>
                    <span className="text-[10px] bg-tertiary/20 text-tertiary px-2 py-0.5 rounded font-bold">ONLINE</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container w-[85%] animate-pulse"></div>
                  </div>
                  <p className="text-[10px] text-outline mt-2 text-right">Processing 42 metrics per block</p>
                </div>
              </div>
            </div>

            {/* Stage 3: Synthesis */}
            <div className="flex gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-tertiary/20 border-2 border-tertiary/50 flex items-center justify-center shrink-0">
                <Network className="text-tertiary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-headline font-bold text-white mb-2">3. AI Synthesis & Alerting</h3>
                <p className="text-sm text-on-surface-variant mb-4">LLM-based reasoning applied to correlated anomalies to generate human-readable risk assessments and trigger alerts.</p>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/10 rounded-lg">
                    <ShieldAlert className="text-error" size={14} />
                    <span className="text-xs font-medium text-white">Rule Evaluation</span>
                  </div>
                  <ArrowRight className="text-outline-variant" size={16} />
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/10 rounded-lg">
                    <Brain className="text-primary" size={14} />
                    <span className="text-xs font-medium text-white">Context Generation</span>
                  </div>
                  <ArrowRight className="text-outline-variant" size={16} />
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/10 rounded-lg">
                    <CheckCircle className="text-tertiary" size={14} />
                    <span className="text-xs font-medium text-white">Action Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT RAIL: SYSTEM STATUS */}
      <aside className="w-80 space-y-6">
        <div className="bg-surface-container rounded-xl border border-outline-variant/10 p-6">
          <h4 className="text-sm font-headline font-bold text-white mb-4">System Status</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-on-surface-variant">Ethereum Indexer</span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-tertiary uppercase"><div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div> Healthy</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-on-surface-variant">Solana Indexer</span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-tertiary uppercase"><div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div> Healthy</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-on-surface-variant">Base Indexer</span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-tertiary uppercase"><div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div> Healthy</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
              <span className="text-xs text-on-surface-variant">AI Reasoning Engine</span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-tertiary uppercase"><div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></div> Active</span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container rounded-xl border border-outline-variant/10 p-6">
          <h4 className="text-sm font-headline font-bold text-white mb-4">Documentation</h4>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-colors group">
              <div className="flex items-center gap-3">
                <FileText className="text-outline group-hover:text-primary transition-colors" size={16} />
                <span className="text-xs font-medium text-white">API Reference</span>
              </div>
              <ArrowRight className="text-outline opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-colors group">
              <div className="flex items-center gap-3">
                <ShieldAlert className="text-outline group-hover:text-primary transition-colors" size={16} />
                <span className="text-xs font-medium text-white">Risk Metrics Guide</span>
              </div>
              <ArrowRight className="text-outline opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
