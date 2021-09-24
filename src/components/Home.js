import styled from "styled-components";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import db from "../firebase";
import Main from "./homepage/Main";
import { selectUserName } from "../features/user/userSlice";

const Home = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default Home;
