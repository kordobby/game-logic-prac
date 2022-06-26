import styled from "styled-components";
import { Cards } from "../elem/Cards";
import { PlayerProfile } from "../elem/PlayerProfile";
import { PlayerFieldWrap, CardZone } from "./PlayerField";

export const EnemyFieldWrap = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: #5a5aa8;
`;

// const CardZone = styled.div`
//   display: flex;
//   width: 70%;
//   align-items: center;
//   justify-content: center;
// `;

export const EnemyField = () => {
  return (
    <EnemyFieldWrap>
      <PlayerProfile></PlayerProfile>
      <CardZone>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </CardZone>
    </EnemyFieldWrap>
  );
};
