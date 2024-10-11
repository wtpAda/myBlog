import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../Data/blogData';

function Blog() {
  const { id } = useParams(); // Fetches the blog id from the URL
  const blog = blogData.find(blog => blog.id === parseInt(id));


  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }};

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
       
       {/* Comments Section */}
       <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Submit Comment</button>
      </div>
    </div>
  );
}

export default Blog;
