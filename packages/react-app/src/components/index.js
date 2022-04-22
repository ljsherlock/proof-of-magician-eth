import styled from "styled-components";



export const BrandingContainer = styled.div`
  display: flex;
  padding: 0 8px;
  align-content: center;
`;

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
  height: 64px;
  justify-content: space-between;
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


export const NoticeBarContainer = styled.div`
  position: fixed;
  width: calc(100% - 48px);
  left: 8px; 
  bottom: 24px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NoticeBar = styled.div`
	height: 48px;
	padding: 16px;
  color: black;
	margin-bottom: 16px;
	font-size:16px;
  margin-left: 16px;
	line-height: 16px;
	background: #FFFFFF;
	border: 1px solid #BCBCBC;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    height: auto;
  }
`;

export const NoticeBar2 = styled.div`
	height: 48px;
	padding: 8px 16px;
  color: black;
	margin-bottom: 16px;
	font-size:16px;
  margin-left: 16px;
	line-height: 16px;
	background: #FFFFFF;
	border: 1px solid #BCBCBC;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    height: auto;
  }
`;

export const NoticeButton = styled.button`
  height: 32px;
  margin:0 8px;
  padding: 0 24px;
  background: #69BF9B;
  border: 1px solid rgba(0, 0, 0, 0.33);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  color: #EBFFF7;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;