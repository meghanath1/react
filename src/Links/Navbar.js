import React,{Component,useState} from 'react';
import {Link} from 'react-router-dom';
import Login from './login'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../Css/Navbar.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
class Navbarline extends Component{

    render(){
        console.log(this.props);
        return(
            <div>

                <div className="row navbarHeight">
                <div className="col-sm-2 col-xs-12">

                </div>
                <div className="col-sm-7">
                    <div className="row">
                        <div className="col-sm-2 text-center">
                            <Link to="/" className="text-white">Home</Link>
                        </div>
                        <div className="col-sm-2 text-center">
                            <Link to="/products" className="text-white">Products</Link>
                        </div>
                        <div className="col-sm-2 text-center">
                            <Link to="/about" className="text-white">About</Link>
                        </div>
                        <div className="col-sm-2 text-center">
                            <Link to="/privacy" className="text-white">Privacy</Link>
                        </div>
                        <div className="col-sm-2 text-center">
                            <Link to="/offers" className="text-white">Offers</Link>
                        </div>
                     </div>
                </div>
                <div className="col-sm-3 col-xs-12">
                    <Login/>
                </div>
              </div>
            </div>
            )
    }
}
export default Navbarline;
