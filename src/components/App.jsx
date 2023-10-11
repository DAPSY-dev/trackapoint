import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/pages/Layout.jsx';
import HomePage from '@/pages/HomePage.jsx';
import DicePage from '@/pages/DicePage.jsx';
import TrackerPage from '@/pages/TrackerPage.jsx';
import SettingsPage from '@/pages/SettingsPage.jsx';
import NoPage from '@/pages/NoPage.jsx';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dice" element={<DicePage />} />
          <Route path="tracker/:playersCount" element={<TrackerPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
