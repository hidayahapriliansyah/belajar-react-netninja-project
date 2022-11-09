import { useState } from "react";

const Home = (props) => {
  const { name, age, array, link } = props;

  const [nameUI, setName] = useState(name);

  const handleClick = (e) => {
    console.log('Hello', e);
    setName('Hidayah Apriliansyah');
  }

  const handleClickAgain = (name, e) => {
    console.log('Hello Again ', name, e.target.innerText);
  }

  return (
    <section className="home">
      <h1 className="title">App React</h1>
      <p>{nameUI}</p>
      <p>Umur {age}</p>
      <p>Test array {array} </p>
      <a href={link}>Google Link</a>
      <br />
      <button onClick={handleClick}>Click Me Change Name</button>
      <button onClick={(e) => handleClickAgain('Hidayah', e)}>Click Me Again</button>
    </section>
  );
};

export default Home;
