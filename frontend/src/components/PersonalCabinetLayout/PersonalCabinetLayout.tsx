import { Outlet } from 'react-router-dom';
import { ContentBlock, IntroPageContainer, MedicalMateLogo } from '..';
import { SectionTitle } from 'components/Typography/IntroPage/SectionTitle/SectionTitle';

import styles from './PersonalCabinetLayout.module.scss';

interface UserData {
  avatarColor: null;
  email: string;
  firstName: string;
  lastName: string;
  previous: unknown[];
  upcoming: unknown[];
}

export const PersonalCabinetLayout = () => {
  const { email, firstName, lastName, previous, upcoming } = JSON.parse(
    localStorage.getItem('loginResult') as string
  ) as UserData;

  return (
    <div className={styles.layout}>
      <header className={`${styles.layout__header} ${styles.header}`}>
        <IntroPageContainer>
          <ul className={`${styles.header__body}`}>
            <div className={`${styles.header__user} ${styles.user}`}>
              <div className={styles.user__avatar} />
              <div className={styles.user__info}>
                <span className="user__info_item">{`${firstName}` + ' ' + `${lastName}`}</span>
                <span className="user__info_item">{email}</span>
              </div>
            </div>
            <SectionTitle text="Personal Cabinet" />
            <MedicalMateLogo />
          </ul>
        </IntroPageContainer>
      </header>
      <div className={`${styles.layout__content} ${styles.content}`}>
        <IntroPageContainer>
          <div className={`${styles.content__body}`}>
            <aside className={styles.content__sidebar}>
              <ContentBlock title="My Profile" link="my-profile" />
              <ContentBlock title="Make an Appointment" link="appointment" />
              <ContentBlock title="Log Out" />
            </aside>
            <Outlet />
          </div>
        </IntroPageContainer>
      </div>
    </div>
  );
};
