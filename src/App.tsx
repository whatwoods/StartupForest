import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Shell } from './components/Shell';

const AdminPage = lazy(() => import('./pages/AdminPage').then(m => ({ default: m.AdminPage })));
const ApplyPage = lazy(() => import('./pages/ApplyPage').then(m => ({ default: m.ApplyPage })));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage').then(m => ({ default: m.EventDetailPage })));
const EventsPage = lazy(() => import('./pages/EventsPage').then(m => ({ default: m.EventsPage })));
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const MePage = lazy(() => import('./pages/MePage').then(m => ({ default: m.MePage })));

export function App() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>加载中...</div>}>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/me" element={<MePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
