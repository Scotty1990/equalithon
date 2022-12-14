import './App.css';
import './components/profileMain/profileMain.css'
import { Route, Link } from "react-router-dom";

import ProfileMain from './components/profileMain/ProfileMain';
import  InformationForm from './components/InformationForm'


function App() {
  
  return (
    <div className="App">
      <Route exact path="/profile" component={ProfileMain} />
      <Route exact path="/information" component={InformationForm}/>
    </div>
  );
}

export default App;
