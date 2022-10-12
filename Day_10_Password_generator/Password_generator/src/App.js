import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Form from "./components/form";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Form></Form>
    </React.Fragment>
  );
}

export default App;
