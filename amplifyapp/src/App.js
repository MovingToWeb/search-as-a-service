import logo from './logo.png';
import './App.css';
import React ,{useState}from 'react'
import { useLazyQuery, gql } from "@apollo/client";

function App() {

const [print,setPrint]=useState(false)
// const [data,setData]=useState(null)
const [search, setSearch]=useState('')
const [category, setCategory]=useState('products')
const [query,setQuery]=useState(null)


  function getSearch()
  {
    return this.search;
  }
  function getCategory()
  {
    return this.category;
  }

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

  const LIST_QUERY = gql`
  {
     listSearchServices(limit: 100) {
           items {
             name
             url
             info
             id
             category
           }
         }
  }
  `
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
  ] = useLazyQuery(LIST_QUERY);

  if (loading) return <p align="center">Loading ...</p>;
  if (data && data.listSearchServices) {
    console.log(data.listSearchServices);
  }


  return (
    <div className="App">
      <img src={logo}  alt="logo" width="100" height="100" /><h1>Search as a Service</h1>

    <div>

    <table align="center">
    <tr><td><input type="text" onChange={(val) => setSearch(val.target.value)} /></td>
    <td><select name="category" onChange={(val) => setCategory(val.target.value)}>
          <option selected value="products">Product Info</option>
          <option value="train">Train Info</option>
          <option value="movies">Movie Info</option>
        </select>
        </td>
        </tr><tr>
     <td><button onClick={()=>getQuery()} >Search </button></td>
    </tr>
    </table>
    <br />
    <table align="center" id="customers" name="customers" style={{padding:'30px'}}>
       <tr align="center"><th>Name</th><th>Info</th></tr>
        {data?.listSearchServices.items.filter(item => item.category.includes(category)).filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((launch) => (
        <tr align="left">
            <td><a href={launch.url} target="_blank">{launch.name}</a></td>
            <td>{launch.info}</td>
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