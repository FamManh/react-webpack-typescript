import React from 'react'
import './app.css'
import Logo from './logo.png'

const App = () => {
  const name = 'Manh'
  return (
    <div>
      <h1>
        React Typescript Webpack Starter Template - {process.env.NODE_ENV} -{' '}
        {process.env.name}
      </h1>
      <img src={Logo} alt="react logo" />
    </div>
  )
}

export default App
