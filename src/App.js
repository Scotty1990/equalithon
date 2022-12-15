import './App.css';
import './components/profileMain/profileMain.css'
import { Route, Link } from "react-router-dom";
import ContactForm from "./components/ContactForm"
import ProfileMain from './components/profileMain/ProfileMain';
import  InformationForm from './components/InformationForm'
import ExperienceForm from './components/ExperienceForm'
import IdentifyForm from './components/IdentifyForm';
import LoginForm from './components/LoginForm';
import SignupRoleForm from './components/SignupRoleForm';

function App() {
  
  return (
    <div className="App">
      <Route exact path="/profile" component={ProfileMain} />
      <Route exact path="/information" component={InformationForm}/>
      <Route exact path="/contact" component={ContactForm}/>
      <Route exact path="/experience" component={ExperienceForm}/>
      <Route exact path="/identify" component={IdentifyForm}/>
      <Route exact path="/login" component={LoginForm}/>
      <Route exact path="/signup" component={SignupRoleForm}/>
    </div>
  );
}

export default App;
