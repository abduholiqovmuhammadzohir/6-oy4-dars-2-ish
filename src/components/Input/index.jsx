import React from 'react'
import { Inputs } from "./index.styled";

export default function Input({name,nomi}) {
  return (
    <>
    <Inputs>
    <label htmlFor="">{name}</label><br />
    <input type="text" placeholder={nomi}/>
    </Inputs>
  
    </>
  )
}
