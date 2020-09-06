import { connect } from 'react-redux'

import TableTopic16_2 from '../components/TableTopic16_2'

const mapStatetoProp = (state)=>{
    return { 
        topic16_2:state.topic16_2
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

export default connect(mapStatetoProp,mapDispatchtoProps)(TableTopic16_2)