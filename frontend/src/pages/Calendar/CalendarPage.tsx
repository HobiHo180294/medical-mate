import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { SectionTitle } from 'components/Typography/IntroPage/SectionTitle/SectionTitle';
import styles from './CalendarPage.module.scss';
import { TimeBlock } from 'components/index';
import axios from 'axios';

export const CalendarPage = () => {
  //   paginationUL1,
  const [pagination, setPagination] = useState<[] | unknown[]>([]);
  const currentDepartment = JSON.parse(localStorage.getItem('departmentName') as string) as string;

  localStorage.setItem(
    'appointment',
    JSON.stringify({
      userId: 'afa8bfee-d35e-4024-b8f1-a78cbf320882',
      departmentName: localStorage.getItem('departmentName'),
      date: '2023-07-20',
      time: '10:00',
    })
  );

  localStorage.setItem(
    'appointment1',
    JSON.stringify({
      userId: 'afa8bfee-d35e-4024-b8f1-a78cbf320882',
      departmentName: localStorage.getItem('departmentName'),
      date: '2023-07-20',
      time: '11:00',
    })
  );

  localStorage.setItem(
    'appointment2',
    JSON.stringify({
      userId: 'afa8bfee-d35e-4024-b8f1-a78cbf320882',
      departmentName: localStorage.getItem('departmentName'),
      date: '2023-07-20',
      time: '12:00',
    })
  );

  localStorage.setItem(
    'appointment3',
    JSON.stringify({
      userId: 'afa8bfee-d35e-4024-b8f1-a78cbf320882',
      departmentName: localStorage.getItem('departmentName'),
      date: '2023-07-21',
      time: '12:00',
    })
  );

  localStorage.setItem(
    'appointment4',
    JSON.stringify({
      userId: 'afa8bfee-d35e-4024-b8f1-a78cbf320882',
      departmentName: localStorage.getItem('departmentName'),
      date: '2023-07-17',
      time: '17:00',
    })
  );

  useEffect(() => {
    const paginationUL = document.querySelectorAll('ul li button');

    let index = 15;

    paginationUL.forEach((item) => {
      item.textContent = `2023-07-${index}`;
      index++;
    });

    setPagination(Array.from(paginationUL));
  }, []);

  return (
    <div className={styles.calendar}>
      <div className={styles.calendar__body}>
        <SectionTitle text={currentDepartment} />

        <div className={styles.calendar__body}>
          <Pagination count={10} variant="outlined" />

          <div className={styles.calendar__timeline}>
            <TimeBlock
              onClick={(event) => {
                axios.post(
                  'http://localhost:8080/appointment',
                  localStorage.getItem('appointment')
                );
                alert('Your appointment is successful!' + `${localStorage.getItem('appointment')}`);
              }}
              time="10:00"
            />
            <TimeBlock
              time="11:00"
              onClick={(event) => {
                axios.post(
                  'http://localhost:8080/appointment',
                  localStorage.getItem('appointment')
                );
                alert(
                  'Your appointment is successful!' + `${localStorage.getItem('appointment1')}`
                );
              }}
            />
            <TimeBlock
              time="12:00"
              onClick={(event) => {
                axios.post(
                  'http://localhost:8080/appointment',
                  localStorage.getItem('appointment')
                );
                alert(
                  'Your appointment is successful!' + `${localStorage.getItem('appointment2')}`
                );
              }}
            />
            <TimeBlock time="13:00" />
            <TimeBlock time="14:00" />
            <TimeBlock time="15:00" />
            <TimeBlock time="16:00" />
            <TimeBlock
              time="17:00"
              onClick={(event) => {
                axios.post(
                  'http://localhost:8080/appointment',
                  localStorage.getItem('appointment')
                );
                alert(
                  'Your appointment is successful!' + `${localStorage.getItem('appointment4')}`
                );
              }}
            />
            <TimeBlock time="18:00" />
          </div>
        </div>
      </div>
    </div>
  );
};
