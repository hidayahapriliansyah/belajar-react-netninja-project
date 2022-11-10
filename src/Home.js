import { useState, useEffect } from "react";
import useFetch from "./useFetch";
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
  const {error, isPending, data: blogs} = useFetch('http://localhost:8000/blogs');

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

