import './App.css';
import './components/profileMain/profileMain.css'
import { Route, Link } from "react-router-dom";
import MyGDPortalPage from './components/MyGDPortalPage';
import ProfileMain from './components/profileMain/ProfileMain';
import  Information from './components/InformationForm'


function App() {
  
  return (
    <div className="App">
      <Route exact path="/" component={ProfileMain} />
      <Route path='information' element={Information}
    </div>
  );
}

export default App;
