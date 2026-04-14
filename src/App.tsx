/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppShell } from './components/AppShell';
import { Landing } from './screens/Landing';
import { Dashboard } from './screens/Dashboard';
import { DeepDive } from './screens/DeepDive';
import { AlertBuilder } from './screens/AlertBuilder';
import { Replay } from './screens/Replay';
import { Watchlist } from './screens/Watchlist';
import { Architecture } from './screens/Architecture';
import { Settings } from './screens/Settings';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');

  if (activeTab === 'landing') {
    return <Landing onNavigate={setActiveTab} />;
  }

  const renderScreen = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'deepdive':
        return <DeepDive />;
      case 'alerts':
        return <AlertBuilder />;
      case 'replay':
        return <Replay />;
      case 'watchlist':
        return <Watchlist />;
      case 'architecture':
        return <Architecture />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppShell 
      activeTab={activeTab} 
      onNavigate={setActiveTab}
      contextualAction={
        activeTab === 'dashboard' ? (
          <button className="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary-container/10">
            Create Alert
          </button>
        ) : undefined
      }
    >
      {renderScreen()}
    </AppShell>
  );
}

