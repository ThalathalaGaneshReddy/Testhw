import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Dropdown from './components/Dropdown';
import Map from './components/map';
import axios from 'axios';

function App() {
  const [cities, setCities] = useState([]);

  const [destinationOne , setDestinationOne] = useState(null)
  const [destinationTwo , setDestinationTwo] = useState(null)



  useEffect(async () => { 
    let result = await axios.get('https://gist.githubusercontent.com/dastagirkhan/00a6f6e32425e0944241/raw/33ca4e2b19695b2b93f490848314268ed5519894/gistfile1.json')
      .then((response) => 
      {
        return response.data
    }
    ).catch((error) => {
        console.error(error)
    });
    console.log("result",result)
    setCities(result)
  }, []);

  return (
    <div className="App">   
    <div> 
      <div style={{width:"200px", marginRight:"20px"}}> 
        <div>Starting</div>
        <Dropdown cities ={cities}  destination = {destinationOne} setDestination= {setDestinationOne}/>
      </div> 
      <div style={{width:"200px"}}> 
        <div>Destination</div>
        <Dropdown cities ={cities} destination = {destinationTwo} setDestination= {setDestinationTwo}/>
      </div>
    </div>
      <Map cities ={cities}/>
    </div>
  );
}

export default App;
