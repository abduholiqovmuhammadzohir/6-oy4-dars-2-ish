import React from 'react'
import {Headers,Nav,Img,Start,Oz,Btn}  from "./index.styled";
import logo from "../img/logos.png";
import strelka from "../img/strelka.png";

export default function Header() {

    return (
        <>
            <Headers>
                <Img><img src={logo}/></Img>
                <Nav>
                        <li>Vakansiyalar</li>
                        <li>Kandidatlar</li>
                        <li>Kompaniyalar</li>
                        <li>Xizmatlar</li>
                        <li>Ta’lim</li>
                </Nav>
                <Start>
                    <Oz>O'zbek <img src={strelka} alt="" /></Oz>
                    <Btn>Boshlash</Btn>
                </Start>
            </Headers>
            
        </>
    )
}
