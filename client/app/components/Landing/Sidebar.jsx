"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoAdd, IoRemove } from 'react-icons/io5'

const Sidebar = () => {
    const [itemActive, setItemActive] = useState(0);
    const sidebarProducts = [
        {
            "category": "Clothes",
            "img": "dress.svg",
            "products": [
                {
                    "name": "Shirt",
                    "count": "300"
                },
                {
                    "name": "Shorts & Jeans",
                    "count": "200"
                },
                {
                    "name": "Jackets",
                    "count": "50"
                },
                {
                    "name": "Dress & Frock",
                    "count": "87"
                },
            ]
        },
        {
            "category": "Jewelry",
            "img": "jewelry.svg",
            "products": [
                {
                    "name": "Earrings",
                    "count": "46"
                },
                {
                    "name": "Couple Rings",
                    "count": "200"
                },
                {
                    "name": "Necklace",
                    "count": "61"
                },
            ]
        },
        {
            "category": "Footwears",
            "img": "shoes.svg",
            "products": [
                {
                    "name": "Sports",
                    "count": "100"
                },
                {
                    "name": "Formal",
                    "count": "200"
                },
                {
                    "name": "Casual",
                    "count": "50"
                },
                {
                    "name": "Safety Shoes",
                    "count": "87"
                },
            ]
        },
        {
            "category": "Perfume",
            "img": "perfume.svg",
            "products": [
                {
                    "name": "Cloths Perfumes",
                    "count": "12 pcs"
                },
                {
                    "name": "Deoderant",
                    "count": "60 pcs"
                },
            ]
        },
        {
            "category": "Glasses",
            "img": "glasses.svg",
            "products": [
                {
                    "name": "Sunglasses",
                    "count": "68"
                },
                {
                    "name": "Lenses",
                    "count": "46"
                },
                {
                    "name": "Body Wash",
                    "count": "79"
                },
                {
                    "name": "Makeup Kit",
                    "count": "73"
                },
            ]
        },
        {
            "category": "Cosmetics",
            "img": "cosmetics.svg",
            "products": [
                {
                    "name": "Shampoo",
                    "count": "68"
                },
                {
                    "name": "Sunscreen",
                    "count": "46"
                },
                {
                    "name": "Body Wash",
                    "count": "79"
                },
                {
                    "name": "Makeup Kit",
                    "count": "73"
                },
            ]
        },
        {
            "category": "Bags",
            "img": "bag.svg",
            "products": [
                {
                    "name": "Shopping Bag",
                    "count": "68"
                },
                {
                    "name": "Gym Backpack",
                    "count": "46"
                },
                {
                    "name": "Purse",
                    "count": "79"
                },
                {
                    "name": "Wallet",
                    "count": "73"
                },
            ]
        },
    ]
    return (
        <div className="sidebar has-scrollbar">
            <div className="sidebar-category">

                <div className="sidebar-top">
                    <h2 className="sidebar-title">Category</h2>
                    <button className="sidebar-close-btn" data-mobile-menu-close-btn="">
                        <ion-icon name="close-outline" />
                    </button>
                </div>

                <ul className="sidebar-menu-category-list">
                    {
                        sidebarProducts.map((sidebar, i) => {
                            return <div key={i}>
                                <li className="sidebar-menu-category">
                                    <button className="sidebar-accordion-menu"
                                        onClick={() => {
                                            itemActive !== i + 1 ? setItemActive(i + 1) : setItemActive(0)
                                        }}
                                    >
                                        <div className="menu-title-flex">
                                            <Image
                                                src={`/images/icons/${sidebar.img}`}
                                                alt={sidebar.category}
                                                width={20}
                                                height={20}
                                                className="menu-title-img"
                                            />
                                            <p className="menu-title">{sidebar.category}</p>
                                        </div>
                                        <div className='text-[#454545]'>
                                            <IoAdd className={`${itemActive === i + 1 ? "hidden" : "block"} add-icon`} />
                                            <IoRemove className={`${itemActive === i + 1 ? "block" : "hidden"} remove-icon`} />
                                        </div>
                                    </button>
                                    <ul className={`sidebar-submenu-category-list ${itemActive === i + 1 && "block" }`}>
                                        {
                                            sidebar.products.map((product,indx) => {
                                                return <li key={product + indx} className="sidebar-submenu-category">
                                                    <Link href="#" className="sidebar-submenu-title">
                                                        <p className="product-name">{product.name}</p>
                                                        <data value={product.count} className="stock" title="Available Stock">
                                                            {product.count}
                                                        </data>
                                                    </Link>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </li>
                            </div>
                        })
                    }
                </ul>
            </div>

            {/* Best Sellers */}
            <div className="product-showcase">
                <h3 className="showcase-heading">best sellers</h3>
                <div className="showcase-wrapper">
                    <div className="showcase-container">
                        <div className="showcase">
                            <a href="#" className="showcase-img-box">
                                <Image
                                    src="/images/products/1.jpg"
                                    alt="baby fabric shoes"
                                    width={75}
                                    height={75}
                                    className="showcase-img"
                                />
                            </a>
                            <div className="showcase-content">
                                <a href="#">
                                    <h4 className="showcase-title">baby fabric shoes</h4>
                                </a>
                                <div className="price-box">
                                    <del>$5.00</del>
                                    <p className="price">$4.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <a href="#" className="showcase-img-box">
                                <Image
                                    src="/images/products/2.jpg"
                                    alt="men's hoodies t-shirt"
                                    className="showcase-img"
                                    width={75}
                                    height={75}
                                />
                            </a>
                            <div className="showcase-content">
                                <a href="#">
                                    <h4 className="showcase-title">men's hoodies t-shirt</h4>
                                </a>
                                <div className="price-box">
                                    <del>$17.00</del>
                                    <p className="price">$7.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <a href="#" className="showcase-img-box">
                                <Image
                                    src="/images/products/3.jpg"
                                    alt="girls t-shirt"
                                    className="showcase-img"
                                    width={75}
                                    height={75}
                                />
                            </a>
                            <div className="showcase-content">
                                <a href="#">
                                    <h4 className="showcase-title">girls t-shirt</h4>
                                </a>
                                <div className="price-box">
                                    <del>$5.00</del>
                                    <p className="price">$3.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <a href="#" className="showcase-img-box">
                                <Image
                                    src="/images/products/4.jpg"
                                    alt="woolen hat for men"
                                    className="showcase-img"
                                    width={75}
                                    height={75}
                                />
                            </a>
                            <div className="showcase-content">
                                <a href="#">
                                    <h4 className="showcase-title">woolen hat for men</h4>
                                </a>
                                <div className="price-box">
                                    <del>$15.00</del>
                                    <p className="price">$12.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar