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
        <DivContent class="title" content="--" />

        <DivInfo />
      </div>

      <DivContent class="warn" content="City not found" />

      <Footer />
    </div>
  );
}

export default App;
