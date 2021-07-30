import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='font-myfont'>
      <Header/>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'><SideBar/></div>
        <div className='col-span-4'>
        <Body/>
        </div>
      </div>
    </div>

  );
}

export default App;
