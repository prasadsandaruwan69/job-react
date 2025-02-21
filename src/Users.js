import { Box } from "@mui/material";
import Userform from "./Userform";
import UserTable from "./UserTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://127.0.0.1:3001/api/users") // ✅ Fix: Added "http://"
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.response); // ✅ Ensure users are stored in state
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };
  

  return (
    <Box
      sx={{ width: "calc(100% - 100px)", margin: "auto", marginTop: "100px" }}
    >
      <Userform />
      <UserTable rows={users} />
    </Box>
  );
};
export default Users;
