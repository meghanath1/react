import React,{useState} from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import '../Css/login.css'
import auth from '../App'
const Login =()=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [signup, setSignup] = useState(false);
  const handleCloseSignup = () => setSignup(false);
  const handleShowSignup = () => setShow(true);

  return (
    <>
      <a href="" onClick={handleShow}>
        Login
      </a>

      <Modal show={show} onHide={handleClose}>
      <div className="row">
        <div className="col-sm-12">
        <div className="login">
          <h2 className="login-header">Log in</h2>
          <form className="login-container">
            <p><input type="email" placeholder="Email" id="userEmail"/></p>
            <p><input type="password" placeholder="Password" id="userPassword"/></p>
            <p><input type="submit" value="Log in"/></p>
          </form>
      </div>
        </div>
        </div>


          <a  onClick={handleCloseSignup}>
            Close
          </a>
      </Modal>



      {/*Sign up*/}
      <a href=""  onClick={handleShowSignup}>
        Signup
      </a>

      <Modal show={signup} onHide={handleCloseSignup}>
      <div className="row">
        <div className="col-sm-12">
        <div class="login">
          <div class="login-triangle"></div>

          <h2 class="login-header">Signup</h2>

          <form class="login-container">
            <p><input type="email" placeholder="Email" id="emailSignup"/></p>
            <p><input type="password" placeholder="Password" id="passWordSignup"/></p>
            <p><input type="submit" value="Signup"/></p>
          </form>
        </div>
        </div>
      </div>
          <Button  onClick={handleClose}>
            Close
          </Button>

      </Modal>
    </>
  );
}

export default Login;
