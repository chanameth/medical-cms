import { connect } from 'react-redux'

import Topic16_2 from '../components/Topic16_2'

const mapStatetoProp = (state)=>{
    return {
       topic16_2:state.topic16_2
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return {
        setPage:(data)=>{
            dispatch({
                type:"SETPAGE",
                payload:data
            })
        }
    }
}

export default connect(mapStatetoProp,mapDispatchtoProps)(Topic16_2)