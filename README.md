# 이번 프로젝트에서의 최대 고민?

#### 어떻게 하면 게임 순서대로 줄줄이 소세지 로직이 구현이 될까?

- 지금까지 생각한 방법
  - 서버에서 메세지를 보낼 때 마다 턴 상태를 useState를 이용해서 변경
  - 조건문을 활용!
    - 어떻게 하면 조건문을 조금 더 직관적으로 활용할 수 있을까?
    - if가 남발되는 상황은 코드를 읽어내기 쉽지않을 것 같음
    - `switch` `case` 구문을 사용한다면??????????
    - 로직을 위 구문을 이용해 표현하고 그것에 이어지는 함수의 마지막에 `useState()`로 다음 로직이 굴러가게 바꿔준다면?
    - 생각해보니, 굳이 store에 값을 담아줘야할까?

```javascript
useEffect(() => {
  switch (status) {
    case "isStart":
      // 첫 게임 시작 이후로는 이 case는 진행되지 않을 것임!
      console.log("C : 게임 참여 메세지 전달");
      console.log("S : 게임 초기화에 필요한 모든 데이터 전달");
      setStatus("preCheck");
      break;
    case "preCheck":
      console.log("C : 프리턴 진행하는 플레이어 전달");
      console.log("S : 플레이어의 status 값 전달");
      preCheck(); // 이 함수에서는 setStatus("draw")
      break;
    case "draw":
      console.log("C : 드로우 진행하는 플레이어 전달");
      console.log("S : 드로우 정보/선택가능 카드 장수 전달");
      drawCards(); // 이 함수 마지막에 setStatus("select")
      // class에 따라 드로우가 달라져서, class의 draw관련 switch case 작성해주자
      break;
    case "select":
      console.log("C : 선택한 카드의 값 전달");
      console.log("S : 덱정보 다시 전달");
      drawCardSelect();
      break;
    case "turnCheck":
      console.log("C : 캐릭터의 턴 진행여부 질의");
      console.log("S : 턴 진행여부 결과 리턴");
      turnCheck(); // 상태 이상에 따른 action-turn skip 시에는 endturn으로
      break;
    case "actionUseCard":
      console.log("C : 사용한 카드 전달");
      console.log("S : 변경된 카드 리스트/status 전달");
      actionUseCard(); // 카드 선택 모달 띄우기, 턴 종료를 누르면 턴 넘기고 카드 활성화 꺼줘야겠따.
      break;
    case "endCheck":
      console.log("C : 턴 종료시 ID 전달");
      console.log("S : 상태이상 관련 계산후 결과 전달, 다음턴 플레이어 전달");
      actionEndCheck();
      break;
    case "endGame":
      // preTurn - preCheck - response - actionTurn - useCard 단계에서 게임오버 true시 연결되는 케이스
      console.log("C : gameId 전달");
      console.log("S : 게임 승리/종료 내용 전달");
      endGame();
      break;
    default:
      console.log("디폴트는 뭘 넣어야되냐....");
  }
}, [status]);
```
