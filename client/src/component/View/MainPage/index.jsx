import React, { useEffect } from "react";
import Base from "../../Layout";
import "antd/dist/antd.css";
import "../../../style/custom-antd.css";
import { List, Card, Input, Button, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { loadRooms } from "../../../_action/socket_action";

const { Search } = Input;
const tmpRooms = [
  {
    title: "nkim 서버",
    isFull: false,
    roomCode: 1,
  },
  {
    title: "iha 서버",
    isFull: true,
    roomCode: 2,
  },
  {
    title: "yejeong 서버",
    isFull: true,
    roomCode: 3,
  },
  {
    title: "ji-park 서버",
    isFull: false,
    roomCode: 4,
  },
  {
    title: "hannkim 서버",
    isFull: false,
    roomCode: 5,
  },
  {
    title: "seonkim 서버",
    isFull: false,
    roomCode: 6,
  },
  {
    title: "jikwon 서버",
    isFull: false,
    roomCode: 7,
  },
  {
    title: "juno 서버",
    isFull: false,
    roomCode: 8,
  },
  {
    title: "seomoon 서버",
    isFull: false,
    roomCode: 9,
  },
  {
    title: "seomoon 서버",
    isFull: false,
    roomCode: 10,
  },
  {
    title: "seomoon 서버",
    isFull: false,
    roomCode: 11,
  },
];
const MainPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const { nickname, profile } = user;

  useEffect(() => {
    const socket = io("http://localhost:5000/socket");
    socket.emit("load rooms");
    socket.on("load rooms", (res) => {
      console.log(`Socket Success : ${res}`);
    });
  }, []);

  return (
    <Base username={nickname} profile={profile}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Tooltip title="방 만들기">
          <Button shape="circle" icon={<PlusOutlined />} size="large" />
        </Tooltip>
        <Search
          placeholder="방이름 혹은 서버코드로 검색"
          allowClear
          onSearch={() => {
            console.log("search!");
          }}
          style={{
            width: 300,
          }}
        />
      </div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 9,
        }}
        dataSource={tmpRooms}
        renderItem={(item) => (
          <Link to="/">
            <List.Item>
              <Card title={item.title} style={{ borderRadius: "8px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>
                    인원수{" "}
                    {item.isFull ? (
                      <span style={{ color: "red" }}>
                        <b>2 / 2</b>
                      </span>
                    ) : (
                      <span style={{ color: "blue" }}>
                        <b>1 / 2</b>
                      </span>
                    )}
                  </span>
                  <span>
                    <b>Code #1234</b>
                  </span>
                </div>
              </Card>
            </List.Item>
          </Link>
        )}
      />
    </Base>
  );
};

export default MainPage;
