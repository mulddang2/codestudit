import ProfilePhoto from './ProfilePhoto';
import styles from './UserInfo.module.css';

interface UserInfoProps {
  name: string;
  photo: string;
}

function UserInfo({ name, photo }: UserInfoProps) {
  return (
    <div className={styles.userInfo}>
      <ProfilePhoto photo={photo} name={name} />
      <div className={styles.userName}>{name}</div>
    </div>
  );
}

export default UserInfo;
