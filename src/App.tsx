/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/how-it-works" element={<Architecture />} />
        <Route path="/app" element={<Navigate to="/app/dashboard" replace />} />
        <Route path="/app/dashboard" element={<AppShell><Dashboard /></AppShell>} />
        <Route path="/app/deep-dive" element={<AppShell><DeepDive /></AppShell>} />
        <Route path="/app/alerts" element={<AppShell><AlertBuilder /></AppShell>} />
        <Route path="/app/replay" element={<AppShell><Replay /></AppShell>} />
        <Route path="/app/watchlist" element={<AppShell><Watchlist /></AppShell>} />
        <Route path="/app/settings" element={<AppShell><Settings /></AppShell>} />
      </Routes>
    </BrowserRouter>
  );
}

