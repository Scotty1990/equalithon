import './App.css';
import { Route, Link } from "react-router-dom";
import MyGDPortalPage from './components/MyGDPortalPage';
import GDPortalPosts from './components/GDPortalPosts';

function App() {
  return (
    <div className="App">      
      <Route exact path="/" component={MyGDPortalPage} />
      <Route exact path="/jobs" component={GDPortalPosts} />
    </div>
  );
}

export default App;
