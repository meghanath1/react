import React from 'react';
import {connect} from 'react-redux'
import {actionCreators} from './actionCreators'
const dispachAction = props => {
    console.log(props);
    return (
        <div>
            <h1>{props.total}{props.fruitsCount}</h1>
            <button type="button" onClick={props.fruitsDispatch}>Apple</button>
        </div>
    );
};
const mapStateToProps=state=>{
    return{
        total:state.fruits
    }
}
const mapDispatchToProps=disptach=>{
    return{
        fruitsDispatch:()=>disptach(actionCreators())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(dispachAction);