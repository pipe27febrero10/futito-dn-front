import './App.css';
import Registration from './views/registration';

function App() {
  const styles = {
    backgroundColor: '#f9f9f9'
  }
  return (
    <div className="App" style={styles}>
      <Registration/>
    </div>
  );
}

document.body.style = "background-color: #f9f9f9;";

export default App;
