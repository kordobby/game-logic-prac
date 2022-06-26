import React from "react";
import { PlayerField } from "../src/components/PlayerField";
import { EnemyField } from "../src/components/EnemyField";
import { Crave } from "../src/elem/Crave";
import styled from "styled-components";
import { DeckCards } from "../src/elem/DeckCards";
import { useState } from "react";
import { Cards } from "../src/elem/Cards";
import { useRef } from "react";
const DeckCardWrap = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #73beff;
`;

export default function GameField() {
  const [selectedCard, setSelectedCard] = useState("");

  const selectCardHanlder = () => {
    return alert("카드를 선택했습니다!");
    // ( cardIdRef.current.target.id !== undefined ) ?
    // (setSelectedCard(cardIdRef.current.target.id);) :
    // (null)
    // 이 이후로 선택된 카드가 화면에 그려지면 좋겠다.
  };
  return (
    <>
      <EnemyField></EnemyField>
      <DeckCardWrap>
        <h1 style={{ marginRight: "20px" }}>player's turn : ####</h1>
        <DeckCards></DeckCards>
        <Crave></Crave>
      </DeckCardWrap>
      <PlayerField selectCardHanlder={selectCardHanlder}></PlayerField>
    </>
  );
}
