import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TextField } from '@mui/material';
import { EMAIL_REGEXP } from '../../constants';
import { textFieldRules } from 'helpers/textFieldRules';

import styles from './LoginPage.module.scss';
import { MedicalMateLogo, PrimaryButton, Title } from 'components/index';
import { Question } from 'components/Login/Question/Question';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  password: string;
  email: string;
};

interface ILoginRequest {
  config?: unknown;
  data?: {
    avatarColor?: string | null;
    email?: string;
    firstName?: string;
    lastName?: string;
    previous?: unknown[] | [];
    upcoming?: unknown[] | [];
  };
  code?: number;
  message?: string;
  headers?: unknown;
  request?: unknown;
  status?: number;
  statusText?: string;
}

const getLoginResult = async (data: Inputs) => {
  try {
    const response = await axios.post('http://localhost:8080/auth', data);
    return response;
  } catch (error) {
    return error;
  }
};

export const LoginPage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, isValid, isSubmitted, errors },
    reset,
    control,
    setError,
  } = useForm<Inputs>({
    mode: 'onSubmit',
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!data.email) {
      setError('email', {
        type: 'value',
        message: 'Email cannot be empty',
      });

      return;
    }

    if (data.email && data.password) {
      const loginResult = (await getLoginResult(data)) as ILoginRequest;

      if (loginResult.status === 200) {
        alert('You are successfully entered the account!');

        console.log('loginResult:', loginResult);

        setTimeout(() => {
          navigate('/', { replace: true });
        }, 1500);
        reset();
      } else {
        setError('password', {
          type: 'validate',
          message: loginResult?.message,
        });

        return;
      }
    }

    reset();
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__body}>
        <div className={`${styles.login__content} ${styles.content}`}>
          <div className={styles.content__body}>
            <MedicalMateLogo />
            <p className={styles.content__paragraph}>Welcome back to your healthcare hub.</p>
            <p className={styles.content__paragraph}>
              Log in to access your personalized medical records and stay connected with
              MedicalMate.
            </p>
          </div>
        </div>
        <div className={`${styles.login__form} ${styles.form}`}>
          <div className={`${styles.form__body}`}>
            <Title className={`${styles.form__title}`} text="Login" />
            <Question
              className={`${styles.form__question}`}
              action="Sign up."
              route="/sign-up"
              question="Don't have an account?"
            />
            <form
              action="#"
              autoComplete="off"
              noValidate
              className={styles.form__main}
              onSubmit={handleSubmit(onSubmit)}
            >
              <fieldset
                className={`${styles.form__fields} ${
                  (isSubmitting && !isSubmitSuccessful) || (!isValid && isSubmitted)
                    ? styles.error
                    : ''
                }`}
              >
                <Controller
                  defaultValue=""
                  name="email"
                  render={({ field }) => (
                    <TextField
                      className={`${styles.form__field} ${styles['email-field']}`}
                      {...field}
                      type="email"
                      variant="outlined"
                      label="Email"
                      fullWidth
                      helperText={errors.email ? errors.email.message : ''}
                      {...register('email')}
                      error={errors.email && true}
                    />
                  )}
                  rules={textFieldRules('Email', 1, undefined, EMAIL_REGEXP)}
                  control={control}
                />
                <Controller
                  defaultValue=""
                  name="password"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={styles.form__field}
                      type="password"
                      variant="outlined"
                      label="Password"
                      fullWidth
                      helperText={errors.password ? errors.password.message : ''}
                      {...register('password')}
                      error={errors.password && true}
                    />
                  )}
                  rules={textFieldRules('Password', 2, 10, undefined, true)}
                  control={control}
                />

                <PrimaryButton padding="1.2rem 13.2rem" text="Login" type="submit" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
