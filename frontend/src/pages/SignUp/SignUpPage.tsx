import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { parsePhoneNumberFromString } from 'libphonenumber-js/core';
import metadata from 'libphonenumber-js/metadata.full.json';
import axios from 'axios';
import { TextField } from '@mui/material';
import { EMAIL_REGEXP } from '../../constants';
import { textFieldRules } from 'helpers/textFieldRules';
import { MedicalMateLogo, PrimaryButton, Title } from 'components/index';
import { Question } from 'components/Login/Question/Question';

import styles from './SignUpPage.module.scss';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

interface ISignUpObject {
  message?: string;
  name?: string;
  config?: unknown;
  data?: string;
  headers?: unknown;
  request?: unknown;
  response?: unknown;
  status?: number;
  statusText?: string;
}

const normalizePhoneNumber = (value: string): string => {
  const phoneNumber = parsePhoneNumberFromString(value, metadata);

  if (!phoneNumber) return value;

  return phoneNumber.formatInternational();
};

const getSignUpResult = async (data: Inputs) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/registration', data);
    return response;
  } catch (error) {
    return error;
  }
};

export const SignUpPage = (): JSX.Element => {
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

    if (data.email && data.firstName && data.lastName && data.password && data.phone) {
      const signUpResult = (await getSignUpResult(data)) as ISignUpObject;

      console.log('signUpResult:', signUpResult);

      if (signUpResult.status === 200) {
        alert('You are successfully registered');
        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 1500);
        reset();
      } else {
        setError('email', {
          type: 'validate',
          message: signUpResult.response!.data!.message,
        });

        return;
      }
    }
  };

  return (
    <div className={styles.sign}>
      <div className={styles.sign__body}>
        <div className={`${styles.sign__content} ${styles.content}`}>
          <div className={styles.content__body}>
            <MedicalMateLogo />
            <p className={styles.content__paragraph}>
              Start your journey towards optimal health and well-being.
            </p>
            <p className={styles.content__paragraph}>
              Register today for personalized care at MedicalMate.
            </p>
          </div>
        </div>
        <div className={`${styles.sign__form} ${styles.form}`}>
          <div className={`${styles.form__body}`}>
            <Title className={`${styles.form__title}`} text="Sign up" />
            <Question
              className={`${styles.form__question}`}
              action="Log in."
              route="/login"
              question="Already an account?"
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
                <div className={`${styles.form__fields_left}`}>
                  <Controller
                    defaultValue=""
                    name="firstName"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className={styles.sign__field}
                        type="text"
                        variant="outlined"
                        label="First Name"
                        fullWidth
                        helperText={errors.firstName ? errors.firstName.message : ''}
                        {...register('firstName')}
                        error={errors.firstName && true}
                      />
                    )}
                    rules={textFieldRules('First Name', 2, undefined, undefined, true)}
                    control={control}
                  />

                  <Controller
                    defaultValue=""
                    name="phone"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className={styles.sign__field}
                        type="tel"
                        variant="outlined"
                        label="Phone"
                        fullWidth
                        helperText={errors.phone ? errors.phone.message : ''}
                        {...register('phone')}
                        error={errors.phone && true}
                        onChange={(event) => {
                          const normalizedPhoneNumber = normalizePhoneNumber(event.target.value);
                          field.onChange(normalizedPhoneNumber);
                        }}
                      />
                    )}
                    rules={textFieldRules('Phone', undefined, undefined, undefined, true)}
                    control={control}
                  />

                  <Controller
                    defaultValue=""
                    name="password"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className={styles.sign__field}
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
                </div>

                <div className={`${styles.form__fields_right}`}>
                  <Controller
                    defaultValue=""
                    name="lastName"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className={styles.sign__field}
                        type="text"
                        variant="outlined"
                        label="Last Name"
                        fullWidth
                        helperText={errors.lastName ? errors.lastName.message : ''}
                        {...register('lastName')}
                        error={errors.lastName && true}
                      />
                    )}
                    rules={textFieldRules('Last Name', 2, undefined, undefined, true)}
                    control={control}
                  />

                  <Controller
                    defaultValue=""
                    name="email"
                    render={({ field }) => (
                      <TextField
                        className={`${styles.sign__field} ${styles['email-field']}`}
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
                    rules={textFieldRules('Email', 2, undefined, EMAIL_REGEXP, true)}
                    control={control}
                  />
                </div>
              </fieldset>
              <PrimaryButton padding="1.2rem 13.2rem" text="Login" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
