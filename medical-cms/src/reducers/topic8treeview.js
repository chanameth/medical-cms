
const initialState={
    data:[],
    page:0
}

const topic8treeview = (state=initialState,action)=>{ 
    let result 
    switch (action.type){
        case "ADDALL":
                state = {
                    ...state,
                    data:action.payload,
                    comeback:action.comeback,
                    setDataSuccess:action.setDataSuccess
                } 
        break;
        case "ADDONE":
            state = {
             ...state,
             data:[...state.data,action.payload]
            }
        break; 
        case "UPDATEDATA":
            result = state.data.map((value) => {
                    if(value.uuid.toString() == action.payload.uuid.toString()){
                        value = action.payload
                    }
                    return value
        });
        state = {
            ...state,
            data:result,
           
        }    
    break;
        case "DELETE":
            
            state = {
                ...state,
                data:state.data.filter(data => data.year.toString() != action.payload.toString() )
            }
        break;  
        case "DELETEYEAR":
            
            state = {
                ...state,
                data:state.data.filter(data => data.year != action.payload )
            }
        break;  
        case "DELETEMONTH":
            console.info(state)
            console.info(action.payload)
            state = {
                ...state,
                data:state.data.filter(data => !( data.month == action.payload.remove_months && data.year == action.payload.year))
            }
            console.info(state)
        break;  
        case "DELETEDEPARTMENT":
            console.info(action.payload)
            console.info(state)
            state = {
                ...state,
                data:state.data.filter(data => !( data.department == action.payload.department && data.month == action.payload.month && data.year == action.payload.year))
            }
        break;  
      default:  
    }
    return state;
}

export default topic8treeview