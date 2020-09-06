import { connect } from 'react-redux'

import Topic8 from '../components/Topic8';


const mapStatetoProp = (state)=>{
    return { 
        topic8:state.topic8
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return {
        setPage:(data)=>{
            dispatch({
                type:"SETPAGE",
                payload:data,
            })
        },
        setPageAndStateData:(data,years,months,department_name) =>{
            dispatch({type:"SETPAGEANDSTATEDATA",
                payload:data,
                years:years,
                months:months,
                department_name:department_name
        })
        },
    }
}

export default connect(mapStatetoProp,mapDispatchtoProps)(Topic8)