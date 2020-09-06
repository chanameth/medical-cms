
const initialState={
    data:[],
    page:0
}

const topic8 = (state=initialState,action)=>{
    let result 
    switch (action.type){
        case "ADDALL":
            /* console.log(action.payload) */
                state = {
                    ...state,
                    data:action.payload
                } 
        break;
        case "QUERYONE":
                console.info(action.payload)
                if(action.payload != null){
                state = {
                    ...state,
                    data:action.payload
                }
            }else
            {
                state = {
                    ...state,
                    data:[...state,action.payload]
                }
            }
                /* console.info(state) */
        break;
        case "ADDONE":
            state = {
             ...state,
             data:[...state.data,action.payload]
            }
            /* console.info(state) */
        break;  
        case "UPDATE":
                console.log(action.payload)
                console.log(state.data)
                result = state.data.map((value) => {
                        if(value.id.toString() == action.payload.id.toString()){
                            console.info(value.id)
                            value = action.payload
                        }
                        return value
            });
            state = {
                ...state,
                data:result,
               
            }   
            console.info(state)   
        break;
        case "DELETEDATA":
            state = {
                ...state,
                data:state.data.filter(data => data.id.toString() !=action.payload.id.toString() )
            }   
        break;
        case "SETPAGE":
            console.log(action)
            state = {
                ...state,
                page:action.payload
            }   
        break;
        case "SETPAGEANDSTATEDATA":
            state={
                ...state,
                page:action.payload,
                years:action.years,
                months:action.months,
                department_name:action.department_name
            }
        break;
      default:  
    }
    return state;
}

export default topic8