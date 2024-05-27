"use client"

import menuData from '@/../utils/menu.json'
import { menuType } from '../../../utils/types';
import { useState } from "react";

export default function Menu() {
    const [selectedMenu, setSelectedMenu] = useState("breakfast");
    const menu: menuType = menuData
   
}