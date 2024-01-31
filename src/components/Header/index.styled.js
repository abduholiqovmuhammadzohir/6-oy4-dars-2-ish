import styled from "styled-components";

const Headers = styled.div`
background-color: #5361E4;
width: 87%;
height: 80px;
display: flex;
padding-left: 200px;
align-items:center;
`;

const Nav = styled.div`
display: flex;
gap:48px;
margin-right:110px;
list-style: none;
color: var(--White, #FFF);
font-family: "Circular Std";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
const Img = styled.div`
width: 74.419px;
height: 30.545px;
margin-right:110px;
`;
const Start = styled.div`
display: flex;
align-items: center;
gap: 38px;
`;
const Oz = styled.p`
color: var(--White, #FFF);
font-family: "Circular Std";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

const Btn = styled.button`
display: inline-flex;
height: 46px;
padding: 8px 24px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
color: var(--Main, #5361E4);
font-family: "Circular Std";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
border-radius: 12px;
background: var(--White, #FFF);
border: none;
transition: all 0.5s;
&:hover{
    background: aqua;
    cursor: pointer;
}
`;


export { Headers, Nav, Img, Start,Oz,Btn };