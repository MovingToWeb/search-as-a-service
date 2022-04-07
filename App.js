import logo from './logo.svg';
import './App.css';
import React ,{useState}from 'react'
import { useLazyQuery, gql } from "@apollo/client";
function App() {

const [print,setPrint]=useState(false)
// const [data,setData]=useState(null)
const [query,setQuery]=useState(null)
  function getData(val)
  {
    console.warn(val.target.value)
  
    setPrint(false)
  }
  const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
 `;
  const [
    getQuery, 
    { loading, data }
  ] = useLazyQuery(FILMS_QUERY);

  if (loading) return <p>Loading ...</p>;
  if (data && data.launchesPast) {
    console.log(data.launchesPast);
  }

  
  return (
    <div className="App">
     
    <input type="text" />
    <button onClick={()=>getQuery()} > Search </button>
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data?.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
    </div>
    
  );
}


export default App;
/*
export function DelayedCountries() {
  const [
    getCountries, 
    { loading, data }
  ] = useLazyQuery(GET_COUNTRIES);

  if (loading) return <p>Loading ...</p>;
  if (data && data.countries) {
    console.log(data.countries);
  }

  return (
    <div>
      <button onClick={() => getCountries()}>
        Click me to print all countries!
      </button>
      {data &&
        data.countries &&
        data.countries.map((c, i) => <div key={i}>{c.name}</div>)
    </div>
  );
}*/