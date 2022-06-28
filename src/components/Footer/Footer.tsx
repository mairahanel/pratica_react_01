import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StyledFooter } from "./StyledFooter";

export const Footer: React.FC = () => {
    return (
        <div>
            <StyledFooter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/"}>About</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Contact</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Terms of Use</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Privacy Police</Link>
                            </li>
                        </ul>
                    </nav>
                    <small>&copy;Your Website 2022. All the rights reserved.</small>
                </div>
                <div>
                    <span>
                        <BsFacebook />
                    </span>   
                    <span>
                        <BsTwitter />
                    </span> 
                    <span>
                        <BsInstagram />
                    </span>
                </div>
            </StyledFooter>
        </div>
    )
}