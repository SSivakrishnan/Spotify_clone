import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'


function App() {
  return (
    <div className='App app_layout'>
<Header/>
<Navbar/>
<div className='main_content'>

<Switch>
    <Route path='/' exact component={Home}/>
   
    
   </Switch>
</div>
    </div>
  )
}

export default App