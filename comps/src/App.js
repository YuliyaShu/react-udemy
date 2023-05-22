import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);
  const handleSelection = (option) => setSelection(option);
  const options = [
    { label: 'Text 1', value: '1' },
    { label: 'Text 2', value: '2' },
    { label: 'Text 3', value: '3' }
  ]
  return <Dropdown options={options} value={selection} onChange={handleSelection}/>
}

export default App;
