import styled from "styled-components";

const Inputs = styled.div`
margin-bottom:20px;
label{
    color: var(--Dark, #2A2941);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 14px;
font-style: normal;
font-weight: 450;
line-height: normal;
}

input{
    display: flex;
width: 702px;
padding: 18px;
align-items: flex-start;
gap: 10px;
border-radius: 16px;
border: 1px solid #E3E3E3;
margin-top:8px;
}
`;


export {Inputs}