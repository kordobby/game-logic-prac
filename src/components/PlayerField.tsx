import styled from "styled-components";
import { Cards } from "../elem/Cards";
import { PlayerProfile } from "../elem/PlayerProfile";

export const PlayerFieldWrap = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: tomato;
`;

export const CardZone = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: center;
`;
export const PlayerField = ({ selectCardHanlder, cardIdRef }) => {
  return (
    <PlayerFieldWrap>
      <PlayerProfile></PlayerProfile>
      <CardZone>
        <Cards
          selectCardHanlder={selectCardHanlder}
          cardIdRef={cardIdRef}
        ></Cards>
      </CardZone>
    </PlayerFieldWrap>
  );
};
