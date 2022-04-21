import styled from "styled-components";

export const ColorOrb = styled.div`
  z-index: 1;
  height: 165.77px;
  width: 165.77px;
  border-radius: 100%;
  background-color: rgb(255,255,255 );
  text-align: center;
  color: white;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -109px;
  position: absolute;
  top: -117px;
  bottom: 0;
  left: -3px;
  margin: auto;
  right: 0;
`
export const BackgroundWithColor = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items:center;
  justify-content: center;
`

export const Body = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  margin-top: 40px;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  margin: 0px 20px;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh);
`;

export const Header = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  min-height: 70px;
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  margin-top: 8px;
`;
