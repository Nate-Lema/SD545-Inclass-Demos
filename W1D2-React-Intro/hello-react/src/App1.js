import './App.css'

function getName(){
  return "MIU MSD"
}


function App() { //Component: return jsx
  const title = 'React Intro';
  const yellow = 'blue';
  const style = {color: yellow , fontSize: '50px'}
  return <h1 className='title' style={style}>{getName()}</h1>;
}

export default App;
