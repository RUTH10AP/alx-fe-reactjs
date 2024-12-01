import { useQuery } from 'react-query';

function PostsComponent() {
  const { data, isLoading, isError, refetch } = useQuery(
    'posts',
    () => fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
    { staleTime: 30000 } // Adjust stale time as needed
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={refetch}>Refetch Posts</button>
    </div>
  );
}

export default PostsComponent;
