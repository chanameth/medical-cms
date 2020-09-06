
import React from 'react'
import Iframe from 'react-iframe'
import Grid, { GridSpacing } from '@material-ui/core/Grid';
class DashboardTopic16_2 extends React.Component {
    constructor(props) {
      super(props);
    } 
    render() {      
        return (
                <div>  
                       <Grid container justify="center">
                                 <h6> หน่วยงานที่ผ่านการรับรองระบบบริหารคุณภาพห้องปฏิบัติการทางการแพทย์ </h6>
                       </Grid>
                      
                       <Iframe url="https://prod-apsoutheast-a.online.tableau.com/t/demohealtcaredepartment/views/hospital__20200827/Dashboard_hospital?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:embed=true"
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
export default DashboardTopic16_2;