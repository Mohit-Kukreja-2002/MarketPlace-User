import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { IoAdd, IoRemove } from 'react-icons/io5';

const MobileNav = ({ setOpenSidebar, openSidebar }) => {
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
        <div ref={sidebarRef} className={`${openSidebar ? "block" : "hidden"} transition-all duration-500 ease-linear`}>
            <nav className="mobile-navigation-menu has-scrollbar">

                <div className="menu-top">
                    <h2 className="menu-title">Menu</h2>

                    <button className="menu-close-btn" onClick={() => setOpenSidebar(false)}>
                        <IoMdClose />
                    </button>
                </div>

                <ul className="mobile-menu-category-list">

                    <li className="menu-category">
                        <Link href="#" className="menu-title">Home</Link>
                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" onClick={() => {
                            itemActive !== 1 ? setItemActive(1) : setItemActive(0)
                        }
                        }>
                            <p className="menu-title">Men's</p>

                            <div className='text-black'>
                                <IoAdd className={`${itemActive === 1 ? "hidden" : "block"}`} />
                                <IoRemove className={`${itemActive === 1 ? "block" : "hidden"}`} />
                            </div>
                        </button>

                        <ul className={`submenu-category-list ${itemActive === 1 && "block"}`}>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Shirt</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Shorts & Jeans</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Safety Shoes</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Wallet</Link>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" onClick={() => {
                            itemActive !== 2 ? setItemActive(2) : setItemActive(0)
                        }
                        }>
                            <p className="menu-title">Women's</p>

                            <div className='text-black'>
                                <IoAdd className={`${itemActive === 2 ? "hidden" : "block"}`} />
                                <IoRemove className={`${itemActive === 2 ? "block" : "hidden"}`} />
                            </div>
                        </button>

                        <ul className={`submenu-category-list ${itemActive === 2 && "block"}`}>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Dress & Frock</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Earrings</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Necklace</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Makeup Kit</Link>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" onClick={() => {
                            itemActive !== 3 ? setItemActive(3) : setItemActive(0)
                        }
                        }>
                            <p className="menu-title">Jewelry</p>

                            <div className='text-black'>
                                <IoAdd className={`${itemActive === 3 ? "hidden" : "block"}`} />
                                <IoRemove className={`${itemActive === 3 ? "block" : "hidden"}`} />
                            </div>
                        </button>

                        <ul className={`submenu-category-list ${itemActive === 3 && "block"}`}>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Earrings</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Couple Rings</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Necklace</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Bracelets</Link>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" onClick={() => {
                            itemActive !== 4 ? setItemActive(4) : setItemActive(0)
                        }
                        }>
                            <p className="menu-title">Perfume</p>

                            <div className='text-black'>
                                <IoAdd className={`${itemActive === 4 ? "hidden" : "block"}`} />
                                <IoRemove className={`${itemActive === 4 ? "block" : "hidden"}`} />
                            </div>
                        </button>

                        <ul className={`submenu-category-list ${itemActive === 4 && "block"}`}>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Clothes Perfume</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Deodorant</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Flower Fragrance</Link>
                            </li>

                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Air Freshener</Link>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">
                        <Link href="#" className="menu-title">Hot Offers</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav