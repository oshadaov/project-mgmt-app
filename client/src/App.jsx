import {BrowserRouter as Router , Route,Routes} from 'react-router-dom' 
import Header from './componets/Header'
import {ApolloProvider, ApolloClient , InMemoryCache} from '@apollo/client'
import Project from './pages/Project';
import Home from './pages/Home';
import NotFound from './pages/NotFound';



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
          <Router>
             <Header/>
            <div className='container'>
              <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
              <Route path='/project/:id' element={<Project/>}></Route>
              </Routes>
             </div>
             </Router>
        </ApolloProvider>
        </>  
  )
}

export default App