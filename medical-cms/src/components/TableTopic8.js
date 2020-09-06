import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default function TableTopic8(props) {

    useEffect(() => {
        getData()
    }, []);

    // test
    const getData = async () => {
        await axios.post('http://localhost:8080/api/topic/topic8/queryOne', {
                where: {year:props.topic8.years,month:props.topic8.months,department_name:props.topic8.department_name}
            })
            .then(function (response) {
                console.info(response.data.data)
                props.setOneData(response.data.data)
              })
              .catch(function (error) {
                console.log(error);
              });
       
    };

    const updateData = async(newData) => {
         axios.post('http://localhost:8080/api/topic/topic8/updateOne', {
          dataUpdate:newData ,
          where: {id:newData.id,year:newData.year}
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    
    const addData = async(newData) => {
      console.info(props.topic8.years+props.topic8.months+props.topic8.department_name)
      try{
          var response = await axios.post('http://localhost:8080/api/topic/topic8Reference/queryOne',{
          where:{year:props.topic8.years,month:props.topic8.months,department:props.topic8.department_name}
        })
      }
      catch(err){
        window.alert("can not find data")
      }
        let data = response.data.data
        if(data[0].uuid)
        {
            newData ={...newData,uuid:data[0].uuid}
            console.info(newData)
            axios.post('http://localhost:8080/api/topic/topic8/create', {
            dataCreate:newData
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }

    const removeData = async(newData) => {
        axios.post('http://localhost:8080/api/topic/topic8/deleteOne', {
          where: {id:newData.id,year:newData.year,month:newData.month,department_name:newData.department_name}
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    
    // test
    console.info(props.topic8.years)
    const columns = [
        { title: 'ปี', field: 'year',editable:'onAdd',
        initialEditValue:props.topic8.years},
        { title: 'เดือน', field: 'month',editable:'onAdd',
        initialEditValue:props.topic8.months},
        {title: 'หน่วยงาน', field: 'department_name',editable:'onAdd',
        initialEditValue:props.topic8.department_name},
        { title: 'งานจัดซื้อหรือจัดจ้าง', field: 'source' },
        { title: 'วงเงินที่จะซื้อหรือจ้าง', field: 'source_budget' },
        { title: 'ราคากลาง', field: 'standard_price' },
        { title: 'วิธีซื้อหรือจ้าง', field: 'source_method' },
        { title: 'รายชื่อผู้เสนอราคา', field: 'name_proposal' },
        { title: 'ราคาที่เสนอ', field: 'proposed_price' },
        { title: 'ผู้ได้รับการคัดเลือก', field: 'selection' ,
        initialEditValue:props.topic8.selection},
        { title: 'ราคาที่ตกลงซื้อหรือจ้าง', field: 'final_price' },
        { title: 'เหตุผลที่คัดเลือกโดยสรุป', field: 'reason' },
        { title: 'เลขที่และวันที่ของสัญญาหรือข้อตกลงในการซื้อหรือจ้าง', field: 'no_date_contract' },
        { title: 'รหัสงบประมาณ', field: 'budget_code' },
        { title: 'รหัสแหล่งเงิน', field: 'resource_code' },
        { title: 'เลขที่โครงการ', field: 'project_no' },
        { title: 'เลขคุมสัญญา', field: 'contract_no' },
    ];
    
    return (
        <div>
        <MaterialTable
            title="Risk" // test
            columns={columns}
            data={props.topic8.data}
            options={{
                search: true,
                exportButton: true,
                pageSize: 10
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
                            if (oldData && oldData.id !== "null") {
                                updateData(newData)
                                props.updateData(newData)
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if(oldData.id !== "null"){
                                 removeData(oldData)
                                 props.deleteData(oldData)
                            }
                        }, 600);
                    }),
            }}
        />
        </div>
    );
}