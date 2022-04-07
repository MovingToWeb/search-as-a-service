// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
 


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient,createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify'
 import awsconfig from './aws-exports'

import App from "./App";

const httpLink = createHttpLink({
  uri: "https://p2mppx66abdtbgmpyrdnl6hwc4.appsync-api.us-east-1.amazonaws.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'x-api-key': 'da2-d6zkasiozfdevk5xbkwtmh7hgi',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);




