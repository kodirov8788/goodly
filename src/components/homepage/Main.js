import React from "react";
import styled from "styled-components";
import mainBg from "../../essets/background-mainpage.jpeg";
import {
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaFacebookF,
} from "react-icons/fa";

import { TiSocialInstagram } from "react-icons/ti";

import Wkontakte from "../../essets/vk.svg";
const Main = () => {
  return (
    <Container>
      <Wrap>
        <h1>Lorem ipsum dolor</h1>
        <span>Lorem ipsum dolor sit.</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          enim, aut atque aspernatur possimus sequi laudantium unde nesciunt
          deleniti expedita facilis impedit voluptatibus, error, eos perferendis
          maiores architecto facere. Aliquam, doloremque ratione. Quam maxime
          assumenda repudiandae atque perferendis eaque consequuntur modi id
        </p>
        <Btn>
          <span>logo | Tariflar</span>
        </Btn>
      </Wrap>
      <WrapLink>
        <ul>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Wkontakte} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTelegramPlane />
            </a>
          </li>
        </ul>
      </WrapLink>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  padding-top: 5rem;
  padding-right: 8rem;
  padding-left: 8rem;
  display: flex;
  justify-content: space-between;

  &:after {
    background: url(${mainBg}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -2;
    opacity: 0.9;
  }
  &:before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    inset: 0px;
    z-index: -1;
  }
`;
const Wrap = styled.div`
  flex: 0.6;
  h1 {
    color: #ffffff;
    font-family: "Roboto-Black";
    font-size: 60px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 1px 5px #616161;
  }
  span {
    color: #ffffff;
    font-family: "Roboto-Regular";
    font-size: 35px;
    text-transform: uppercase;
    display: block;
  }
  p {
    color: #ffffff;
    font-family: "Roboto-Light";
    font-size: 20px;
    margin: 30px 0px 20px;
    text-shadow: 0 0 3px #000;
  }
`;
const WrapLink = styled.div`
  margin-top: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 0.5em;
      display: flex;
      cursor: pointer;
      /* border: 1px solid #000; */
      background-color: #000;
      padding: 5px;
      border-radius: 50%;
      &:hover {
        background-color: red;
        transition: all 0.25s ease-in-out;
      }
      a {
        font-size: 25px;
        display: flex;
        padding: 5px;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
const Btn = styled.button`
  background: #feb820;
  padding: 15px 25px;
  border-radius: 7px 7px 10px 10px;
  border-bottom: 5px solid #c48d15;
  border-left: none;
  border-right: none;
  box-shadow: 0 4px 8px rgb(26 26 26 / 30%);
  margin: 20px 0;
  display: inline-block;
  border-top: 2px solid #ffd31d;
  cursor: pointer;
  span {
    font-size: 20px;
    color: var(--main-black);
  }
  &:hover {
    background: #e6a519;
    border-top: 2px solid #e6a519;
  }
  &:active {
    border-bottom: 3px solid #c48d15;
    transform: translateY(2px);
  }
`;
export default Main;
