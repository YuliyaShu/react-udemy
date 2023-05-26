import Button from '../components/Button';

function ButtonPage() {
  const handleCLick = () => {
    console.log('click');
  }
  return (
    <div className="App">
      <div>
        <Button primary onClick={handleCLick} >Text</Button>
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

export default ButtonPage;
