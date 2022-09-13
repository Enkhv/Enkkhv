
import './App.css';

function App() {
  const name = 'John';
  const isNameShowing = false;

  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : 'Henchbish'}!</h1>
    </div>
  );
}

export default App;
