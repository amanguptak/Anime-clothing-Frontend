import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Profile from '@/components/Profile/Profile';
import EditProfile from '@/components/EditProfile/EditProfile';
import OrderList from '@/components/OrderList/OrderList';
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import {
  selectUser,
  clearError,
} from "@/features/userSlice";
import { useEffect } from 'react';
export default function MyAccount() {
  const [value, setValue] = React.useState('1');

  const user = useSelector(selectUser);
    const router = useRouter()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    useEffect(()=>{

    if(!user){
     setTimeout(() => {
       router.push("/login")
       toast('Please log in for access this feature',
       {
         icon: '😄',
         style: {
           borderRadius: '10px',
           background: '#333',
           color: '#fff',
         },
       }
     );
     }, "50");
    }
      
     },[])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" style={{background:"#2c3f50",}} >
            <Tab label="Profile" value="1" style={{color:"white"}} />
            <Tab label="Orders" value="2" style={{color:"white"}} />
            <Tab label="Edit Profile" value="3" style={{color:"white"}} />
          </TabList>
        </Box>
        <TabPanel value="1">   <Profile/></TabPanel>
        <TabPanel value="2">  <OrderList/></TabPanel>
        <TabPanel value="3"> <EditProfile setIndex={()=>setValue('1')}/></TabPanel>
      </TabContext>
    </Box>
  );
}

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
 
 
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// export default function MyAccount() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);
//   const user = useSelector(selectUser);
//   const router = useRouter()
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Box sx={{ bgcolor: 'background.paper' }}>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//           sx={{ bgcolor: '#2c3f50' }}
//         >
//           <Tab label="Profile" {...a11yProps(0)} />
//           <Tab label="Orders" {...a11yProps(1)} />
//           <Tab label="Edit Profile" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//         <Profile/>
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//      <OrderList/>
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//        
     
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//   );
// }