import React from 'react';
import Link from "next/link";

import { Profile, UserName, Items } from './sideItems_style';

export default function SideItems() {
    const profileName = {title: "profile name", article: "Garry"};
    const profileImg = {title: "profile img", path: "img/profile.jpg"};

    const menu = [
        { title: "Home", path: "/" },
        { title: "Menu_2", path: "/menu/Menu_2" },
        { title: "Menu_3", path: "/menu/Menu_3" },
        { title: "Menu_4", path: "/menu/Menu_4" }
    ];
    return(
        <>
        <Profile src = { profileImg.path }/>
        <UserName>Garry</UserName>
        {menu.map((menu, index) => {
            return (
                // eslint-disable-next-line react/jsx-key
                <Items>
                    <Link href = {menu.path} key={index}>
                        <a className = "menu"><Item menu={menu}/></a>
                    </Link>
                </Items>
            );
        })}
        </>
    );
}

function Item({ menu }) {
    const currentMenu = menu.title;
    return (
        <div>
            {
                {
                    Home: <p>&nbsp; {menu.title} &nbsp;</p>,
                    Menu_2: <p>&nbsp; {menu.title} &nbsp;</p>,
                    Menu_3: <p>&nbsp; {menu.title} &nbsp;</p>,
                    Menu_4: <p>&nbsp; {menu.title} &nbsp;&nbsp;</p>,
                }[currentMenu]
            }
        </div>
    )
}