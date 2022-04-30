import './App.css';
import {Footer} from './Footer';
import {P} from './P';
import bio from './bio';

const App = () => {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <Footer copyright='C' />
      <P name = {bio[0]["first name"]} />
    </div>
  );
}
  
export default App;

//