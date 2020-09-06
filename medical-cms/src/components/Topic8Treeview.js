/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import InputLabel from '@material-ui/core/InputLabel';
import { validateYear } from '../validators'
import axios from 'axios';
import { uuid } from 'uuidv4';
import { getPurchaseTime } from '../utils/functions'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const StyledTreeItem = withStyles({
    label: {
        fontSize: "20px",
        fontWeight: "fontWeightBold"
    },
})(TreeItem);

const useStyles = makeStyles((theme) => ({
    root: {
        height: 100,
        flexGrow: 2,
        maxWidth: 850,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "#424242",
        margin: 10,
        border: "2px solid #9e9e9e",
        borderRadius: 10,
    },
    paperdepart: {
        color: "#424242",
        margin: 10,
        fontSize: 18,
        fontWeight: "fontWeightBold",
        padding: 20
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalpaper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 6, 4),
        outline: 0,
        borderRadius: 5
    },
    button: {
        float: 'right',
        backgroundColor: "#33bfff",
        '&:hover': {
            backgroundColor: '#00e5ff',
            boxShadow: 'none',
        },
    },
    boxbutton: {
        padding: 10,
        marginBottom: 40,
    },
    modalbutton: {
        backgroundColor: "#00e676",
        margin: 10,
        '&:hover': {
            backgroundColor: '#76ff03',
            boxShadow: 'none',
        },
    },
    delete: {
        float: 'right',
        marginLeft: 10,
        backgroundColor: "#aeea00",
        '&:hover': {
            backgroundColor: '#c6ff00',
            boxShadow: 'none',
        },
    },
    deleteState1: {
        float: 'right',
        marginLeft: 10,
        backgroundColor: "#ffea00",
        '&:hover': {
            backgroundColor: '#ffff00',
            boxShadow: 'none',
        },
    },
    deleteState2: {
        float: 'right',
        marginLeft: 10,
        backgroundColor: "#ef9a9a",
        '&:hover': {
            backgroundColor: '#ffcdd2',
            boxShadow: 'none',
        },
    },
    topic: {
        fontSize: "20px",
        fontWeight: "fontWeightBold",
        display: "inline"
    },
    showCheckbox: {
        display: 'inline-block'
    },
    unshowCheckbox: {
        display: 'none'
    },
    confirmDel: {
        margin: 10
    },
    formControl: {
        minWidth: 180,
    },
}));

// ** test data ** //
/* var months = [1, "กุมภาพันธ์"];
var years = [383, "2562"];
var departs = ["โรงพยาบาลพะเยา", "หน่วยงานสถาบันวิจัยวิทยาศาสตร์สาธารณสุข"];

 var totalList = years.map((value) => {
    return { [value]: months.map((value) => { return { [value]: departs.map((value) => { return value }) } }) };
}); 
 */

// ** //

export default function Topic8(props) {
      useEffect(() => {
        getData()
    }, []);

    // test
    const getData = async () => { await axios(
            'http://localhost:8080/api/topic/topic8Reference/queryMany',
        ).then(function(response){
            console.info(response.data.data)
            props.setAllData(response.data.data,true,true)
        }).catch(function(err){
            window.alert(err)
        })
        
    };  
    
    var list_months = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฏาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันาคม"]
    
     let data = props.topic8treeview
    /*  console.info(props.topic8treeview)*/
    /*  console.info(data) */
    console.info(data)
     if(data.comeback == true && data.data.length != 0)
     {
         if(data.data[0].month != null)
         {
             data.data.sort((a, b) => (a.purchase_time.substring(5,7) - b.purchase_time.substring(5,7)))
                                  data.data.sort((a, b) => (a.year-b.year))
        }
     }

        var totalList = Array.from(new Set(data.data.map(value => value.year))).map(year => {
            return {
                [year]: Array.from(new Set(data.data.filter(value => value.year == year).map(value => value.month))).map((month) => {
                    return {
                        [month]: Array.from(new Set(data.data.filter(value => value.year == year && value.month == month).map(value => value.department)))
                    }
                })
            }
        });
    console.info(totalList)
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [checkState, setCheckState] = useState(false);
    const [checkModal, setCheckModal] = useState(false);
    const [cancelDel, setCancelDel] = useState(false);
    const [checkYear, setCheckYear] = useState("");
    const [checkMonth, setCheckMonth] = useState("");
    const [addTopic, setAddTopic] = useState("");
    const [appendTopic, setAppendTopic] = useState("");
    const [delState, setDelstate] = useState(0);
    const [delColor, setDelcolor] = useState(classes.delete);
    const [editDepartment , setEditDepartment] = useState("");
    /* const [dataTreeview, setDataTreeview] = useState([{}]); */
   /*  const [hook , setHook] = useState("") */
   

    const addYear = async(newData) => {
                 newData = {...newData,id:"0",uuid:uuid()} 
                  await axios.post('http://localhost:8080/api/topic/topic8Reference/create', {
                 dataCreate: newData
            })
            await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne',{
                where:{year:newData.year}
            }).then(function(response){
                let data = response.data.data
                props.addData(data[0])
            }).catch(function(err){
                window.alert(err)
            })
           
            
        }


    const addMonth = async(newData) => {  
            try{
                var response = await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne',{
                        where:{year:newData.year}
                    })
                }
            catch(err){
                window.alert(err+"can not find data")
            }
            let data = response.data.data
            let purchase_time = getPurchaseTime(newData.year,newData.month)
            newData = {...newData,purchase_time:purchase_time.format("YYYY-MM-DD")}
                if(data[0].month==null){

                    try{
                            await axios.post('http://localhost:8080/api/topic/topic8Reference/updateOne', {
                            dataUpdate:newData,
                            where: {uuid:data[0].uuid}
                        })
                       }
                    catch(err){
                        window.alert(err+"update data fail")
                     }
                     window.alert("update Succes")

                     try{
                              const queryData = await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne',{
                                                            where:{year:newData.year,month:newData.month}
                                    })
                                        let setdata = queryData.data.data
                                        /* console.info(setdata) */
                                        props.updateData(setdata[0])
                        }
                    catch(err){
                        window.alert(err)
                    }
                }

                else{
                    try{
                        newData={...newData,id:data[data.length-1].id+1,uuid:uuid()}
                            await axios.post('http://localhost:8080/api/topic/topic8Reference/create', {
                            dataCreate: newData
                        })
                     }
                    catch(err){
                        window.alert(err+"fail to create data")
                    }
                        window.alert("Create Success")
                    try{
                        const queryData = await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne',{
                            where:{year:newData.year,month:newData.month}
                                })
                                    let setdata = queryData.data.data
                                   /*  console.info(setdata) */
                                    props.addData(setdata[0])
                                
                        }
                    catch(err){
                        window.alert(err)
                    }
            }
    }

    const addDepartment = async(newData) => {   
            try{
                var response = await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne',{
                    where:{year:newData.year,month:newData.month}
                })
            }catch(err){
                window.alert(err+"can not find data")
            }
            let data = response.data.data
            if(data[0].department==null){
                    try{
                           await axios.post('http://localhost:8080/api/topic/topic8Reference/updateOne', {
                            dataUpdate:newData,
                            where: {uuid:data[0].uuid}
                         })
                        }catch(err){
                            window.alert(err+"update data fail")
                          }
                        window.alert("update Succes")

                    try{
                       const queryData =  await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne',{
                        where:{year:newData.year,month:newData.month,department:newData.department}
                            })
                                let setdata = queryData.data.data
                                console.info(setdata)
                                props.updateData(setdata[0])
                    
                    }catch(err){
                        window.alert(err+"can not find data after update")
                    }
                }
                else{

                    try{
                        let purchase_time = getPurchaseTime(newData.year,newData.month)
                        newData={...newData,id:data[data.length-1].id+1,uuid:uuid(),purchase_time:purchase_time.format("YYYY-MM-DD")}
                            await axios.post('http://localhost:8080/api/topic/topic8Reference/create', {
                            dataCreate: newData
                        })
                    }catch(err){
                        window.alert(err+"fail to create data")
                    }
                        window.alert("Create Success")

                    try{
                        const queryData = await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne',{
                        where:{year:newData.year,month:newData.month,department:newData.department}
                            })
                                let setdata = queryData.data.data
                                props.addData(setdata[0])
                            
                    }catch(err){
                        window.alert(err)
                    }     
        }
    }



    const removeDeparts = async(newData) => {
                                try{
                                var response = await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne', {
                                where: {year:newData.year,month:newData.month}
                                })
                                }catch(err){
                                    window.alert(err+"can not find data")
                                }
                                let data = response.data.data
                                if(data.length <= 1)
                                {
                                    try{
                                        newData = {...newData,department:null,uuid:data[0].uuid}
                                        await axios.post('http://localhost:8080/api/topic/topic8Reference/updateOne', {
                                        dataUpdate:newData,
                                        where: {uuid:data[0].uuid}
                                    })
                                    }catch(err){
                                        window.alert(err+"update data fail")
                                    }
                                    props.updateData(newData)
                                    window.alert("update Success")
                                }
                                else
                                {
                                    try{
                                        await axios.post('http://localhost:8080/api/topic/topic8Reference/deleteOne', {
                                        where: {year:newData.year,month:newData.month,department:newData.department}
                                    })
                                    }catch(err){
                                        window.alert(err+"delete data fail")
                                    }
                                    props.deleteDepartment(newData)
                                    window.alert("delete success")
                                }
                                 
            }

     const removeMonths = async(newData) => { 
        axios.post('http://localhost:8080/api/topic/topic8Reference/deleteMany', {
          where: {year:newData.year,month:newData.remove_months}
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (err) {
          window.alert(err)
        });
      }

      const removeYears = async(newData) => {
         axios.post('http://localhost:8080/api/topic/topic8Reference/deleteMany', {
          where: {year:newData}
        })
      }
    
      const importExcel = async(event,year,month,department_name) =>{
          const dataImport = new FormData()
          dataImport.append('files',event.target.files[0])
          const result = await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne',{where:{year:year,month:month,department:department_name}})
        let data = result.data.data
        axios.post('http://localhost:8080/api/topic8/importExcel?year='+`${encodeURIComponent(year)}&month=${encodeURIComponent(month)}&department_name=${encodeURIComponent(department_name)}&uuid=${encodeURIComponent(data[0].uuid)}`,dataImport
        ).then(function(response){
          window.alert(response)
      }).catch(function(err){
          window.alert(err)
      })
      }
      const EditDepartment = async(year,month,editdepart,department) =>{
        try{
            var response = await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne', {
                where: {year:year,month:month,department:department}
                })
            }
        catch(err){
            window.alert("can not find data")
        }
            let data = response.data.data
        try{
                await axios.post('http://localhost:8080/api/topic/topic8Reference/updateOne', {
                    dataUpdate:{department:editdepart},
                    where: {uuid:data[0].uuid}
                    })
                }
            catch(err){
                window.alert("Update Fail")
            }
        try{
            var returnQuery = await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne', {
                    where: {year:year,month:month,department:editdepart}
                    })
        }
        catch(err){
            console.info(err)
        }
        data = returnQuery.data.data
        if(data[0]){
            window.alert("Update Department_Name Success")
            props.updateData(data[0])
        }
      }



    var [check, setCheck] = useState([]);
    var nodeId = 0;

    const Edit = (event) =>{
        console.info(event.target.value)
        setEditDepartment(event.target.value)
    }


    const handleOpen = (topic, addYear, addMonth) => {
        setOpen(true);
        if (topic) {
            setAddTopic(topic);
            setCheckModal(false);
        }
        if (addYear) {
            console.log(addYear);
            setCheckYear(addYear);
        }
        if (addMonth) {
            console.log(addMonth);
            setCheckMonth(addMonth);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setAppendTopic(event.target.value);
    };

    const handleCheckbox = (event, checkYear, checkMonth, checkDepart) => {
        if (!checkDepart) {
            ticked(checkYear, checkMonth);
        }
       
        setCheck({ ...check, [event.target.name]: event.target.checked });
        if (Object.keys(check).length >= 0) {
            setDelcolor(classes.deleteState2);
            setDelstate(2);
        }
        
        checkStateDel(event.target.name, event.target.target);
    };

    const checkStateDel = (name, tick) => {
        let checkIt = 0;
        Object.values(check).map((value) => { return value ? checkIt++ : checkIt });
        if (checkIt == 1 && check[name] == !tick) {
            setDelstate(1);
            setCheckbox();
            setCancelDel(true);
            setDelcolor(classes.deleteState1);
        }
        else {
            setCancelDel(false);
        }
    }
    const setCheckbox = () => {
        let list = [];
        let checkbox = [];
        list = totalList.map((value) => { return value });
        list.map((value) => {
            checkbox = { ...checkbox, [Object.keys(value)]: false };
            Object.values(value)[0].map((month) => {
                checkbox = { ...checkbox, [Object.keys(value) + Object.keys(month)]: false };
                Object.values(month).map((months) => {
                    months.map((depart) => {
                        checkbox = { ...checkbox, [Object.keys(value) + Object.keys(month) + depart]: false };
                    })
                });
            });
        });
        setCheck(checkbox);
    }

    const ticked = (checkYear, checkMonth) => {
        let filterCheckbox = {};
        let list = [];
        let month = [];
        let name = '';
        filterCheckbox = totalList.map((value) => { return value });
        filterCheckbox = filterCheckbox.filter((data) => Object.keys(data)[0] == checkYear)[0];
        if (!checkMonth) {
            list = Object.values(filterCheckbox)[0].map((value) => { return value });
            list.map((month) => {
                name = checkYear + Object.keys(month);
                check = { ...check, [name]: !check[checkYear] ? true : false };
                Object.values(month).map((data) => {
                    data.map((depart) => {
                        name = checkYear + Object.keys(month)[0] + depart;
                       
                        check = { ...check, [name]: !check[checkYear] ? true : false };
                        
                    })
                })
            });
        }
        else {
            month = Object.values(filterCheckbox)[0];
            month.map((value) => { return (Object.keys(value)) });
            list = month.filter((data) => Object.keys(data)[0] == checkMonth);
            list.map((month) => {
                Object.values(month)[0].map((depart) => {
                    name = checkYear + Object.keys(month) + depart;
                    check = { ...check, [name]: !check[checkYear + checkMonth] ? true : false };
                });
            });
        }
    };
    // test delete treeview
    const deleteData = () => {
        let data_years = [],data_months = [],data_departs = [];
        totalList.map((year, index_year) => {
            if (check[Object.keys(year)]) {
                data_years.push(index_year);
            }
            else {
                Object.values(year)[0].map((month, index_month) => {
                    if (check[Object.keys(year) + Object.keys(month)]) {
                        data_months = [...data_months,{[Object.keys(year)]:[index_year,Object.keys(month),index_month]}];
                    }
                    else {
                        Object.values(month)[0].map((depart, index_depart) => {
                            if (check[Object.keys(year) + Object.keys(month) + depart]) {
                                data_departs = [...data_departs,{[Object.keys(year)]:[index_year,Object.keys(month),index_month,depart,index_depart]}];
                            }
                        });
                    }
                 });
            }
        });
        data_years.map((year,index) => {
              let remove_years = Object.keys(totalList[year])[0]
              console.info(remove_years)
                 removeYears(remove_years)
                 props.deleteYear(parseInt(remove_years))
        });
        data_months.map((month,index) => {
            console.info(month)
            let index_year = Object.values(month)[0][0];
            let Object_year = Object.keys(month)[0];
            let index_month = Object.values(month)[0][2];
            console.info(totalList[index_year][Object_year])
            let remove_months = Object.keys(totalList[index_year][Object_year][index_month])[0]
            let year = parseInt(Object_year)
            removeMonths({year,remove_months})
            props.deleteMonth({year,remove_months})
           /*  iteration[Object_year]++; */
        });
        data_departs.map((depart,index) => {
            let Object_month = Object.values(depart)[0][1];
            let Object_year = Object.keys(depart)[0];
            let index_year = Object.values(depart)[0][0];
            let index_month = Object.values(depart)[0][2];
            let index_depart = Object.values(depart)[0][4];
            let remove_depart = totalList[index_year][Object_year][index_month][Object_month][index_depart]
            var month = Object_month[index]
            let year = parseInt(Object_year)
            let department = remove_depart
             removeDeparts({year,month,department})
            /* totalList[index_year][Object_year][index_month][Object_month].splice(index_depart-iteration[Object_year+Object_month],1); */
             
              /* iteration[Object_year+Object_month]++;  */
    
        });
    };

    const deleteConfirm = (acceptDelete) => {
        if (acceptDelete) {
            deleteData();
        }
        setCheck({});
        setDelcolor(classes.delete);
        setCheckState(false);
        setDelstate(0);
        handleClose();
    };

    const delList = () => {
        // eslint-disable-next-line default-case
        switch (delState) {
            case 0:
                setDelstate(1);
                setCancelDel(true);
                setCheckbox();
                setCheckState(true);
                setDelcolor(classes.deleteState1);
                break;

            case 1:
                if (cancelDel) {
                    
                    setCheck({});
                    setDelcolor(classes.delete);
                    setCheckState(false);
                    setDelstate(0);
                    setCancelDel(false);
                }
                break;

            case 2:
                
                setCancelDel(false);
                setCheckModal(true);
                handleOpen();
                break;
        }
    };
    // test add treeview topic
    const confirmAddTopic = (topic) => {
        let addTopic = {};
        var define_value = false
        var year
        var month
        var department
        if (appendTopic != "") {
            // eslint-disable-next-line default-case
            switch (topic) {
                case "เพิ่มปีงบประมาณ":
                    let validYear = validateYear(appendTopic)
                    if(validYear.status){
                    addTopic = { [appendTopic]: [] };
                    year = parseInt(appendTopic)
                    totalList.map((value) =>{
                        if(Object.keys(value)[0]==year){
                            define_value = true
                        } 
                    })
                    if(define_value != true)
                    {
                    addYear({year})
                    totalList = [...totalList,addTopic]
                    }
                    else
                    {
                        window.alert(year+" : this value have already exists")
                    }
                    }
                    else
                    {
                        window.alert(validYear.massage)
                    }
                    break;
                case "เพิ่มเดือน":
                    year = parseInt(checkYear)
                    month = appendTopic
                   
                    var months = [];
                    addTopic = (totalList).filter((data) => Object.keys(data) == checkYear);
                    months = Object.values(addTopic[0]);
                    months = months[0];
                    months = [...months, { [appendTopic]: [] }];
                    let years = { [checkYear]: months };
                    var newData = [];
                    newData = totalList.map((value) => {
                        return Object.keys(value) == checkYear ? years : value;
                    });
                     totalList.map((value,index) =>{ 
                        Object.values(value).map((month_loop,index_2) =>{
                       
                        if(month_loop.length > 0 )
                        {
                            console.info(month_loop)
                            console.info(month_loop.length)
                            if(Object.keys(value)[index] == year && Object.keys(Object.values(month_loop)[index_2])[index_2]== month)
                            {
                                console.info(Object.keys(value)[index]+Object.keys(Object.values(month_loop)[index_2])[index_2])
                                define_value = true
                            }
                        }
                        }) 
                        
                    }) 
                    if(define_value != true)
                    {
                   /*  setDataTreeview(newData); */
                    addMonth({year,month})
                    }
                    else
                    {
                        window.alert(year+" "+month+" : this value have already exists")
                    }
                   
                    break;
                case "เพิ่มหน่วยงาน":
                    months = [];
                    let copyMonths = [];
                    newData = [];
                    let depart = [];
                    addTopic = (totalList).filter((data) => Object.keys(data) == checkYear);
                    copyMonths = Object.values(addTopic[0]);
                    months = copyMonths[0].filter((data) => Object.keys(data) == checkMonth);
                    depart = Object.values(months)[0];
                    depart = Object.values(depart);
             
                    depart = depart[0].concat(appendTopic);
                    months = { [checkMonth]: depart };
                    copyMonths = copyMonths[0];
                    console.log(Object.keys(Object.values(addTopic)[0])[0])
                    copyMonths = copyMonths.map((value) => {
                        return Object.keys(value) == checkMonth ? months : value;
                    });
                    newData = totalList.map((value) => {
                        return Object.keys(value) == checkYear ? { [checkYear]: copyMonths } : value;
                    });
                    year = parseInt(checkYear)
                    month = checkMonth
                    department = appendTopic
                    totalList.map((value) =>{ 
                        Object.values(value).map((year_loop)=>{
                            Object.values(year_loop).map((month_loop)=>{
                                Object.values(month_loop).map((department_loop) =>{
                                    Object.values(department_loop).map((data)=>{
                                        if(data == department && Object.keys(month_loop)[0]==month && Object.keys(value)[0]==year){
                                            console.info(Object.keys(month_loop)[0])
                                            define_value = true
                                        }
                                    })
                                })
                            })
                        })
                    }) 
                    if(define_value != true)
                    {
                   addDepartment({year,month,department})
                    }
                    else
                    {
                        window.alert(year+" "+month+" "+department+" "+" : this value have already exists")
                    }
                    break;
            }
            handleClose();
            setAppendTopic("");
        }
    };

    const addButton = (buttonTopic, addYear, addMonth) => {
        return (
            <Button
                variant="contained"
                color="inherit"
                className={classes.button}
                startIcon={<AddCircleOutlinedIcon />}
                onClick={() => handleOpen(buttonTopic, addYear, addMonth)}
            >
                {buttonTopic}
            </Button>
        );
    };

    const checkbox = (value, checkYear, checkMonth, checkDepart) => {
        let nameCheck = "";
        if (checkYear) {
            nameCheck += value;
        }
        if (checkMonth) {
            nameCheck = checkYear + checkMonth;
        }
        if (checkDepart) {
            nameCheck = checkYear + checkMonth + checkDepart;
        }
        let checktick = check[nameCheck] ? true : false;
        /* console.info(check[nameCheck]+"check"+"nameCheck:"+nameCheck) */
        return (
            <div className={classes.topic}>
                
                <Checkbox
                    checked={checktick}
                    onChange={(event) => handleCheckbox(event, checkYear, checkMonth, checkDepart)} 
                    name={nameCheck}
                    className={checkState ? classes.showCheckbox : classes.unshowCheckbox}
                />
                {/* {console.info(checkDepart)} */}
                {checkDepart ? null : value}
            </div>
        );
    };

    const departsList = (months, checkYear) => Object.values(months).map((value) => value.map((departs) => {
        return (
            departs!=null?
            <div className={classes.paperdepart}>
                <span style={{ float: "left", fontSize: "15px" }}>
                    {checkbox(departs, checkYear, Object.keys(months), departs)}
                    <Tooltip title="Edit by row" placement="bottom">
                    <IconButton color="primary" onClick={() => (props.setPageAndStateData(3,Object.values(checkYear)[0],Object.keys(months)[0],departs))}>
                        <ListIcon />
                    </IconButton>
                    </Tooltip>
                    {departs}
                </span>
                <span style={{ float: "right" }}>
                    <Popup 
                            trigger={<Button
                            color="primary"
                            component="label"
                            title="Edit by row"
                            >
                           <EditOutlinedIcon />
                    </Button>} position="right center">
                        <div>
                            <input
                                style={{width:"65%"}}
                                type="text"
                                placeholder={departs}
                                onChange={Edit} 
                            />
                            <Button
                                color="primary"
                                component="label"
                                 onClick={()=> EditDepartment(Object.values(checkYear)[0],Object.keys(months)[0],editDepartment,departs)}
                                >
                               <DoneOutlineRoundedIcon style={{width:"20px"}}/>
                             </Button>
                        </div>
                    </Popup>
                <Tooltip title="import">
                    <Button
                            color="primary"
                            component="label"
                            >
                            <SaveAltIcon/> 
                            <input
                                type="file"
                                style={{ display: "none" }}
                                 onChange={(event)=>importExcel(event,Object.values(checkYear)[0],Object.keys(months)[0],departs)} 
                            />
                    </Button>
                 </Tooltip>
                    <Tooltip title="Export" placement="bottom">
                        <IconButton color="primary">
                            <ImportExportIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Add" placement="right" style={{ color: "#3d5afe", marginLeft: "1.5em" }}>
                        <AddBoxOutlinedIcon />
                    </Tooltip>
                </span>
            </div>:''
        )
    }));
    if(props.topic8treeview.comeback === true)
    {
        props.topic8treeview.comeback = false
      /*   setDataTreeview(totalList); */
        /* console.info(dataTreeview) */
       
    }
    const Lists = totalList.map((years,index) => {  
        return (
            <Grid item xs={40}>
                <Paper className={classes.paper}>
                    {checkbox(Object.keys(years), Object.keys(years))}
                    <StyledTreeItem nodeId={nodeId++}>
                       
                        <div className={classes.boxbutton}>
                           {/*  {console.info(Object.keys(years)[0])} */}
                            {addButton("เพิ่มเดือน", Object.keys(years)[0])}
                        </div>
                        {(Object.values(years)).map((value) => value.map((months) => {
                            return (
                                Object.keys(months)[0]!="null"?
                                <Grid item xs={40}>
                                    <Paper className={classes.paper}>
                                        
                                        {checkbox(Object.keys(months), Object.keys(years), Object.keys(months))}
                                        <StyledTreeItem nodeId={nodeId++}>
                                          
                                            <div className={classes.boxbutton}>
                                                {addButton("เพิ่มหน่วยงาน", Object.keys(years)[0], Object.keys(months)[0])}
                                            </div>

                                            {departsList(months, Object.keys(years))}

                                        </StyledTreeItem>
                                    </Paper>
                                </Grid>
                                :''
                            )
                        }))}
                    </StyledTreeItem>
                </Paper>
            </Grid>
        )
    });

    const treeview = () => {
        return (
            <div>
                <Button
                    variant="contained"
                    color="inherit"
                    className={delColor}
                    startIcon={<RemoveCircleIcon />}
                    onClick={delList}
                >
                    {cancelDel ? <span>ยกเลิก</span> : <span>ลบรายการ</span>}
                </Button>
                {addButton("เพิ่มปีงบประมาณ")}
                <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    {Lists}
                </TreeView>
            </div>
        )
    }

    const textfield = () => {
        if (addTopic === "เพิ่มเดือน") {
            return (
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">{addTopic}</InputLabel>
                    <Select
                        native
                        onChange={handleChange}
                        label={addTopic}
                    >
                        <option aria-label="None" value="" />
                        {list_months.map((value) => {
                            return <option value={value}>{value}</option>
                        })};
                    </Select>
                </FormControl>
            );
        }
        else {
            return (<TextField id="outlined-basic" label={addTopic} variant="outlined" onChange={handleChange} />)
        }
    };

    const openModal = () => {
        if (checkModal) {
            return ModalDel;
        }
        else {
            return ModalPaper;
        }
    };

    const ModalPaper = (
        <Fade in={open}>
            <div className={classes.modalpaper}>
                {textfield()}
                <Button
                    variant="contained"
                    color="inherit"
                    className={classes.modalbutton}
                    startIcon={<AddCircleOutlinedIcon />}
                    onClick={() => confirmAddTopic(addTopic)}
                >
                    เพิ่ม
                </Button>
            </div>
        </Fade>
    );

    const ModalDel = (
        <Fade in={open}>
            <div className={classes.modalpaper}>
                <center>
                    <h4>ยืนยันการลบรายการ</h4>
                    <Button
                        variant="contained"
                        color="secondary" s
                        startIcon={<CheckCircleIcon />}
                        className={classes.confirmDel}
                        onClick={() => deleteConfirm(true)}
                    >
                        ตกลง
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<CancelIcon />}
                        className={classes.confirmDel}
                        onClick={() => deleteConfirm(false)}
                    >
                        ยกเลิก
                    </Button>
                </center>

            </div>
        </Fade>
    );

    const ModalBody = (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            {openModal()}
        </Modal>
    );

    return (
        <div>
            <center>{treeview()}</center>
            {ModalBody}
        </div>
    );
}
