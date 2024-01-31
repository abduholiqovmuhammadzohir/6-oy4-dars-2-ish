import React from 'react'
import { Bodys, Yuklash, Icon, Iconimg, Select, Text, Btns } from "./index.styled";
import yuklash from "../img/yuklash.png";
import wimg from "../img/world-icon.png";
import iimg from "../img/instagram-icon.png";
import timg from "../img/telegram-icon.png";
import fimg from "../img/facebook-icon.png";
import gimg from "../img/github-icon.png";


import Input from '../Input';
import { Btn } from '../Header/index.styled';

export default function Body() {
  return (
    <>
      <Bodys>
        <h3>Kompaniya ma’lumotlari</h3>
        <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        <Yuklash>
          <img src={yuklash} />
          <h2>Yuklash</h2>
        </Yuklash>
        <Input name="Kompaniya nomi *" nomi="Kompaniya nomi"></Input>
        <Input name="Email *" nomi="Email"></Input>
        <Input name="Telefon raqami *" nomi="UZ +9989"></Input>

        <Icon>
          <label htmlFor="">Linklar *</label>
        </Icon>
        <Iconimg>
          <img src={wimg} />
          <img src={iimg} />
          <img src={timg} />
          <img src={fimg} />
          <img src={gimg} />
        </Iconimg>

        <Select>
          <div>
            <label htmlFor="">Davlat *</label><br />
            <select name="" id="">
              <option value="">Davlat</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Shahar *</label><br />
            <select name="" id="">
              <option value="">Shahar</option>
            </select>
          </div>
        </Select>

        <Input name="Yashash joyi *" nomi="Joy"></Input>
        <Input name="Hodimlar soni *" nomi="Hodimlar soni"></Input>

        <Text>
          <label htmlFor="">Izoh *</label><br />
          <textarea placeholder='Kompaniya haqida izoh qoldiring'></textarea>
        </Text>

        <Btns>
          <a href="">Ortga</a>
          <button>Keyingisi</button>
        </Btns>

      </Bodys>
    </>
  )
}
