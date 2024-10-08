import React,{useState,useEffect} from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  const [infoStatus , setinfoStatus] = useState(false);
  const [mData , setmData] = useState(null);

  const handleInfoClick = ()=>{
    setinfoStatus(!infoStatus);
  }

  useEffect(()=>{
    const today = (new Date()).toDateString()
    const localKey = "Data" + today;
    let localdata = localStorage.getItem(localKey)
  
    setmData(JSON.parse(localdata));
      
    
    if (localdata==null){
      const NASA_KEY = process.env.REACT_APP_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=DEMO_KEY`

      async function getdata(){
        try {
          console.log(url);
          const res = await fetch(url)
          const apiData = await res.json()
          localStorage.setItem(localKey, JSON.stringify(apiData))
          setmData(apiData);
          console.log('Fetched from API today')
      } catch (err) {
          console.log(err.message)
      }
      }
      getdata()


    }else{
    }      
  },[])



  return (
    <div className="App">
      <MainPage handleInfoClick = {handleInfoClick} mData={mData}/>

        <Footer infoStatus = {infoStatus} mData={mData}/>

      {
        
      }
    </div>
  );
}

export default App;
