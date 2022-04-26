import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  padding: 10px;
  background-color: white;
  color: navy;
  display: grid;
  grid-template-columns: auto;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const HeaderClass = styled.div`
  width: 100%;
  min-height: 60px;
  text-align: center;
  font-size: calc(10px + 1vmin);
  color: hsl(200, 50%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid hsl(200, 50%, 50%);

  @media (max-width: 640px) {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentClass = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterClass = styled.div`
  width: 100%;
  text-align: center;
  color: hsl(200, 50%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid white;
  border-top: 1px solid hsl(200, 50%, 50%);
  padding: 20px;

  @media (max-width: 640px) {
    display: flex;
    width: 400px;
    align-items: center;
    justify-content: center;
  }
`;
