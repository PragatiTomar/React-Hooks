import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')
  function decrementCount(){
    setCount(prevCount => prevCount -1)
    setTheme('blue')
  }
  function IncrementCount(){
    setCount(prevCount => prevCount +1)
    setTheme('red')
  }
return(
  <>
  <button onClick={decrementCount}>-</button>
  <span>{count}{theme}</span>
  <button onClick={IncrementCount}>+</button>
  </>
)
     
}

export default App;
