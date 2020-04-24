
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../Css/products.css'
const Privacy=()=>{
  const [item,setItems]=useState([]);
  useEffect(()=>{
    fetch("https://pixabay.com/api/?key=15962633-67b23c28d44c217e7c79dd350&q=yellow+flowers&image_type=photo")
    .then(response=>response.json())
    .then(response=>{
      console.log(response);
      setItems(response.hits)
    })
  },[])

    return(
        <div className="row">
          {
            item.map((i,val)=>(
              <div className="col-sm-4 col-md-3 productSiz" key={i.id}>
              <Link to={`/Privacy/${i.id}`}>
                <img src={i.webformatURL} style={{width:"100%"}}/>
                </Link>
              </div>

            ))
          }
        </div>
    )
}
export default Privacy;
