import {Apple} from './actionCreators'
const initialState={
    fruits:15
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case Apple : return{
                ...state,fruits:state.fruits+1                
            }
            
        default :return state;
    }
    console.log(state);
}
export default reducer;