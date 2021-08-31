import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const Header = ({ children, logo, profile = null, username = null }) => {
  const headerStyle = {
    padding: "15px 30px",
    height: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "ZCOOL KuaiLe, cursive",
    fontSize: "40px",
    textShadow: "2px 2px 2px black",
    color: "white",
  };
  const usernameStyle = {
    fontFamily: "ZCOOL KuaiLe, cursive",
    fontSize: "30px",
    marginLeft: "10px",
    color: "#ACC6AE",
  };
  return (
    <div style={headerStyle}>
      {children}
      <span>{logo}</span>
      <Link to="/">
        <Avatar size="large" icon={profile ? profile : <UserOutlined />} />
        <span style={usernameStyle}>{username}</span>
      </Link>
    </div>
  );
};

export const Footer = styled.div`
  text-align: center;
  position: relative;
  font-family: Noto Sans KR, sans-serif;
  background: black;
  color: white;
  padding: 20px 0;
`;

export const Content = styled.div`
  width: 100%;
  padding: 100px 100px;
  height: 94%;
  overflow: visible;
  opacity: 1;
`;

export const GameContent = styled.div`
  width: 100%;
  height: 90%;
  padding: 100px 100px;
  overflow: visible;
  opacity: 1;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  color: white;
`;
