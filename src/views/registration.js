import RegisterUser from "../registration/RegisterUser";
import HeaderRegister from "../registration/HeaderRegister";
import InformationRegister from "../registration/InformationRegister";
import SignupTitle from "../registration/SignupTitle";
import FooterRegister from "../registration/FooterRegister";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Registration() {
  const stylesBox = {
    marginTop: "68px",
  }
  return (
    <React.Fragment>
      <HeaderRegister />
      <Box style={stylesBox}>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <InformationRegister />
        </Grid>
      </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={5}>
            <SignupTitle />
          </Grid>
          <Grid item xs={5}>
            <RegisterUser />
          </Grid>
        </Grid>
      </Box>
      <FooterRegister/>
    </React.Fragment>
  );
}

export default Registration;
