import { useState, useEffect } from "react";
import BlogLists from './BlogLists';

const Home = (props) => {
  // const { name, age, array, link } = props;
  // const [nameUI, setName] = useState(name);
  
  //   const handleClick = (e) => {
  //     console.log('Hello', e);
  //     setName('Hidayah Apriliansyah');
  //   }
  
  //   const handleClickAgain = (name, e) => {
  //     console.log('Hello Again ', name, e.target.innerText);
  //   }

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBlogs(data);
      });
  }, []);

  return (
    <section className="home">
      {/* <p>{nameUI}</p>
      <p>Umur {age}</p>
      <p>Test array {array} </p>
      <a href={link}>Google Link</a>
      <br />
      <button onClick={handleClick}>Click Me Change Name</button>
      <button onClick={(e) => handleClickAgain('Hidayah', e)}>Click Me Again</button> */}
      {blogs && <BlogLists blogs={blogs} title="All post" />}
      {/* <BlogLists blogs={blogs.filter((blog) => blog.author === 'Adi' )} title="Adi's post" handleDelete={handleDelete}/> */}
    </section>
  );
};

export default Home;

