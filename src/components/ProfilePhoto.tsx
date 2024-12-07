import styles from './ProfilePhoto.module.css';

interface ProfilePhotoProps {
  photo: string;
  name: string;
}

function ProfilePhoto({ photo, name }: ProfilePhotoProps) {
  return <img className={styles.profilePhoto} src={photo} alt={name} />;
}

export default ProfilePhoto;
