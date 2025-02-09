import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = () => {
  const [id,setId] = useState(0);
  const [name,setName] = useState('');
  return (
    <Grid container sx={{ marginBottom: "20px", display: "block" }}>
      {/* Title */}
      <Grid item xs={12}>
        <Typography component="h1" sx={{ color: "#000" }}>
          User Form
        </Typography>
      </Grid>

      {/* ID Field */}
      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography
          component="label"
          htmlFor="id"
          sx={{ color: "#000", marginRight: "20px", fontSize: "16px", width: "100px" }}
        >
          ID
        </Typography>
        <input
          type="number"
          id="id"
          name="id"
          value={id}
          onChange={e=>setId(e.target.value)}
          style={{ width: "400px", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
      </Grid>

      {/* Name Field */}
      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography
          component="label"
          htmlFor="name"
          sx={{ color: "#000", marginRight: "20px", fontSize: "16px", width: "100px" }}
        >
          Name
        </Typography>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e=> setName(e.target.value)}
          style={{ width: "400px", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
      </Grid>

      {/* Submit Button */}
      <Button
        sx={{
          backgroundColor: "#00c6e6",
          color: "#fff",
          marginTop: "20px",
          padding: "10px 20px",
          "&:hover": {
            opacity: 0.7,
            backgroundColor: "#008bb5",
          },
        }}
      >
        Add
      </Button>
    </Grid>
  );
};

export default UserForm;
