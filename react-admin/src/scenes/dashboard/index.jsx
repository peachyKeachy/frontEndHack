
import { Box } from "@mui/material";
import Header from "../../components/Header";
const Dashboard = () => {
    return(
        <Box m= "20px">
            <Box display ="flex" justifyContent="space-between" allignItems ="center">
                <Header title= "DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
        </Box>

    );
};

export default Dashboard;

// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import Header from "../../components/Header";
// import LineChart from "../../components/LineChart"; 

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

//         <Box>
//           <Button
//             sx={{
//               backgroundColor: colors.blueAccent[700],
//               color: colors.grey[100],
//               fontSize: "14px",
//               fontWeight: "bold",
//               padding: "10px 20px",
//             }}
//           >
//             <DownloadOutlinedIcon sx={{ mr: "10px" }} />
//             Download Reports
//           </Button>
//         </Box>
//       </Box>

//       {/* GRID & CHARTS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="140px"
//         gap="20px"
//       >
//         {/* ROW 1 */}
//         <Box
//           gridColumn="span 8"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//         >
//           <Box
//             mt="25px"
//             p="0 30px"
//             display="flex "
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Box>
//               <Typography
//                 variant="h5"
//                 fontWeight="600"
//                 color={colors.grey[100]}
//               >
//                 Revenue Generated
//               </Typography>
//               <Typography
//                 variant="h3"
//                 fontWeight="bold"
//                 color={colors.greenAccent[500]}
//               >
//                 $59,342.32
//               </Typography>
//             </Box>
//             <Box>
//               <IconButton>
//                 <DownloadOutlinedIcon
//                   sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
//                 />
//               </IconButton>
//             </Box>
//           </Box>
//           <Box height="250px" m="-20px 0 0 0">
//             <LineChart isDashboard={true} />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;
