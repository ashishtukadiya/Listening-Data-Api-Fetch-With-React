import React, { useEffect } from "react";
import IconService from "../../utils/Icon";
import { Button, Card, MenuItem, TextField, Typography } from "@mui/material";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/aboutus";
import Blog from "../Blog/blog";
import Footer from "../../components/Footer/footer";
import * as Yup from "yup";
import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { postFooterForm } from "../../Store/Reducer/contactslice";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  description: "",
  budget: "",
};

const Home = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    description: Yup.string().required("Role is required"),
    // budget: Yup.number().required("Budget is required"),
    budget: Yup.string()
      .required("Budget is required")
      .typeError("Budget must be a number")
      .min(0, "Budget must be a positive number"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await dispatch(postFooterForm(values));
        console.log("submit", postFooterForm);
        resetForm();
      } catch (error) {
        console.error("Form submission failed:", error);
      }
    },
  });

  return (
    <div className="">
      <div className="relative">
        <div>
          <img
            src={IconService.backgrounghome}
            className="homepage-mobile-image"
          />
        </div>
        <div className="container">
          {" "}
          <div className="absolute flex flex-col gap-10 top-[25%]  we-offer-section-responsive">
            <div className="flex flex-col gap-5">
              <Typography className="!font-bold  !text-[27px] ">
                How much <br />
                could you save?
              </Typography>
              <Typography className="!font-normal !text-[18px]">
                Answer the questions below to get a fixed price <br /> quotation
                for us to take your accountancy hassles away <br />
                from you.
              </Typography>
              <Card className="card 2xl:w-[612px] xl:w-[580px] lg:w-[460px] md:w-[410px] sm:w-[360px]">
                <div className="flex flex-col gap-[26px]">
                  <div>
                    <Typography className="header-text">
                      Is your turnover expected to be more than £85k?
                    </Typography>
                  </div>
                  <div className="flex gap-5 justify-center">
                    <Button
                      style={{
                        borderColor: "#FA8832 !important",
                        background: "#FF6400",
                        color: "white",
                        borderRadius: "20px",
                        width: "98px",
                        height: "48px",
                        textTransform: "capitalize",
                      }}
                    >
                      yes
                    </Button>
                    <Button
                      style={{
                        borderColor: "#FA8832 !important",
                        background: "#FF6400",
                        color: "white",
                        borderRadius: "20px",
                        width: "98px",
                        height: "48px",
                        textTransform: "capitalize",
                      }}
                    >
                      no
                    </Button>
                  </div>
                </div>
              </Card>

              <Typography className="!font-normal !text-[18px]">
                Takes less than 30 seconds
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[100px] ">
        <div>
          <Services />
        </div>
        <div>
          <div className="element1 2xl:mt[153px] xl:mt-[180px] lg:mt-[515px] md:mt-[615px] sm:mt-[615px] ">
            <AboutUs />
          </div>
        </div>
        <div className="element">
          <Blog />
        </div>
      </div>
      <div className="mt-[165px]">
        <div className="flex flex-col gap-7">
          <Typography className="text-center !font-normal !text-[18px]">
            <small>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod <br /> tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua
            </small>
          </Typography>
          <form onSubmit={formik?.handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-row gap-4">
                <TextField
                  id="fname"
                  label="First Name"
                  name="fname"
                  value={formik?.values?.fname}
                  onChange={formik.handleChange}
                  error={formik.touched.fname && Boolean(formik.errors.fname)}
                  helperText={formik.touched.fname && formik.errors.fname}
                  variant="standard"
                  className="w-full"
                />
                <TextField
                  id="lname"
                  label="Last Name"
                  name="lname"
                  value={formik?.values?.lname}
                  onChange={formik.handleChange}
                  error={formik.touched.lname && Boolean(formik.errors.lname)}
                  helperText={formik.touched.lname && formik.errors.lname}
                  variant="standard"
                  className="w-full"
                />
              </div>
              <div className="flex flex-row gap-4">
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  value={formik?.values?.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  variant="standard"
                  className="w-full"
                />
                <TextField
                  id="phone"
                  label="Phone"
                  name="phone"
                  value={formik?.values?.phone}
                  onChange={formik?.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  variant="standard"
                  className="w-full"
                />
              </div>
              <div className="flex flex-row gap-4">
                {/* Add select component for budget */}
                <TextField
                  id="budget"
                  label="Budget"
                  name="budget"
                  type="number"
                  value={formik?.values?.budget}
                  onChange={formik?.handleChange}
                  error={formik.touched.budget && Boolean(formik.errors.budget)}
                  helperText={formik.touched.budget && formik.errors.budget}
                  variant="standard"
                  className="w-full"
                />
                <TextField
                  id="description"
                  label="Description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik?.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                  variant="standard"
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                style={{
                  borderColor: "#FA8832 !important",
                  background: "#FF6400",
                  color: "white",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  width: "100px",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
