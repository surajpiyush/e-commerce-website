import React, { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./Slgn_img";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Home.css';
const Home = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpval;

    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    // } else if (date === "") {
    //   toast.error("date field is requred", {
    //     position: "top-center",
    //   });
    // } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/login");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
    }
  };

  return (
    < div  className="signupContainer">
      <div  className="container mt-3">
        <section className="d-flex justify-content-between">
          <div
            className="left_data mt-3 p-3"
            style={{ width: "100%", marginLeft: "100" }}
          >
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Name"
                  style={{color:"red", border:"5px solid rgb(126, 126, 158) ",width:"250px" ,height:"40px",borderRadius:"5px",marginTop:"10px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                   style={{color:"red", border:"5px solid rgb(126, 126, 158) ",width:"250px" ,height:"40px",borderRadius:"5px",marginTop:"10px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                {/* s */}
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                   style={{color:"red", border:"5px solid rgb(126, 126, 158) ",width:"250px" ,height:"40px",borderRadius:"5px",marginTop:"10px" }}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="sub-btn"
                onClick={addData}
                style={{ background: "white",height:"30px", width:"250px" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account{" "}
              <span >
                <NavLink style={{color:"white",textDecortion:"none"}} to="/login">SignIn</NavLink>
              </span>{" "}
            </p>
          </div>
          <SIgn_img />
        </section>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;
