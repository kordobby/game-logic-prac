import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameInfo: [
    {
      roomNum: 0,
      preTurn: false,
      actionTurn: false,
      endTurn: false,
      player_1: {
        class: "",
        cardInfo: [],
        hp: 123,
        mp: 123,
        a: 123, // 뭐가 있을지 모름
        gameOver: false,
      },
      player_2: {
        class: "",
        cardInfo: [],
        hp: 123,
        mp: 123,
        a: 123, // 뭐가 있을지 모름
        gameOver: false,
      },
      player_3: {
        class: "",
        cardInfo: [],
        hp: 123,
        mp: 123,
        a: 123, // 뭐가 있을지 모름
        gameOver: false,
      },
      player_4: {
        class: "",
        cardInfo: [],
        hp: 123,
        mp: 123,
        a: 123, // 뭐가 있을지 모름
        gameOver: false,
      },
    },
  ],
};

export const inGameSlice = createSlice({
  name: "inGame",
  initialState,
  reducers: {
    updateStats : (state) => {

    },
    
  }
});
