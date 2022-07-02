import { useEffect } from "react";
import { useState } from "react";
const InGame = ({ stompClient }) => {
  /* BE 에서 보내주는 msg 순서대로 짜보자 */
  // 오늘 BE랑 이야기 해보기 => 게임 입장 인원 받고 게임 시작 싸인 보내기
  // 입장인원 4명 확인 시 gameState => true
  const [gameState, setGameState] = useState(false);
  const [firstPlayer, setFirstPlayer] = useState();
  const [secondPlayer, setSecondPlayer] = useState();
  const [thirdPlayer, setThirdPlayer] = useState();
  const [fourthPlayer, setFourthPlayer] = useState();
  const [nowPlayer, setNowPlayer] = useState(1);
  // 게임 시작 시, 대기실 unsubscribe => 게임룸 subscribe로 변경
  // 서버에서 바로 확인하고 user check하고 msg 내려주기

  /* 서버에서 유저체크 되었는지 확인하는 msg 루프 돌려 보내기 */
  // while 문으로 함수 루프 돌리기? 루프를 안돌려봐서 이게 맞나 싶네
  const checkPlayerCount = () => {
    const token = "token";
    const data = {
      playerId: "sandy",
      gameRound: "preTurn",
    };
    do {
      stompClient.send("/app/ingame/checkUser", {}, JSON.stringify(data));
      setGameState(data.gameRound);
    } while (gameState === true);
    // break?
  };

  /* 화면 렌더링 시 플레이어 수를 check 하고, gameState를 변경 */
  // gameState => true 일 때, 게임 시작
  useEffect(() => {
    checkPlayerCount();
  }, [gameState]);

  if (gameState) {
    // [1] ----- gamestart msg ( C => S ) :
    // [2] ----- gamestart msg ( S => C )
    // 궁금한 것 : gameRoomId 는 이미 나온거 아닌지?
    stompClient.send(
      "/app/ingame/start",
      { header: token },
      JSON.stringify(data)
    );
    stompClient.subscribe(
      `/api/ingame/start`,
      function (data) {
        /* data를 받아오면, 화면에 그려진다. 플레이어의 스탯과 클래스까지 */
        // data.gameRoomId
        // data.players
        // data.players[0]
        /* 이렇게 되면 아군이 꼭 내 뷰 오른쪽에 그려진다는 보장은 없음. 
         필터 돌리고 그렸을 때 바로 그려질지는 장담이 되지 않기 때문에!
         setThisPlayer(data.players.filter(value => value.playerID === loginUser))  *loginUser는 스토어나 쿠키에서 가져오기?
         const others = data.player.filter(value => value.playerId !== loginUser);
      */
        // setFirstPlayer(others[0]);
        // setSecondPlayer(others[1]);
        // setThirdPlayer(others[2]);
        // setNowPlayer(data.players.filter(value => value.playerTurn === true))
      },
      { header: token }
    );
    // [3] ----- preTurn을 진행하는 player의 ID 값을 서버로 전달?
    // 첫 턴에 받는 playerData에
    // 아니면 아예 player1 => player2
    if (nowplayer === nowPlayer.playId) {
    }
    const playerInThisTurn = nowPlayer.playerId;
    stompClient.send("/app/ingame/start", { header: token }, playerInThisTurn);

    // [4] ----- preTurn을 진행하는 player의 ID 값을 서버로 전달? 굳이?
  }
  return <></>;
};
