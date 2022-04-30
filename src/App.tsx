import './App.css';
import {Footer} from './Footer';
import {P} from './P';
import bio from './bio.json';
//console.log(keys in bio);

const App = () => {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <P name = {bio["first name"]} biography = {bio.biography} contacts = {bio.contacts} />
      <Footer copyright='C' />
    </div>
  );
}
  
export default App;

//