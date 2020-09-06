import { connect } from 'react-redux'

import Topic16_1 from '../components/Topic16_1'

const mapStatetoProp = (state)=>{
    return {
       topic16_1:state.topic16_1
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

export default connect(mapStatetoProp,mapDispatchtoProps)(Topic16_1)