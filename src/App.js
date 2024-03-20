import logo from './icons/paul.jpeg';
import './App.css';
import {Icon, TestComp} from './components';

function App() {
  return (
    <div className='App'>
        <Icon image={logo} size={50} />
    </div>
  );
}

export default App;
