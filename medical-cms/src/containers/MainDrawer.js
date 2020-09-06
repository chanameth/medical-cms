import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MediaCard from './MediaCard'
import Grid, { GridSpacing } from '@material-ui/core/Grid';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginTop:50,
      textAlign: 'center'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function MainDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const titleCard = ['รายงานแสดงความสัมพันธ์ระหว่างปริมาณงานในการให้บริการตรวจวิเคราะห์กับบุคลากร',
                     'รายงานที่แสดงความสัมพันธ์ระหว่างงานบริการกับลูกค้า และผู้มีส่วนได้ส่วนเสีย',
                     'รายงานที่แสดงความสัมพันธ์ด้านงบประมาณ แหล่งที่มารายได้ และรายการเบิกจ่ายงบประมาณ',
                     'รายงานการวิเคราะห์แนวโน้มรายรับ-รายจ่ายในอนาคต',
                     'รายงานที่แสดงความสัมพันธ์ระหว่างสินทรัพย์ที่มีการบำรุงรักษาและการบริหารจัดการทรัพยากรภายในกรมวิทยาศาสตร์การแพทย์',
                     'รายงานเปรียบเทียบผลการดำเนินงานและผลการเบิกจ่ายงบประมาณแยกตามแหล่งเงินงบประมาณ',
                     'รายงานความก้าวหน้าตามคำรับรองการปฏิบัติราชการ',
                     'รายงานด้านความเสี่ยงในด้านการจัดซื้อจัดจ้าง และการใช้งบประมาณ',
                     'รายงานข้อมูลบุคคลากร สัดส่วนความต้องการบุคคลากรของหน่วยงาน แนวโน้มความต้องการบุคคลากรด้านคุณวุฒิ และการเกษียณอายุราชการ',
                     'รายงานการนำองค์ความรู้ นวัตกรรม และงานวิจัยของกรมฯ ไปใช้ประโยชน์ตามกลุ่มผู้ใช้งานประเภทงานวิจัย',
                     'รายงานที่แสดงถึงความต้องการ ความคาดหวังของลูกค้า ผู้มีส่วนได้ส่วนเสียทั้งข้อมูลในอดีตและ อนาคต',
                     'รายงานวิเคราะห์สถานการณ์การเกิดปัญหาเกี่ยวกับผลิตภัณฑ์สุขภาพของแต่ละพื้นที่ และช่วงเวลา',
                     'รายงาน ด้านชันสูตรสาธรณสุข (Model)',
                     'รายงาน ด้านคุ้มครองผู้บริโภค(model)',
                     'รายงาน ด้านคุณภาพห้องปฎิบัตการ',
                     'หน่วยงานที่ผ่านการรับรองระบบบริหารคุณภาพห้องปฏิบัติการทางการแพทย์'  
                    ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{position:"absolute",right:"10px"}}>    
                         <i className="material-icons noti" style={{"font-size":"12px"}} >notifications</i> |กรมวิทยาศาสตร์การแพทย์ กระทรวงสาธารณสุข      
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List  >
            <ListItem value="1" button   >
              <ListItemIcon> <i className="fa fa-area-chart" style={{ fontSize: '1.75em' }} /> </ListItemIcon>
              <ListItemText primary="DMSC Report" />
            </ListItem>
            <ListItem  value="2" button>
              <ListItemIcon>   <i className="fa fa-address-book" style={{ fontSize: '1.75em' }} /> </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem value="2"  button >
              <ListItemIcon>   <i className="fa fa-file-text-o" style={{ fontSize: '1.75em' }} /> </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
        </List> 
      </Drawer>
     
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <h1 style={{color: "#5a5c69",}}><b>DMSc Report</b></h1>
            <div className="row">
             <Grid container justify="center">
              {titleCard.map((value, index) => {
                  return <MediaCard  title={value} key={index} number={index}/>
              })}
              </Grid>
             </div>   
      </main>
     
    </div>
  );
}
