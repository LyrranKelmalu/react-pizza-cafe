import './index.scss';
import NavBar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='Container'>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
