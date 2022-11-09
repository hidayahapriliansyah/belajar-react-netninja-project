import { useState } from "react";

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

  const [blogs, setBlogs] = useState([
    { title: "Hello World!", body: "Lorem ipusum ... ", author: "Adi", id: 1 },
    { title: "Let's learn react!", body: "Lorem ipusum ... ", author: "Firmansyah", id: 2 },
    { title: "The Net Ninja", body: "Lorem ipusum ... ", author: "Ninja", id: 3 },
  ]);

  return (
    <section className="home">
      <h1 className="title">Home</h1>
      {/* <p>{nameUI}</p>
      <p>Umur {age}</p>
      <p>Test array {array} </p>
      <a href={link}>Google Link</a>
      <br />
      <button onClick={handleClick}>Click Me Change Name</button>
      <button onClick={(e) => handleClickAgain('Hidayah', e)}>Click Me Again</button> */}
      { blogs.map((blog) => (
          <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            <p>Written by : { blog.author }</p>
            <p>{ blog.body }</p>
          </div>   
      ))}
    </section>
  );
};

export default Home;
