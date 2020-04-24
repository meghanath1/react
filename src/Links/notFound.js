import React from 'react';
import '../Css/notFound.css';
import {Link} from 'react-router-dom';
const Notfound=()=>{
    
    return(
    
<section className="page_404">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="four_zero_four_bg">
			<h1 className="text-center ">404</h1>
		</div>
		
		<div className="contant_box_404 text-center shake">
		<h3 className="h2">
		Look like you're lost
		</h3>
		
		<p className="shake">Sorry page Not Found!</p>
		
		<button className="btn-primary">
            <Link to="/" style={{color:"#ffffff"}}>Go to Home</Link>
        </button>
	
		</div>
		</div>
		</div>
</section>

    )
}
export default Notfound;