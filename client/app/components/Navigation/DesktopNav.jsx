import Link from 'next/link'
import React from 'react'

const DesktopNav = () => {
    return (
        <nav className="desktop-navigation-menu">

            <div className="container">
                <ul className="desktop-menu-category-list">

                    <li className="menu-category">
                        <Link href="#" className="menu-title">Home</Link>
                    </li>

                    <li className="menu-category">
                        <Link href="#" className="menu-title">Categories</Link>

                        <div className="dropdown-panel">
                            <ul className="dropdown-panel-list">

                                <li className="menu-title">
                                    <Link href="#">Electronics</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Desktop</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Laptop</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Camera</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Tablet</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Headphone</Link>
                                </li>

                            </ul>

                            <ul className="dropdown-panel-list">

                                <li className="menu-title">
                                    <Link href="#">Men's</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Formal</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Casual</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Sports</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Jacket</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Sunglasses</Link>
                                </li>

                            </ul>

                            <ul className="dropdown-panel-list">

                                <li className="menu-title">
                                    <Link href="#">Women's</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Formal</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Casual</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Perfume</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Cosmetics</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Bags</Link>
                                </li>

                            </ul>

                            <ul className="dropdown-panel-list">

                                <li className="menu-title">
                                    <Link href="#">Daily Essentials</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Dairy</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Fruits</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Drinks</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Consumables</Link>
                                </li>

                                <li className="panel-list-item">
                                    <Link href="#">Medicines</Link>
                                </li>

                            </ul>
                        </div>
                    </li>

                    <li className="menu-category">
                        <Link href="#" className="menu-title">Gaming</Link>

                        <ul className="dropdown-list">

                            <li className="dropdown-item">
                                <Link href="#">Controllers</Link>
                            </li>

                            <li className="dropdown-item">
                                <Link href="#">Ipad</Link>
                            </li>

                            <li className="dropdown-item">
                                <Link href="#">Earphones</Link>
                            </li>

                            <li className="dropdown-item">
                                <Link href="#">Glasses</Link>
                            </li>

                        </ul>
                    </li>

                    <li className="menu-category">
                        <Link href="#" className="menu-title">Furniture</Link>

                        <ul className="dropdown-list">

                            <li className="dropdown-item">
                                <Link href="#">Table&apos;s</Link>
                            </li>

                            <li className="dropdown-item">
                                <Link href="#">Bed&apos;s</Link>
                            </li>

                            <li className="dropdown-item">
                                <Link href="#">Sofa&apos;s</Link>
                            </li>

                            <li className="dropdown-item">
                                <Link href="#">Chair&apos;s</Link>
                            </li>

                        </ul>
                    </li>

                    <li className="menu-category">
                        <Link href="#" className="menu-title">Jewelry</Link>

                        <ul className="dropdown-list">

                            <li className="dropdown-item">
                                <Link href="#">Earrings</Link>
                            </li>

                            <li className="dropdown-item">
                                <Link href="#">Couple Rings</Link>
                            </li>

                            <li className="dropdown-item">
                                <Link href="#">Necklace</Link>
                            </li>

                            <li className="dropdown-item">
                                <Link href="#">Bracelets</Link>
                            </li>

                        </ul>
                    </li>

                    <li className="menu-category">
                        <Link href="#" className="menu-title">Hot Offers</Link>
                    </li>

                </ul>

            </div>

        </nav>
    )
}

export default DesktopNav