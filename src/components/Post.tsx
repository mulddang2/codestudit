import Card from './Card';
import ContentInfo from './ContentInfo';
import styles from './Post.module.css';

interface User {
  name: string;
  photo: string;
}

interface PostProps {
  post: {
    user: User;
    updatedAt: number;
    content: string;
  };
}

function Post({ post }: PostProps): React.ReactElement {
  return (
    <Card className={styles.post}>
      <div className={styles.content}>
        <ContentInfo user={post.user} updatedTime={post.updatedAt} />
        <p className={styles.description}>{post.content}</p>
      </div>
    </Card>
  );
}

export default Post;
