"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// CSS Files
import '../../css/style.css'
import '../../css/style-prefix.css'

// Icons
import { IoMdSearch, IoMdHeartEmpty, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoMdClose, IoMdAdd } from "react-icons/io";
import { IoPersonOutline, IoBagHandleOutline, IoMenu, IoHomeOutline, IoGridOutline, IoLogoFacebook, IoAdd, IoAddCircle, IoRemove, IoCaretBack } from "react-icons/io5";

// Import Files
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [itemActive, setItemActive] = useState(0);
    const sidebarRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpenSidebar(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [openSidebar]);

    return (
        <header>
            <div className='hidden 700px:block'>
                <div className="header-top">

                    <div className="container">

                        <ul className="header-social-container">
                            <li>
                                <Link href="#" className="social-link">
                                    <IoLogoFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="social-link">
                                    <IoLogoTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="social-link">
                                    <IoLogoInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="social-link">
                                    <IoLogoLinkedin />
                                </Link>
                            </li>
                        </ul>

                        <div className="header-alert-news">
                            <p>
                                <b>Free Shipping </b>
                                This Week Order Over - ₹500
                            </p>
                        </div>

                        <div className="header-top-actions">

                            <select name="currency">
                                <option value="inr">INR ₹</option>
                                {/* <option value="usd">USD $</option> */}
                            </select>

                            <select name="language">
                                <option value="en-IN">English</option>
                                {/* <option value="en-IN">French</option> */}
                            </select>

                        </div>

                    </div>

                </div>
            </div>
            <div className="header-main">

                <div className="container">

                    <Link href="/" className="header-logo">
                        <Image priority src="/logobetter.png" alt="Sellorama's logo" width={80} height={50} />
                    </Link>

                    <div className="header-search-container !ml-0">
                        <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
                        <button className="search-btn">
                            <IoMdSearch />
                        </button>
                    </div>

                    <div className="header-user-actions">
                        <button className="action-btn">
                            <IoPersonOutline />
                        </button>

                        <button className="action-btn">
                            <IoMdHeartEmpty />
                            <span className="count">0</span>
                        </button>

                        <button className="action-btn">
                            <IoBagHandleOutline />
                            <span className="count">0</span>
                        </button>
                    </div>

                </div>

            </div>

            <div className={"hidden md:block"}>
                <DesktopNav/>
            </div>

            <div className="mobile-bottom-navigation">

                <button className="action-btn" onClick={() => setOpenSidebar(true)}>
                    <IoMenu />
                </button>

                <button className="action-btn">
                    <IoBagHandleOutline />
                    <span className="count">0</span>
                </button>

                <button className="action-btn">
                    <IoHomeOutline />
                </button>

                <button className="action-btn">
                    <IoMdHeartEmpty />
                    <span className="count">0</span>
                </button>

                <button className="action-btn" data-mobile-menu-open-btn>
                    <IoGridOutline />
                </button>

            </div>
            <div className='block md:hidden' >
                <MobileNav setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>
            </div>

        </header>
    )
}

export default Navbar