import React from "react";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import loginImg from "../Assets/login.png";
import Topography from "@material-ui/core/Typography";
import { auth, provider } from "../Firebase/Firebase";

const useStyles = makeStyles((theme) => ({
  root: {
   
    boxShadow: "0 0 15px rgb(7 15 63 / 33%)",
    backgroundColor: "#171c30",
    color: "white",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    margin: "0 auto",
    textAlign:"center",
 
    
  },
  paper: {
   
     height: "50%",
     width: "50%",
     margin: "auto",
  
  },
  mainImg: {
    width: "80%",
    height: "auto",
    padding: "20px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#d9d9d9",
  },
}));

function SignUp() {
  const classes = useStyles();

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container component="div" maxWidth="sm" className={classes.root}>
      <div className={classes.paper}>
        
        <Topography variant="h4" style={{ paddingBottom: "15px" }}>
          ChatApp
        </Topography>
        <img src={loginImg} className={classes.mainImg} alt="signup img" />
        <Button
          variant="outlined"
          color="primary"
          className={classes.submit}
          startIcon={<FcGoogle />}
          onClick={login}
        >
          Sign In With Google
        </Button>
        <Topography style={{ paddingTop: "10px" }}>
        Made with ❤️ Shashi
        </Topography>
      </div>
    </Container>
  );
}

export default SignUp;
