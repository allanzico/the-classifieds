import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import ClassfiedDetails from "./components/classifieds/ClassifiedDetail";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import CreateClassified from "./components/classifieds/CreateClassified";


const App = () => {
  return (
 <BrowserRouter>
   <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/classified/:id" component={ClassfiedDetails}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/create" component={CreateClassified}/>

        </Switch>


   </div>
 </BrowserRouter>
  );
}

export default App;
