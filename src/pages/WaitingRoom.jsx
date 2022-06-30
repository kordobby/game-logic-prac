import { useNavigate } from "react-router-dom";

const WaitingRoom = ({ stompClient }) => {
  /* 고려할 것
  해당 방에 입장하는 전 단계의 버튼에서 subscribe 이루어지고 들어오게 됨
  
  
  # 오늘 했던 얘기(6/30) 대기실 인원들이 "준비" 버튼을 누르면 => subscribe (그럼 준비완료 버튼으로 바꾸자)
    해당 방에 4명의 인원이 subscribe 상태가 된다면, 페이지 이동
    subscribe 할 때 마다 data에 시작여부를 내려받고, state를 바꿔서 이동시키면 되는건가?
    => 해보고 안되면 바꿔보자
  # 팀선택 시 마다 sendMessage! team-info update!
  */
  const navigate = useNavigate();
  const token = "token";
  const roomNum = 3;
  const readyForGame = () => {
    stompClient.subscribe(
      `/api/join/room/${roomNum}`,
      function (data) {
        console.log("join game room");
        navigate(`/ingame/${roomNum}`);
      },
      {
        header: token,
      }
    );
  };

  return (
    <>
      <button onClick={readyForGame}>Ready!</button>
    </>
  );
};

export default WaitingRoom;
