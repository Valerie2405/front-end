import React, {useState} from 'react';
import './App.css';
import Budget from './Budget';
import Join from './Join';
import {BrowserRouter as Router, Route, Link,useHistory, Switch} from 'react-router-dom';


function App() {
  const [state, setState] = useState ({
    isJoining: false,
    groupCode: '',
    budget: ''
  } );

  // opens popup for user to enter group code after
  // join button is clicked on home screen
  const openJoin = () => {
    setState(prevState => {
      return {...prevState, isJoining: true}
    });
  }

  // stores the user's group ID entered at group code popup
  const handleCodeInput = (e) => {
    setState(prevState => {
      return {...prevState, groupCode: e.target.value};
    });
    
    // console.log(state.groupCode);
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, isJoining: false};
    })
  }


  // possible budget input handler
  // requires budget to have handleBudget as prop value 
   const handleBudget = (e) => {
      setState(prevState => {
       return {...prevState, handleBudget: e.target.value};
    })
      
      console.log(state.budget);
    }
 
/**
 * PATHS WE NEED TO CREATE FOR OTHER PAGES:
 * <Route path = "/createHangout" component={CreateHangout} />
 * <Route path = "/enterBudgetNotHost" component = {EnterBudgetNotHost}/>
 * <Route path = "/waitforGroup" component = {waitForGroup} />
 */
 
 

  
  return (
    // need to add functionality for create group button
    <Router>

   
    <div className="App">
      <h1 className="title">budget hangout.</h1>
      <button className="JoinButton" onClick={openJoin}>Join Group</button>
      <button className="CreateButton" onClick = {Budget}> Create Group</button>
      <Join isUp={state.isJoining} handleCodeInput={handleCodeInput} closePopup={closePopup}/>

      <Switch>
      <Route path = "/budget" component ={Budget}/>
      
      </Switch>
    </div>
    </Router>

  );
}
export default App;


