import { connect } from 'react-redux'

import TableTopic16_1 from '../components/TableTopic16_1'

const mapStatetoProp = (state)=>{
    return { 
        topic16_1:state.topic16_1
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return {
        setAllData:(data)=>{
            dispatch({
                type:"ADDALL",
                payload:data
            })
        },
        updateData:(data)=>{
            dispatch({
                type:"UPDATE",
                payload:data
            })
        },
        addOne:(data)=>{
            dispatch({
                type:"ADDONE",
                payload:data
            })
        },
        deleteData:(data)=>{
            dispatch({
                type:"DELETEDATA",
                payload:data
            })
        }
    }
}

export default connect(mapStatetoProp,mapDispatchtoProps)(TableTopic16_1)