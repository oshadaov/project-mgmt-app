import AddClientModal from '../componets/AddClientModal'
import Projects from '../componets/Projects'
import Clients from '../componets/Clients'
import AddProjectModal from '../componets/AddProjectModal'

const Home = () => {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
        <AddClientModal/>
        <AddProjectModal/>
    </div>
    <Projects/>
    <hr/>
    <Clients/>
    </>
  )
}

export default Home