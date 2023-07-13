import 'normalize.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { IntroPage, NotFoundPage, LoginPage, SignUpPage } from './pages';
import { ThemeProvider } from '@mui/material/styles';
import { IntroHeader } from './components';
import theme from 'styles/global/theme';

export const App = (): JSX.Element => (
  <>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout header={<IntroHeader />} />}>
          <Route index element={<IntroPage />} />
        </Route>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  </>
);
