import React from 'react' 
import Navigation from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles, fade} from '@material-ui/core/styles'
import { height } from '@material-ui/system'
import Typography from '@material-ui/core/Typography'
import IconButton  from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CreateIcon from '@material-ui/icons/Create';
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search';

const styles = makeStyles(theme=>({
grow:{
    flexGrow: '1',
},
signIcon:{
marginRight:theme.spacing(2),
},
searchBox:{
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
},
iconSearch:{
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
inputInput:{
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
},
navButton:{
    '& IconButton':{
        borderColor:theme.palette.secondary,
        borderThickness:'medium',

    },
},
})
)

const Nav =()=>{
const classes = styles();
    return(
   <Navigation position ="fixed" className={classes.grow}>
       <Toolbar>
       <IconButton className={classes.signIcon} edge ="start"></IconButton>
            <Typography variant="h6" noWrap>ONCEDOM</Typography>
            <div className={classes.grow}></div>
            <div className={classes.searchBox}>
                <div className={classes.iconSearch}> <SearchIcon /></div>
                <InputBase placeholder="Search…" 
                classes={{ root: classes.inputRoot,
                input: classes.inputInput,}} 
                inputProps={{ 'aria-label': 'search' }}/>
          </div>
            <div className={classes.navButton}>
            <IconButton color="secondary"><CreateIcon/></IconButton>
            <IconButton color="secondary"><MailIcon/></IconButton>
            <IconButton color="secondary"><NotificationsIcon/></IconButton>
            <IconButton color="secondary" edge ="end">
            <Avatar src="/static/img/D6NihiWV4AEJ-dC.jpg"/>
            </IconButton>
           </div>
       </Toolbar>
   </Navigation>

)
};
export default Nav;

