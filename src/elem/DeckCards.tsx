import styled from "styled-components";
import { useState } from "react";
const DeckCardsWrap = styled.div`
  width: 150px;
  height: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DeckCards = () => {
  const [drawActive, setDrawActive] = useState(false);
  return (
    <DeckCardsWrap>
      <span>deckCards</span>
      {/* if it's not player's turn, button should be disabled */}
      <button disabled={drawActive}>draw cards</button>
    </DeckCardsWrap>
  );
};
