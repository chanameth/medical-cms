
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
                                 <h6> รายงานด้านความเสี่ยงในด้านการจัดซื้อจัดจ้าง และการใช้งบประมาณ</h6>
                       </Grid>
                      
                       <Iframe url="https://prod-apsoutheast-a.online.tableau.com/t/dmcdev/views/hospital_map/Dashboard_lab?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:embed=true"
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