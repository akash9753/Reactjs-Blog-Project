// import {Switch, Route} from 'react-router-dom';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PostDetail from './PostDetail';
import CreatePost from './CreatePost';
import Home from './Home';
import Navbar from './Navbar';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/post/:postId" component={PostDetail}/>
        <Route exact path="/create-post" component={CreatePost}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
