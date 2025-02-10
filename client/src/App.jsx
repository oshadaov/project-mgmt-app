import React from 'react'
import Header from './componets/Header'
import {ApolloProvider, ApolloClient , InMemoryCache} from '@apollo/client'
import Clients from './componets/Clients';
import AddClientModel from './componets/AddClientModel';
const cache = new InMemoryCache({
  typePolicies:{
      Query:{
          fields:{
            clients:{
              merge(existing,incoming){
                  return incoming
              }
            },
            projects:{
              merge(existing,incoming){
                  return incoming
              }
            },
          }
      }
  }
})


const client = new ApolloClient({
    uri : 'http://localhost:5000/graphql',
    cache ,
});
const App = () => {
  return (
  <>
        <ApolloProvider client={client}> 
             <Header/>
            <div className='container'>
              <AddClientModel/>
              <Clients/>
             </div>
        </ApolloProvider>
        </>  
  )
}

export default App