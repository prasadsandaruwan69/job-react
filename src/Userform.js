import { Button, Grid, Input, Typography } from "@mui/material";


const Userform = (props) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#ffff",
        marginBottom: "20px",
        disply: "block",
      }}
    >
      <Grid>
        <Typography component={"h1"} xs={{ color: "#0000" }}>
          User form
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ disply: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          xs={{
            color: "#0000",
            width: "100px",
            disply: "block",
            marginRight: "20px",
            fontSize: "16px",
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          value={""}
          sx={{ width: "" }}
          name="id"
          id="id"
          onChange={(e) => {}}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ disply: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          xs={{
            color: "#0000",
            width: "100px",
            disply: "block",
            marginRight: "20px",
            fontSize: "16px",
          }}
        >
          ID
        </Typography>
        <Input
          type="text"
          value={""}
          sx={{ width: "" }}
          name="name"
          id="name"
          onChange={(e) => {}}
        />
      </Grid>
      <Button
        sx={{
          color: "#00c6e6",
          width: "400px",
          margin: "auto",
          "&:hover": {
            opacity: "0.7",
            color: "#00c6e6",
          },
        }}
      >
        Add
      </Button>
    </Grid>
  );
};
export default Userform;
