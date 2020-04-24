import React from 'react';
import './App.css';
import Navbarline from './Links/Navbar'
import {Route,Switch,Link} from 'react-router-dom'
import About from './Links/about';
import Home from './Links/home'
import Privacy from './Links/privacy'
import Products from './Links/products'
import Offers from './Links/offers'
import Viewpage from './Links/viewpage'
import Notfound from './Links/notFound'
const App=()=> {
  return (
    <React.Fragment>
      <div className='container-fluid'>
      <Navbarline fixed="top"/>

      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/privacy" exact component={Privacy}/>
          <Route path="/products" component={Products}/>
          <Route path="/offers" component={Offers}/>
          <Route path="/Privacy/:id" component={Viewpage}/>
          <Route  component={Notfound}/>
      </Switch>
      </div>

    </React.Fragment>
  );
}
export default App;
