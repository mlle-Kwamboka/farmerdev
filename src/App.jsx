// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Web5Context } from "./utils/Web5Context";
import Home from "./pages/Home";
import Specialist from "./pages/Specialist";
import { Routes, Route } from "react-router-dom";
import Farmer from "./pages/Farmer";
import MyModal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const { did, userType } = useContext(Web5Context);

  useEffect(() => {
    if (did) {
      console.log("The DID : ", did);
    }
  }, [did, userType]);

  const DashboardComponent =
    userType === "specialist" ? Specialist : userType === "farmer" ? Farmer : Home;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<DashboardComponent openModal={openModal} />}
        />
        {/* <Route
          path="/dashboard"
          element={<DashboardComponent openModal={openModal} />}
        /> */}
      </Routes>
      <MyModal isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
    </>
  );
};

export default App;
