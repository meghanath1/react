import React,{useState,useEffect} from 'react';
const Viewpage=(props)=>{
  const [view,setView]=useState([]);
  console.log(props.match.params.id);
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=15962633-67b23c28d44c217e7c79dd350&id=${props.match.params.id}`)
    .then(response=>response.json())
    .then(response=>{
      console.log(response);
      setView(response.hits);
    })
  },[])
    return(
        <div className="row">
        {
          view.map((i,val)=>(
            <div className="col-sm-6 col-md-6" key={i.id}>
              <img src={i.largeImageURL} style={{width:"100%"}}/>

            </div>

          ))
        }
        </div>
    )
}
export default Viewpage;
