import styles from './ContentInfo.module.css';
import UserInfo from './UserInfo';

function formateDate(timestamp: string | number | Date) {
  const fullDate = new Date(timestamp);
  const date = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  let hours: string | number = fullDate.getHours();
  let minutes: string | number = fullDate.getMinutes();
  hours = hours < 10 ? '0' + hours : hours.toString();
  minutes = minutes < 10 ? '0' + minutes : minutes.toString();

  return `${year}-${month}-${date} ${hours}:${minutes}`;
}

interface User {
  name: string;
  photo: string;
}

interface ContentInfoProps {
  user: User;
  updatedTime: number;
}

function ContentInfo({ user, updatedTime }: ContentInfoProps) {
  return (
    <div className={styles.info}>
      <UserInfo name={user.name} photo={user.photo} />
      <div className={styles.date}>{formateDate(updatedTime)}</div>
    </div>
  );
}

export default ContentInfo;
