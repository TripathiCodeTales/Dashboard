import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <div className='parent'>
      <Header className='head' />
      <Content className='cntent'/>                                           
      </div>
       
    </div>
  );
}

export default App;
