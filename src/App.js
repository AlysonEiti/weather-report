import './App.css';
import Form from './Components/Form';
import DivInfo from './Components/DivInfo';
import DivContent from './Components/DivContent';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Weather Report</h1>
      
      <Form />

      <div className='result'>
        <DivContent key="5" class="title" content="--" />

        <DivInfo />
        <DivContent key="6" class="tempDescription" content="" />
      </div>

      <DivContent key="7" class="warn" content="" />

      <Footer />
    </div>
  );
}

export default App;
