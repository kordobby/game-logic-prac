import { useEffect } from "react";
import { useState } from "react";
import sockJS from "sockjs-client";
import stompJS from "stompjs";
import { getCookie } from "../shared/Cookies";

const InGame = () => {
  const socket = new sockJS("url");
  const stompClient = stompJS.over(socket);

  const thisPlayer = getCookie("nickname");
  const accessToken = getCookie("token");

  // Game Turn Controller
  const [status, setStatus] = useState("");

  // 게임 진행 간 Player State
  const [playerA, setPlayerA] = useState({});
  const [playerB, setPlayerB] = useState({});
  const [playerC, setPlayerC] = useState({});
  const [myState, setMyState] = useState({});
  const [myCard, setMyCard] = useState([]);

  // 지금 턴을 진행하는 Player
  const [nowPlayer, setNowPlayer] = useState("");
  // 이번에 사용한 카드
  const [usedCard, setUsedCard] = useState("");

  // 해당페이지 왔을 때, 소켓 연결
  useEffect = () => {
    stompClient.connect({ token: accessToken }, () => {
      stompClient.subscribe("/sub/public", (data) => {
        console.log(data);
        const response = JSON.parse(data.body);
        console.log(response);
        if (response?.type === "START") {
          // 접속 플레이어의 정보 저장
          setMyState(response?.players.filter( playerId === thisPlayer));
          // 다른 플레이어들의 정보 저장
          const otherPlayers = response?.players.filter( playerId !== thisPlayer);
          setPlayerA(otherPlayers[0]);
          setPlayerB(otherPlayers[1]);
          setPlayerC(otherPlayers[2]);
          // 이번 턴 진행하는 플레이어 정보 확인
          const findNowPlayer = response?.players.filter( turn === true);
          setNowPlayer(findNowPlayer.playerId);
          // 턴을 여기서 넘겨야하나? 고민중 ( setTimeout 으로 시간을 좀 줘도 될듯)
          setStatus("draw")
        } else if (response?.type === "PRECHECK") {
          setMyCard(response?.message);
        } // 이런식으로 데이터 관리할 것이고, store 사용여부는 고민중
      });
    });
    return console.log("socketUnsubscribe"); // 나갈때 구독 끊기
  };

  // #1. 게임 시작
  const readyGameHandler = () => {
    setStatus("isStart");
  }

  // #2. 인게임 내부 게임 시작 버튼, 게임 모든 데이터 수령
  const readyForGame = () => {
    const data = {
      type: "JOIN",
      sender: thisPlayer,
      message: thisPlayer,
    };
    stompClient.send(
      "pub/chat/send",
      { token: accessToken },
      JSON.stringify(data)
    );

    if(data) {
      setStatus("preCheck");
    }
  };

  // #3. 
  const preCheck = () => {
    const data = {
      type: "PRECHECK",
      sender: thisPlayer,
      message: {playerId: thisPlayer} // 서버에서 id 내려주면 그걸로 바꾸기
    };
    stompClient.send(
      "endPoint",
      { token: accessToken },
      JSON.stringify(data)
    );
  }
  // ##### GAME LOGIC
  useEffect(() => {
    swtich (status) {
      case "isStart" :
        readyForGame();
        break;
      case "preCheck" :
        preCheck();
        break;
    }
  })
  return <></>;
};
