// 1) 서버에서 클라에 카드를 2장씩 보냄.
// 2) 클라는 서버로부터 카드 2장을 받음.
// 3) 받은 클라는 서버에 받았다는 알림을 보냄
// 4) 서버는 알림이 다 오면 게임을 시작함

import { useEffect } from "react";

const InGame = () => {
  // const turnCounter = useSelector((state) => state?.gameReducer.turnCounter);
  // cosnt playerStatus = useSelector((state) => state?.gameReducer.status);

  const [counts, setCounts] = useState(0);
  const [playerStatus, setPlayerStatus] = useState([]); // [ {player1 : {....}, {player2 : {....} ... ]
  const [preTurnState, setPreTurnState] = useState(false);
  const [actionTurnState, setActionTurnState] = useState(false);
  const [endTurnState, setEndTurnState] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  // 정해진 변수명이 없어서 임의로 대충 때려박은 것임.
  /* #1. GAME START */
  useEffect(() => {
    // Server REQUEST TO START GAME (websocket event?)
    GameStart();
    setCounts(); // 턴 카운터에 대한 이해필요, 내일 여쭤보기
  }, []);

  const GameStart = () => {
    /* 1. 접속중인 유저 확인 => 서버로 보냄
       2. server 에서 room 접속인원 확인 => 모든 인원 들어왔을 시 게임 시작
       3. data : gameStartMessage & playerList & turnOrder & deckCards & initCards
    */
  };

  /* #2. Check PLAYER'S TURN */
  const PreTurn = () => {
    /* if the player in this page got 'false' => cannot play, see other user's Play
       data = { 
          turn? : playerId,
          true / false for what?
          playerStatus : [ { player1 : { HP : ####, MP : ####, ...  }}],
       }
    */
    // get Datas from Server... maybe with Websockets
    if (playerState === false) {
      // 스턴이나 자는 유저는 액션턴 스킵하고 엔드턴 넘어감
      setEndTurnState(true);
      return;
    } else {
      // 이렇게 하면 액션턴 돌아가게 만들면 되려나.............
      setActionTurnState(true);
    }
  };

  const ActionTurn = () => {
    // need to send msg to Server : selectedCard , playerId, targetPlayer
    // 30초가 지나거나, 플레이어가 턴종료를 누르면 액션턴이 종료되고 백엔드에 엔드턴메시지를 콜합니다(내용으로는 플레이어 정보를 넘깁니다)
    if (selectedCard === null) {
      // setTime => wait 30 sec to select card
      // after 30sec, send data to Server( sC has to be false or null )
    } else {
      // send data to Server
    }
  };

  const selectCardHandler = () => {
    /*
      get Cards info => how?
      setSelectedCard(####);
     */
  };

  const EndTurn = () => {
    setCounts(); // ++
    // 여기서 새로운 data를 받고 턴이 다시 시작되어야하는데.................

    /*
    엔드턴에 오면 백엔드에서는 플레이어를 받아 플레이어의 상태이상을 체크하고 
    상태이상 Duration이 0보다 큰 상태이상의 Duration -- 처리합니다
    턴진행 카운터를 ++합니다.
    엔드턴에서는 플레이어를 확인하고 다음 차례가 되는 사람의 (int)turnOrder를 리턴합니다
    이 리턴값을 가지고 프론트에서는 다음 플레이어를 찾아 프리턴을 진행합니다.
    */
  };
  /*
  턴을 진행할 플레이어의 turnOrder를 변수로 받아 상태이상들을 체크합니다.
프론트에서는 턴이 몇턴이나 진행되고 있는지 체크하는 턴진행카운터를 준비해 해주시고

?? 이건무슨뜻일까?
"카운터가 0일때 프리턴을 진행할 플레이어의 turnOrder는 1로 해주시면 될 것 같습니다"

상태이상을 체크하고 상태이상 모디파이어들을 프리턴에서 적용시킵니다(독의 체력감소 효과등)
상태이상 중에서 턴의 진행을 막는 상태이상이 있을 경우 리스폰스로 False를 리턴합니다
프론트에서 False를 리스폰스로 받으면 액션턴을 스킵하고 엔드턴으로 진행합니다 */

  return (
    <>
      {/* Make counter in Redux? => need index to count..
  #4. Count for Game Turn => count in Front-end => HOW? Redux or React-Query ?
    - have to check about 'Game Turn's meaning.
  */}
      {/*   
  #2. READY FOR GAME => give cards to pclayers.
  #3. draw player's status => HP, MP etc....
  */}
    </>
  );
};
