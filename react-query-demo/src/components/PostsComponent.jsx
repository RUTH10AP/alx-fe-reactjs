// src/components/PostsComponent.jsx
import { useQuery } from 'react-query';
import axios from 'axios';

function PostsComponent() {
  // Fetch posts using React Query
  const { data, isLoading, isError, refetch } = useQuery('posts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  });

  // Handle loading and error states
  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error fetching posts.</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <button
        onClick={refetch}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refresh Posts
      </button>
      <ul className="space-y-4">
        {data.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow">
            <h2 className="font-bold text-lg">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
