useEffect(() => {
  let showRoleSetTimeOut,
    dayTimeSetTimeOut,
    voteDaySetTimeOut,
    invalidAndAiVoteCnt,
    dayVoteResult,
    lawyerVote,
    detectiveVote,
    spyVoteCnt,
    finalResultNight,
    modalSpyResult,
    winner;

  switch (status) {
    case "isStart":
      setStatus("roleGive");
      break;
    case "roleGive":
      console.log("######역할 부여 요청", Date().toString());
      roleGive();
      break;
    case "showRole":
      Role.play();
      console.log("######역할 불러오기 요청", Date().toString());
      showRoleSetTimeOut = setTimeout(showRole, 3000);
      break;
    case "dayTime":
      setMin(2);
      setChangeDay("afternoon");
      toast.success(msg, {
        draggable: false,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
      setTimeout(() => {
        toast.success("아침이 밝았습니다.", {
          draggable: false,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
      }, 5000);

      console.log("######데이 시작 요청", Date().toString());
      clearTimeout(finalResultNight);
      clearTimeout(showRoleSetTimeOut);
      dayTimeSetTimeOut = setTimeout(dayTime, 100000);
      break;
    case "voteDay":
      setMin(0);
      console.log("######투표 시작 요청", Date().toString());
      clearTimeout(dayTimeSetTimeOut);
      voteDaySetTimeOut = setTimeout(voteDay, 5000);
      break;
    case "invalidVoteCnt":
      console.log("######무효표 처리 시작 요청", Date().toString());
      clearTimeout(voteDaySetTimeOut);
      invalidAndAiVoteCnt = setTimeout(invalidVoteCnt, 500);
      break;
    case "showResultDay": // 결과가 1,2 가 되면 'winner' 스테이터스로 이동
      console.log("######낮투표 결과 요청", Date().toString());
      dayVoteResult = setTimeout(showResultDay, 500);
      clearTimeout(invalidAndAiVoteCnt);
      break;
    case "voteNightLawyer":
      setChangeDay("night");
      toast.success(msg, {
        draggable: false,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
      console.log("######변호사 투표 시작 요청", Date().toString());
      lawyerVote = setTimeout(voteNightLawyer, 8000);
      clearTimeout(dayVoteResult);
      break;
    case "voteNightDetective":
      console.log("######탐정 투표 시작 요청", Date().toString());
      detectiveVote = setTimeout(voteNightDetective, 8000);
      clearTimeout(lawyerVote);
      break;
    case "voteNightSpy":
      spyActive.play();
      console.log("######스파이 투표 요청", Date().toString());
      spyVoteCnt = setTimeout(voteNightSpy, 13000);
      clearTimeout(detectiveVote);
      break;
    case "showResultNight":
      console.log("######밤 투표 결과 요청", Date().toString());
      modalSpyResult = setTimeout(showResultNight, 5000);
      clearTimeout(spyVoteCnt);
      break;
    case "finalResult":
      console.log("######라운드 종료 결과 요청", Date().toString());
      finalResultNight = setTimeout(finalResult, 3000);
      clearTimeout(modalSpyResult);
      break;
    case "winner":
      console.log("++++게임 종료 결과 페이지 요청", Date().toString());
      winner = setTimeout(winnerFn, 1000);
      break;
    default:
      clearTimeout(winner);
  }
}, [status]);
