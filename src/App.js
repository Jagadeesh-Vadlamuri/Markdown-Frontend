import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards";
import Card from "./Components/Card";
import CreateCard from "./Components/CreateCard";
import EditCard from "./Components/EditCard";
import HomePage from "./Components/HomePage";
import { useFormik } from "formik";
import Navbar from "./Components/Navbar";
import Popup from "./Components/Popup";
import "./Components/Popup.css";
import ReactMarkdown from "react-markdown";
import Signup from "./Components/Signup";

export const store = createContext();
const App = () => {
  const URL = "https://react-markdown-app.herokuapp.com";
  const [details, setDetails] = useState([
    {
      fname: "",
      lname: "",
      email: "",
      password: ""
    }
  ]);
  const [cone, setCone] = useState({
    title: "",
    description: "",
    markdown: "",
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      markdown: "",
      _id: "",
    },
  });

  return (
    <store.Provider value={[cone, setCone]}>
      <Navbar details={details} setDetails={setDetails} />
      <Routes>
        <Route
          path="/"
          element={<HomePage details={details} setDetails={setDetails} />}
        />
        <Route path="/getTask/:id" element={<Card formik={formik} />} />
        <Route
          path="/getTasks"
          element={<Cards details={details} setDetails={setDetails} />}
        />
        <Route path="/createTask" element={<CreateCard />} />
        <Route path="/updateTask/:id" element={<EditCard formik={formik} />} />
        <Route
          path="/signUp"
          element={<Signup details={details} setDetails={setDetails} />}
        />
      </Routes>
    </store.Provider>
  );
};

export default App;
