import React from 'react';
import './App.css';
import Mapp from './Components/Map'

const Data = [
  {
    name : 'NewYork' , description : 'City',id : '1' 
  },
  {
    name : 'Paris' , description : 'City' ,id : '2'
  },
  {
    name : 'London' , description : 'City' ,id : '3'
  },
  {
    name : 'Tehran' , description : 'City',id :  '4'
  },
]

function App(){
  return (
    <div>
      <Mapp data = {Data} />
    </div>
  )

}

export default App;
