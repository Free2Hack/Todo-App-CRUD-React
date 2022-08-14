import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import Header from './components/header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Todo/>
    </div>
  );
}

export default App;
