import { connect } from 'react-redux'

import Topic8Treeview from '../components/Topic8Treeview'

const mapStatetoProp = (state)=>{
    return { 
        topic8treeview:state.topic8treeview
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return {
        setAllData:(data,comeback,setDataSuccess)=>{
            dispatch({
                type:"ADDALL",
                payload:data,
                comeback:comeback,
                setDataSuccess:setDataSuccess
            })
        },
        addData:(data)=>{
            dispatch({
                type:"ADDONE",
                payload:data
            })
        },
        updateData:(data)=>{
            dispatch({
                type:"UPDATEDATA",
                payload:data
            })
        },
        deleteData:(data)=>{
            dispatch({
                type:"DELETE",
                payload:data
            })
        },
        deleteYear:(data)=>{
            dispatch({
                type:"DELETEYEAR",
                payload:data
            })
        },
        deleteMonth:(data)=>{
            dispatch({
                type:"DELETEMONTH",
                payload:data
            })
        },
        deleteDepartment:(data)=>{
            dispatch({
                type:"DELETEDEPARTMENT",
                payload:data
            })
        }
    }
}

export default connect(mapStatetoProp,mapDispatchtoProps)(Topic8Treeview)