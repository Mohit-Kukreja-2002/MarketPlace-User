"use client"
import useGetSidebarProducts from '@/app/hooks/getSidebarProducts'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoAdd, IoRemove } from 'react-icons/io5'

const Sidebar = () => {
    const [itemActive, setItemActive] = useState(0);
    const { loading, getProducts } = useGetSidebarProducts();
    const [products, setProducts] = useState({});

    // Call getProducts when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getProducts();
                setProducts(products || {});
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, []);

    const sidebarProducts = {
        "Clothes": {
            "Shirt": "300",
            "Shorts_Jeans": "200",
            "Jackets": "50",
            "Dress_Frock": "87"
        },
        "Bags": {
            "Shopping Bag": "68",
            "Gym Backpack": "46",
            "Purse": "79",
            "Wallet": "73"
        },
        "Jewelry": {
            "Earrings": "46",
            "Couple Rings": "200",
            "Necklace": "61"
        },
        "Footwears": {
            "Sports": "100",
            "Formal": "200",
            "Casual": "50",
            "Safety Shoes": "87"
        },
        "Cosmetics": {
            "Shampoo": "68",
            "Sunscreen": "46",
            "Body Wash": "79",
            "Makeup Kit": "73"
        },
        "Glasses": {
            "Sunglasses": "68",
            "Lenses": "46",
            "Body Wash": "79",
            "Makeup Kit": "73"
        },
        "Perfume": {
            "Cloths Perfumes": "12 pcs",
            "Deoderant": "60 pcs"
        },
    };
    
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
                        Object.entries(Object.entries(products).length > 0 ? products : sidebarProducts).map(([category, productList], i) => {
                            return <div key={i}>
                                <li className="sidebar-menu-category">
                                    <button className="sidebar-accordion-menu"
                                        onClick={() => {
                                            itemActive !== i + 1 ? setItemActive(i + 1) : setItemActive(0)
                                        }}
                                    >
                                        <div className="menu-title-flex">
                                            <Image
                                                src={`/images/icons/${category.toLowerCase()}.svg`}
                                                alt={category}
                                                width={20}
                                                height={20}
                                                className="menu-title-img"
                                            />
                                            <p className="menu-title">{category}</p>
                                        </div>
                                        <div className='text-[#454545]'>
                                            <IoAdd className={`${itemActive === i + 1 ? "hidden" : "block"} add-icon`} />
                                            <IoRemove className={`${itemActive === i + 1 ? "block" : "hidden"} remove-icon`} />
                                        </div>
                                    </button>
                                    <ul className={`sidebar-submenu-category-list ${itemActive === i + 1 && "block"}`}>
                                        {
                                            Object.entries(productList).map(([productName, count], indx) => {
                                                return <li key={category + indx} className="sidebar-submenu-category">
                                                    <Link href="#" className="sidebar-submenu-title">
                                                        <p className="product-name">{productName}</p>
                                                        <data value={count} className="stock" title="Available Stock">
                                                            {count}
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