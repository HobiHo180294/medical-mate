import 'normalize.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { IntroPage, NotFoundPage, LogInPage } from './pages';
import { IntroHeader } from './components';

export const App = (): JSX.Element => (
  <>
    <Routes>
      <Route path="/" element={<Layout header={<IntroHeader />} />}>
        <Route index element={<IntroPage />} />
      </Route>
      <Route path="/login" element={<LogInPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);
