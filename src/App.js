import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Autocomplete,TextField,Stack,AppBar,Toolbar } from '@mui/material';
import './App.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const App = () => {
const[data,setdata]=useState([]);
const[search,setsearch]=useState('')
useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/users').then(response=>setdata(response.data))},[]);
console.log(data)
console.log(search)
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2
};
  return (
    <div>
      <AppBar><Toolbar>
      <Stack>
        <Autocomplete 
          getOptionLabel={(data)=> `${data.name}`}
          options={data}
          renderInput={(params)=><TextField {...params}/>}
          className='auto'
          value={search}
          onChange={(e,newvalue:string|null)=>setsearch(newvalue)}/>
      </Stack></Toolbar></AppBar>
      <Slider {...settings} className='slider'>
      {
        data.map((items,id)=><div key={id}><div class="card" style={{width:200}}>
        <img class="card-img-top" src={`https://robohash.org/${id}?100X100`} alt="Card image"/>
        <div class="card-body">
          <h4 class="card-title">{items.name}</h4>
        </div>
      </div></div>)
      }</Slider>
    <center>{<div key={search.id}><div class="card" style={{width:400}}>
        <img class="card-img-top" src={`https://robohash.org/${search.id-1}?100X100`} alt="Card image"/>
        <div class="card-body">
          <h4 class="card-title">{search.name}</h4>
        </div>
      </div></div>}</center>
    </div>
  )
}

export default App