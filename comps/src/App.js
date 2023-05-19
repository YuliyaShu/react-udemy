import './App.css';
import Button from './Button';

function App() {
  const handleCLick = () => {
    console.log('click');
  }
  return (
    <div className="App">
      <div>
        <Button primary onClick={handleCLick} className='mb-5'>Text</Button>
      </div>
      <div>
        <Button secondary outline>Text</Button>
      </div>
      <div>
        <Button success rounded outline>Text</Button>
      </div>
      <div>
        <Button warning rounded>Text</Button>
      </div>
      <div>
        <Button danger rounded>Text</Button>
      </div>
    </div>
  );
}

export default App;
