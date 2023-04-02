import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
`
//HEADER
export const Header = styled.header`
width: 100%;
height: 15vh;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #eeb868;
h1{
  color:#136f63;
  padding: 10px;
}
`
export const Perfil = styled.div`
display: flex;
align-items: center;
gap: 10px;
padding-right: 10px;
img{
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
p span{
color: #ef767a;
}
`
//MAIN
export const Main = styled.main`
width: 100%;
display: flex;
gap: 5px;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Div = styled.div`
width: 50%;
input{
  width: 85%;
  height: 5vh;
  border-radius: 5px;
  border: 1px solid #ef767a;
  padding: 10px;
  margin: 10px 0 20px 0px;
  transition: box-shadow 0.3s ease;
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px #49dcb1;
  }
    
}
button{
  height: 5vh;
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px;
  border: none;
  background-color: #49dcb1;
  cursor: pointer;
}
`
