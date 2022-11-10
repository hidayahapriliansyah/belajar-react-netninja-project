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
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogss')
        .then(response => {
          if(!response.ok) {
            throw Error('Connected to resource but response not ok!');
          }
          return response.json();
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
          // setBlogs(null);
        });
    }, 1000);
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
      {error && <div>{ error }</div>}
      {isPending && <div>Loading ... </div>}
      {blogs && <BlogLists blogs={blogs} title="All post" />}
      {/* <BlogLists blogs={blogs.filter((blog) => blog.author === 'Adi' )} title="Adi's post" handleDelete={handleDelete}/> */}
    </section>
  );
};

export default Home;

