import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Components/Home'
import Contact from './Components/Contact'
import Procedures from './Components/Procedures'
import Nav from './Components/Nav'
import ProcedureDetails from './Components/ProceduresDetails'
import './App.css';

function App() {
    const proceduresList = [
      {
        name: 'Root Canal',
        id: 1,
        description: 'Agonizing'
      },
      {
        name: 'Crown',
        id: 2,
        description: "ouch ouch ouch"
      },
      {
        name: 'Cleaning',
        id: 3,
        description: "hell in a chair"
      },
    ]

    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
  
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route
            exact
            path="/procedures"
            render={() => { return <Procedures proceduresList={proceduresList} /> }}
          />
          <Route
            path="/procedures/:id"
            render={(routeProps) => {
              const id = routeProps.match.params.id
              const targetProcedure = proceduresList.find((p) => p.id === parseInt(id))
              return <ProcedureDetails procedure={targetProcedure} />
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;