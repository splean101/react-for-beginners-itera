import './App.css';

type FooterProps = {
  copyright: string;
}
const Footer: React.FC<FooterProps> = (props) => (
  <footer>Footer {props.copyright}</footer>
)
const App = () => {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <Footer copyright='C' />
    </div>
  );
}
  
export default App;

