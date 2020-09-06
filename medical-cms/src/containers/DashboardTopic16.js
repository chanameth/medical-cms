
import React from 'react'
import Iframe from 'react-iframe'
import Grid, { GridSpacing } from '@material-ui/core/Grid';
class DashboardTopic16 extends React.Component {
    constructor(props) {
      super(props);
    } 
    render() {      
        return (
                <div>  
                       <Grid container justify="center">
                                 <h6> หน่วยงานที่ผ่านการรับรองระบบบริหารคุณภาพห้องปฏิบัติการทางการแพทย์ </h6>
                       </Grid>
                      
                       <Iframe url="https://prod-apsoutheast-a.online.tableau.com/t/demohealtcaredepartment/views/lab__20200827/Dashboard_lab/ravipuj10@gmail.com/0f707225-4df1-47bb-bec8-31acf90125cb?:display_count=n&:showVizHome=n&:origin=viz_share_link&:embed=true"
                        width="100%"
                        height="700px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        />
                </div>
        );
    }

}
export default DashboardTopic16;