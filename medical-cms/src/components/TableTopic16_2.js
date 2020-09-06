import React,{useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        padding: "4px"
      }
    },

    MuiTypography: {
      h6: {
        fontWeight: 'bolder !important',
        color: "#4267b2",
      }
    }
  }
});

export default function TableTopic16_2(props) {
  
  useEffect(() => {
      getData()
  }, []);

  const getData = async () => {
    const result = await axios(
      'http://rm2drr.org/api/topic/topic16Hospital/query',
    );
    let map = await cleanData(result.data.data)
    props.setAllData(map)
  };

  const cleanData = async (result) => {
    result = result.map((value) => {
         if(value.approved_date )
         value.approved_date = value.approved_date.split("T")[0]
         
         if(value.surveillance_due_date)
         value.surveillance_due_date = value.surveillance_due_date.split("T")[0]
         
         if(value.certification_deadline_date)
         value.certification_deadline_date = value.certification_deadline_date.split("T")[0]
         
         return value
   });
   return result
}

  const updateData = async(newData) => {
    axios.put('http://rm2drr.org/api/topic/topic16Hospital/updateOne', {
      dataUpdate:newData ,
      where: {id:newData.id}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const removeData = async(newData) => {
    axios.delete('http://rm2drr.org/api/topic/topic16Hospital/deleteOne', {
      where: {id:newData.id}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const addData = async(newData) => {
    axios.post('http://rm2drr.org/api/topic/topic16Hospital/create', {
      dataCreate:newData
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  

  const columns = [
    { title: 'ID', field: 'id' ,editable:'onAdd', 
    initialEditValue: props.topic16_2.data.length > 0 ?props.topic16_2.data[props.topic16_2.data.length-1].id+1:""},
    { title: 'รหัส 5 หลัก', field: 'code_id'},
    { title: 'เขต', field: 'district_id'},
    { title: 'ศวก.', field: 'hub_id'},
    { title: 'โรงพยาบาล', field: 'hospital_name'},
    { title: 'จังหวัด', field: 'province_name'}, 
    { title: 'สถานะ', field: 'status'},
    { title:'เลขทะเบียน (ใหม่)' ,field:'registration_number_new'}, 
    { title:'เลขทะเบียน (เก่า)' ,field:'registration_number_old'},
    { title:'วันที่ผ่านการรับรอง' ,field:'approved_date',},
    { title:'วันครบกำหนดเฝ้าระวัง' ,field:'surveillance_due_date'},
    { title:'วันครบกำหนดรับรอง' ,field:'certification_deadline_date'},
    { title:'ละติจูด' ,field:'latitude'},
    { title:'ลองจิจูด' ,field:'longitude'} 
  ]
  


  return (
    <MuiThemeProvider theme={theme}>
    <TableContainer component={Paper} style={{ maxWidth: 1450 }} >
    <MaterialTable
      title="Hostpital Information"
      columns={columns}
      data={props.topic16_2.data}
      options={{
        search: true,
        exportButton: false,
        pageSize:10,
        headerStyle: {backgroundColor: '#F0F8FF', color: 'black' }
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              addData(newData)
              props.addOne(newData)
            
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                console.log(newData)
                props.updateData(newData)
                updateData(newData)
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              props.deleteData(oldData)
              removeData(oldData)
            }, 600);
          }),
      }}
    />
    </TableContainer>
    </MuiThemeProvider>
  );
}
