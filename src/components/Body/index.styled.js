import styled from "styled-components";

const Bodys = styled.div`
padding: 32px 38px;
flex-direction: column;
gap: 42px;
border-radius: 24px;
background: #FFF;
margin-top:60px;
width:778px;
margin-left:340px;
h3{
color: var(--Dark, #2A2941);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 41.6px */
}
p{
    color: var(--30-black, #B3B3B3);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 16px;
font-style: normal;
font-weight: 450;
line-height: 130%;
margin-bottom:32px;
}
`;

const Yuklash = styled.div`
display: flex;
align-items:center;
margin-bottom:20px;
h2{
    color: var(--Mai, #5361E4);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left:14px;
}
`;

const Icon = styled.div`
label{
    color: var(--Dark, #2A2941);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 14px;
font-style: normal;
font-weight: 450;
line-height: normal;
}
`;

const Iconimg = styled.div`
margin-top:8px;
img{
    margin-right:8px;
    margin-bottom:20px;
}
`;

const Select = styled.div`
display: flex;
gap: 60px;
label{
    color: var(--Dark, #2A2941);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 14px;
font-style: normal;
font-weight: 450;
line-height: normal;
}
select{
    display: flex;
width: 341px;
padding: 18px;
align-items: center;
border-radius: 16px;
border: 1px solid #E3E3E3;
margin-top:8px;
margin-bottom:20px;
}

`;

const Text = styled.div`
label{
    color: var(--Dark, #2A2941);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 14px;
font-style: normal;
font-weight: 450;
line-height: normal;
}
textarea{
    display: flex;
width: 702px;
height: 148px;
padding: 18px;
align-items: flex-start;
gap: 10px;
border-radius: 16px;
border: 1px solid #E3E3E3;
margin-top:8px;
margin-bottom:42px;
}
`;

const Btns = styled.div`
display: flex;
gap: 348px;
a{
    display: flex;
width: 179.841px;
padding: 15px 30px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 16px;
background: #F8F8F8;
text-decoration: none;
color: var(--Gray, #6E6D77);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 1px;
text-transform: uppercase;
transition: all 0.5s;
&:hover{
    cursor: pointer;
    background: var(--Mai, #5361E4);
color: var(--White, #FFF);
}
}

button{
    display: inline-flex;
padding: 18px 24px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 16px;
background: var(--Mai, #5361E4);
color: var(--White, #FFF);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 1px;
text-transform: uppercase;  
border: none;
transition: all 0.5s;
&:hover{
    cursor: pointer;
    background: #F8F8F8;
    color: var(--Gray, #6E6D77);
}
}
`;

export { Bodys, Yuklash, Icon, Iconimg, Select, Text, Btns };