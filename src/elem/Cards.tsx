import styled from "styled-components";
import { useState } from "react";
const CardBox = styled.div`
  width: 180px;
  height: 200px;
  margin: 0 15px 0 15px;
  background-color: yellow;
  &:hover {
    transform: scale(1.1);
    background-color: blue;
  }
`;

export const Cards = ({ selectCardHanlder, cardIdRef }) => {
  const [cardActive, setCardActive] = useState(false);
  const onMouseOver = () => {
    setCardActive(true);
  };
  const onMouseOut = () => {
    setCardActive(false);
  };

  return (
    <CardBox onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {cardActive ? (
        <div id="hello" cardIdRef>
          <span>cardname</span>
          <button onClick={selectCardHanlder}>select</button>
        </div>
      ) : (
        <div>
          <span>cardname</span>
        </div>
      )}
    </CardBox>
  );
};
