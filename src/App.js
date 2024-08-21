import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Expert from './components/expert';
import Newletter from './components/newletter';
import Plans from './components/plans';
import Footer from './components/footer';
function App() {
  return (
  <div className='w-full'>
    <Header />
    <Banner/>
    <Expert/>
    <Newletter/>
    <Plans/>
    <Footer/>
  </div>
  );
}

export default App;
