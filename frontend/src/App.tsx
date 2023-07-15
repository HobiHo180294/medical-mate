import 'normalize.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import {
  IntroPage,
  NotFoundPage,
  LoginPage,
  SignUpPage,
  MyProfilePage,
  AppointmentPage,
  CalendarPage,
} from './pages';
import { ThemeProvider } from '@mui/material/styles';
import { IntroHeader, PersonalCabinetLayout } from './components';
import theme from 'styles/global/theme';

export const App = (): JSX.Element => (
  <>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout header={<IntroHeader />} />}>
          <Route index element={<IntroPage />} />
        </Route>
        <Route path="/personal-cabinet" element={<PersonalCabinetLayout />}>
          <Route path="my-profile" element={<MyProfilePage />} />
          <Route path="appointment" element={<AppointmentPage />} />
          <Route path="calendar" element={<CalendarPage />} />
        </Route>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  </>
);
