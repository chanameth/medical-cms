
const initialState={
    data:[],
    page:0
}

const topic16_2 = (state=initialState,action)=>{
    let result 
    switch (action.type){
        case "ADDALL":
                state = {
                    ...state,
                    data:action.payload
                } 
        break;
        case "UPDATE":
                result = state.data.map((value) => {
                        if(value.id.toString() == action.payload.id.toString()){
                            value = action.payload
                        }
                        return value
            });
            state = {
                ...state,
                data:result
            }      
        break;
        case "ADDONE":
            state = {
             ...state,
             data:[...state.data,action.payload]
          
        }
        break;  
        case "DELETEDATA":
            state = {
                ...state,
                data:state.data.filter(data => data.id.toString() !=action.payload.id.toString() )
            }   
        break;
        case "SETPAGE":
            state = {
                ...state,
                page:action.payload
            }   
        break;
      default:  
    }
    return state;
}

export default topic16_2