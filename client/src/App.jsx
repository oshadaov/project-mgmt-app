import React from 'react'
import Header from './componets/Header'
import {ApolloProvider, ApolloClient , InMemoryCache} from '@apollo/client'
import Clients from './componets/Clients';


const client = new ApolloClient({
    uri : 'http://localhost:5000/graphql',
    cache : new InMemoryCache()
});
const App = () => {
  return (
  <>
        <ApolloProvider client={client}> 
             <Header/>
            <div className='container'>
              <Clients/>
             </div>
        </ApolloProvider>
        </>  
  )
}

export default App