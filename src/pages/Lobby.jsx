import { useEffect } from "react";
import sockJS from "sockjs";
import stompJS from "stompjs";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import WaitingRoom from "./WaitingRoom";
import InGame from "./InGame";

const Lobby = () => {
  /* 이 파트에서 고려할 부분 */
  // #0. socket connect, get userId from Cookie or whatever...
  // #1. 화면이 렌더링되면 lobby subscribe => send message
  // #2. get gameRoom Info
  // #3. roomList 는 DB에서 뽑을텐데, reducer에도 저장해야겠지?
  //     실시간으로 바뀌는건 어떻게 적용할까?
  const socket = new sockJS("ws//../....asdf");
  const stompClient = stompJS.over(socket);
  const token = "token";

  const [roomList, setRoomList] = useState([]);
  // roomList.roomNum => 이런식으로해서 내려주면 되겠찌?
  /* lobby page 렌더링되면 socket connect => lobby subscribe */
  useEffect(() => {
    stompClient.connect({ header: token }, () => {
      stompClient.subscribe(
        `api/join/lobby`,
        (data) => {
          console.log("lobby entered!");
          setRoomList((data) => [...data]);
        },
        {
          header: token,
        }
      );
    });
  });

  // props => roomNumber or data ?
  return (
    <>
      <Routes>
        <Route
          path="/waiting/:roomid"
          element={<WaitingRoom stompClient={stompClient}></WaitingRoom>}
        />
        <Route
          path="/ingame/:roomid"
          element={<InGame stompClient={stompClient}></InGame>}
        />
      </Routes>
      {roomList.length === 0 ? (
        <span>대기중인 게임룸이 없습니다.</span>
      ) : (
        roomList.map((value, index) => <span key={index}>{value}</span>)
      )}
    </>
  );
};
