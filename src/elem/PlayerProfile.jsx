import styled from "styled-components";

const ProfileWrap = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

export const PlayerProfile = () => {
  return (
    <ProfileWrap>
      <span>player_1</span>
      <span></span>
      <span>: stats (HP-MP-states)</span>
    </ProfileWrap>
  );
};
