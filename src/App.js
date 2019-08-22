import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
// import logo from './logo.svg';
import './App.css';

const Button = styled.button`
  font-family:  inherit;
  font-size: 1.5rem;
  background: #00d8ff;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  margin: 2rem;
  padding: 1rem;
  width: 100px;
  &:hover{
    background: #006c80;
  }
`

const Span = styled.span`
color: #00d8ff;
font-family:  inherit;
font-size: 1.5rem;
  
`

const App = (props) => {
  const [count, setCount] = useState(props.count || 0)
  const [text, setText] = useState('')

  useEffect(() => {
    if (count) {
      localStorage.setItem('count', JSON.stringify(count))
    }
  }, [count])

  useEffect(() => {
    const stringCount = localStorage.getItem('count')
    const count = parseInt(stringCount, 10)

    if (!isNaN(count)) {
      setCount(() => (count))
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">

        <p>Your current {text || 'count'} is <Span>{count}</Span>.</p>
        <p>Your count of <Span>{count}</Span> will be saved if you refresh or close the tab, so you can pick up where you left off later.</p>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
        <Button onClick={() => setCount(count - 1)}>-1</Button>
        <Button onClick={() => setCount(props.count)}>Reset</Button>
      </header>
    </div>
  )
}

App.defaultProps = {
  count: 0
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
