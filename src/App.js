import './App.css';
import JobsList from './components/JobsList';
import JobDetails from './components/JobDetails';
import NavBar from './components/NavBarCmp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Route path='/' exact>
          <JobsList />
        </Route>

        <Route path='/details/:id' component={JobDetails}></Route>
      </Router>
    </div>
  );
}

export default App;
