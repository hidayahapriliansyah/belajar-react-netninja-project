import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    console.log(blog);
  }

  return ( 
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
        </textarea>
        <label>Blog author:</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">--Choose author--</option>
          <option value="adi">adi</option>
          <option value="hidayah">hidayah</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
}
 
export default Create;