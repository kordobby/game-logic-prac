export const useSetPlayer = (data) => {
  const returnValue = data.players;
  // initialData = { name : "#### ", players: [{playerId}]}}
  const thisPlayer = returnValue.filter(
    (value) => value.playerId === data.name
  );
  const others = returnValue.filter((value) => value.playerId !== data.name);
  const findNowPlayer = returnValue.filter((value) => value.turn === true);
  const nowPlayer = findNowPlayer[0].playerId;
  console.log(thisPlayer[0]);
  console.log(others);
  console.log(findNowPlayer);
  console.log(nowPlayer);
  return [thisPlayer[0], others[0], others[1], nowPlayer];
};
