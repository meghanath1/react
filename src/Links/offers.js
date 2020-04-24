import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import '../Css/offers.css'
import $ from 'jquery'
import Tabs from 'react-bootstrap/Tabs'
import Lakshith from "../assets/images/lakshith.jpg"
import {Line} from 'react-chartjs-2';
const Offers=()=>{
      const [key, setKey] = useState('home');
    const [bgKey, changebg] = useState("0");

    const randomColor=()=>{
    return  Math.floor(Math.random()*255);
    }
 const color=()=>{
      $("#bg").css("background-color",'rgba('+randomColor()+','+randomColor()+','+randomColor()+')');
 }
     const data={
         labels :['Jan','Feb','Mar','Api','Jun','Jul','Aug'],
         datasets:[
         {
            label:"sales",
            data:[12,20,25,15,37,13,38],
             borderColor:['pink'],
             backgroundColor:'rgba(123,23,32,0.2)',
             pointBorderColor:'red',
             pointBackgroundColor:'blue'
         }
         ]
     }
        return(
        <div>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}>
      <Tab eventKey="home" title="Home">
          <h1>Why do we use it?</h1>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </Tab>
      <Tab eventKey="profile" title="Chart">
        <h1>What is Lorem Ipsum?</h1>
        <div  style={{
        width: '500px',
        height: '400px'
      }}>
          <Line data={data} />
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact">


  <div className="card" style={{width:"400px",position:"relative"}}>
    <div className="card-body text-center">
        <img className="card-img-bottom imgIcon" src={Lakshith} alt="Card image" style={{width:"100%"}}/>
        <a href="#" className="btn btn-primary" style={{margin:"10px 0"}}>Lakshith</a>
    </div>
  </div>
    <div id="bg" onMouseEnter={()=>color()}></div>
      </Tab>
    </Tabs>

</div>
    )
}
export default Offers;
