import './App.css';
import { Route, Link } from "react-router-dom";
import MyGDPortalPage from './components/MyGDPortalPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MyGDPortalPage} />
      
    </div>
  );
}

export default App;
