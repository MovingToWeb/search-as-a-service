import logo from './logo.png';
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
    getTodo(id: 123) {
          rating
          content
          id
        }
  }
 `;
 const LIST_FILMS_QUERY = gql`
   {
       listTodos(limit: 10) {
           items {
             content
             rating
           }
         }
   }
  `;
  const LIST_MOVIES_QUERY = gql`
     {
         listMovies(limit: 50) {
             items {
               movie_name
               movie_url
               movie_info
             }
           }
     }
    `;
  const [
    getQuery,
    { loading, data }
  ] = useLazyQuery(LIST_MOVIES_QUERY);

  if (loading) return <p align="center">Loading ...</p>;
  if (data && data.listMovies) {
    console.log(data.listMovies);
  }


  return (
    <div className="App">
    <br />
      <img src={logo}  alt="logo" width="100" height="100" /><h1>Search as a Service</h1>

    <div>

    <table align="center">
    <tr><td><input type="text" /></td> <td><button onClick={()=>getQuery()} >Search </button></td>
    </tr>
    </table>

    <table align="center" style={{padding:'30px'}} showhide="false">
       <tr align="left"><th>Name</th><th>Info</th></tr>
        {data?.listMovies.items.map((launch) => (
        <tr align="left">
            <td><a href={launch.movie_url} target="_blank">{launch.movie_name}</a></td>
            <td>{launch.movie_info}</td>
        </tr>
        ))}
      </table>
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