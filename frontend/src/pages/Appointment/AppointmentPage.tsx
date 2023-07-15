import { useEffect, useState } from 'react';
import axios from 'axios';
import { SectionTitle } from 'components/Typography/IntroPage/SectionTitle/SectionTitle';
import styles from './AppointmentPage.module.scss';
import { ContentBlock } from 'components/index';

type TDepartments = {
  config?: unknown;
  data: string[];
  headers?: unknown;
  request?: unknown;
  status?: number;
  statusText?: string;
};

const getDepartments = async () => {
  try {
    const response = await axios.get('http://localhost:8080/department/all');
    return response;
  } catch (error) {
    return error;
  }
};

export const AppointmentPage = () => {
  const [departments, setDepartments] = useState<TDepartments | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      const data = (await getDepartments()) as TDepartments;
      setDepartments(data);
    };

    fetchDepartments();
  }, []);

  console.log('departments:', departments);

  return (
    <div className={styles.departments}>
      <div className={styles.departments__body}>
        <SectionTitle text="Departments" />

        <ul className={styles.departments__list}>
          {departments?.data.map((department, index) => (
            <li key={index}>
              <ContentBlock
                onClick={(event) => {
                  localStorage.setItem('departmentName', JSON.stringify(event.target!.textContent));
                }}
                link="http://localhost:5173/personal-cabinet/calendar"
                title={department}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
