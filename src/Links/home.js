import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from 'react-router-dom';
class Home extends Component{
    state={
        set:[]
    }
    componentDidMount(){
        fetch("https://pixabay.com/api/?key=15962633-67b23c28d44c217e7c79dd350&q=yellow+flowers&image_type=photo&pretty=true")
        .then(response=>response.json())
        .then(response=>{
            console.log(response);
            this.setState({
                set:response.hits
            })
        })
    };
    render(){

        return(
            <div className="">
                <div className="row">
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    dots="false"
                        autoplay
                      items="1">
                    <div className="item">
                        <img className="img-responsive"  height="350px"  src="https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943__340.jpg"/>
                    </div>
                    <div className="item">
                        <img   height="350px" className="img-responsive" src="https://i.picsum.photos/id/1/5616/3744.jpg"/>
                    </div>
                    <div className="item">
                        <img    height="350px"   src="https://pixabay.com/get/55e2dc414351ae14f1dc846096293277133dd8e6504c704c7d297ed7974cc35f_640.jpg"/>
                    </div>
                    <div className="item">
                        <img    height="350px"  src="https://pixabay.com/get/52e9d2464a51a414f1dc846096293277133dd8e6504c704c7d297ed7974fc45f_640.jpg"/>
                    </div>
                    <div className="item">
                        <img    height="350px"  src="https://pixabay.com/get/51e1d0464e52b10ff3d8992cc62d3e781739dde64e507441732b7fd49749c1_640.jpg"/>
                    </div>
                  </OwlCarousel>
                </div>
                <div className="row">
            {this.state.set.map((res)=>{
                return(

                        <div className="col-sm-6 col-md-3 col-12 col-lg-3" key={res.id} style={{marginBottom:"20px"}}>
                          <div className="card product">
                                <img src={res.webformatURL} width="100%" height="220px"/>
                            <div className="card-body">
                              <h4 className="card-title" style={{fontSize:"15px"}}>{res.tags}</h4>
                              <p className="card-text">Likes : {res.likes}</p>
                              <a href="#" className="btn btn-primary stretched-link">Comments : {res.comments}</a>
                            </div>
                          </div>

                        </div>
                      )
            })
            }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  width="100%">
              <path fill="#0099ff" fillOpacity="1" d="M0,64L30,90.7C60,117,120,171,180,186.7C240,203,300,181,360,149.3C420,117,480,75,540,64C600,53,660,75,720,117.3C780,160,840,224,900,208C960,192,1020,96,1080,85.3C1140,75,1200,149,1260,170.7C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>


            </div>
            )
    }
}
export default Home;
