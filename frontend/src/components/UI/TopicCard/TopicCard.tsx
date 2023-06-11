import { TTopicCardListItem } from 'types/TTopicCardListItem';
import { Category } from '../Category/Category';
import styles from './TopicCard.module.scss';

interface ITopicCard {
  question: string;
  answer?: string;
  list?: TTopicCardListItem[];
}

export const TopicCard = ({ question, answer, list }: ITopicCard): JSX.Element => (
  <div className={styles['question-card']}>
    <Category title={question} padding="1.5rem 0" />
    {answer ? (
      <p className={styles['question-card__answer']}>{answer}</p>
    ) : (
      <ul>
        {list?.map(({ _id, item }) => (
          <li key={_id}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);
