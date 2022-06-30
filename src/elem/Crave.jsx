import styled from "styled-components";

const CraveWrap = styled.div`
  width: 150px;
  height: 200px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Crave = () => {
  return (
    <CraveWrap>
      <span>crave</span>
    </CraveWrap>
  );
};
