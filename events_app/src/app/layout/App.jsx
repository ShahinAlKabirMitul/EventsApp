import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage'
import EventForm from '../../features/event/EventForm/EventForm';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
           <Route exact path='/' component={HomePage}/>
           <Route path='/events' component={EventDashboard}/>
           <Route path='/event/:id' component={EventDetailedPage}/>
           <Route path='/people' component={PeopleDashboard}/>
           <Route path='/profile/:id' component={UserDetailedPage}/>
           <Route path='/settings' component={SettingsDashboard}/>        
           <Route path='/createevent' component={EventForm}/>

         
        </Container>
      </div>
    );
  }
}

export default App;
