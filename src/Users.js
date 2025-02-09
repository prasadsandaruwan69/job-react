import { Box } from "@mui/material";
import Userform from "./Userform";
import UserTable from "./UserTable";

const users =[

    {
        id:1,
        name:"prasad",
    },
    {
        id:2,
        name:'prasd',
    }
]
const  Users = () =>{
return(
    <Box sx={{width:'calc(100% - 100px)',margin:'auto' , marginTop:'100px'}}>
          <Userform />
          <UserTable rows={users} />
    </Box>
  
);
}
export default Users;