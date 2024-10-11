import React, { useState } from 'react';
import blogData from '../Data/blogData'; 

function Admin() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState(blogData);
  
    const handleAddPost = () => {
      const newPost = {
        id: posts.length + 1,
        title,
        content,
        excerpt: content.slice(0, 100), // Automatically generate an excerpt
      };
  
      setPosts([...posts, newPost]);
      setTitle('');
      setContent('');
    };

    return (
        <div>
          <h2>Add a New Blog Post</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog Title"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Blog Content"
          />
          <button onClick={handleAddPost}>Add Post</button>
    
          {/* Displaying all blog posts for admin review */}
          <h3>All Blog Posts</h3>
          {posts.map(post => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      );
    }
    export default Admin;