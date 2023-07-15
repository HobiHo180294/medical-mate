import { SectionTitle } from 'components/Typography/IntroPage/SectionTitle/SectionTitle';
import { TEvent } from 'types/TEvent';
import styles from './Event.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface IEvent {
  title: string;
  eventData?: TEvent[];
}

export const Event = ({ title, eventData }: IEvent) => {
  const [previous, setPrevious] = useState<unknown[] | [] | any>([]);
  const [upcoming, setUpcoming] = useState<unknown[] | [] | any>([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const data = await axios.get('http://localhost:8080/client/student%40gmail.com');
      setPrevious(data.data.previous);
      setUpcoming(data.data.upcoming);
    };

    fetchUpcoming();
  }, []);

  console.log('previousAppointments:', previous);

  return (
    <div className={styles.event}>
      <div className={styles.event__body}>
        <SectionTitle text={title} />

        {title === 'Previous events' && previous.length > 0 && (
          <div className={styles.event__items}>
            {previous.map((item, index) => (
              <p style={{ marginBottom: '3rem' }}>
                <p key={index}>Adress: {item.address}</p>
                <p key={index}>Date: {item.date}</p>
                <p key={index}>Adress: {item.floor}</p>
                <p key={index}>Adress: {item.time}</p>
              </p>
            ))}
          </div>
        )}

        {title === 'Upcoming events' && upcoming.length > 0 && (
          <div className={styles.event__items}>
            {upcoming.map((item, index) => (
              <p style={{ marginBottom: '3rem' }}>
                <p key={index}>Adress: {item.address}</p>
                <p key={index}>Date: {item.date}</p>
                <p key={index}>Adress: {item.floor}</p>
                <p key={index}>Adress: {item.time}</p>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
