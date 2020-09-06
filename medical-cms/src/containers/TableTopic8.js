import { connect } from 'react-redux'

import TableTopic8 from '../components/TableTopic8'

const mapStatetoProp = (state)=>{
    return { 
        topic8:state.topic8
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
        setOneData:(data)=>{
            dispatch({
                type:"QUERYONE",
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

export default connect(mapStatetoProp,mapDispatchtoProps)(TableTopic8)