import Navbar from './Navbar';
import Home from './Home';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';

function App() {
  const name = 'Muhamad Adi';
  const age = 21;
  const array = [1, 2, 4];
  const link = 'http://www.google.com/';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Switch>
              <Route exact path="/">
                <Home name={name} age={age} array={array} link={link} />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blog-detail/:id">
                <BlogDetail />
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
        </div>
       </div>
    </Router>
  );
}

export default App;
