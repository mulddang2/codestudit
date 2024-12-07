import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api';
import Post from './Post';
import styles from './PostList.module.css';

interface postsDataProps {
  createdAt: number;
  updatedAt: number;
  id: number;
  userId: number;
  content: string;
  user: {
    createdAt: number;
    updatedAt: number;
    id: number;
    username: string;
    name: string;
    photo: string;
  };
}

function PostList() {
  const { data: postsData } = useQuery<postsDataProps[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
  console.log(postsData);

  const posts: postsDataProps[] = postsData ?? [];

  return (
    <div className={styles.postList}>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
