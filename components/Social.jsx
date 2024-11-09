import React from "react";
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path:"https://github.com/Aqsamajeed00"},
    {icon: <FaLinkedinIn />, path:"https://www.linkedin.com/in/aqsa-majeed-181a69304/"},
    {icon: <FaTwitter />, path:"https://x.com/AqsaShaikh_034?t=S_zkzt0Qs77raAUhskgMQg&s=09"},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
            </div>
    )
}

export default Social;