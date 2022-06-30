import { useCallback } from "react";

const sockets = {};

const useSocket = (serverUrl, gameNum, userId) => {
  const disconnect = useCallback(() => {
    if (gameNum && sockets[gameNum]) {
      sockets[gameNum].disconnect();
      delete sockets[gameNum];
    }
  }, [gameNum]);

  if (!gameNum) {
    return [undefined, disconnect];
  }
  const nickname = { id: userId, gameNum: gameNum };
  if (!sockets[gameNum]) {
    sockets[gameNum] = io.connect(serverUrl);
    sockets[gameNum].emit("joinGame", gameNum, userId);
    sockets[gameNum].emit("nickname", nickname);

    console.info("create socket", gameNum, sockets[gameNum]);
  }

  return [sockets[gameNum], disconnect];
};

export default useSocket;
