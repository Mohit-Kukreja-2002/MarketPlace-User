"use client"
import useGetDealOfDay from '@/app/hooks/getDealOfDay';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const DealOfDay = () => {
    const dealsOfTheDay = [
        {
            productName: "Shampoo, Conditioner & Facewash Packs",
            description: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
            price: "150.00",
            discount: "13",
            countdown: {
                hours: 23,
                minutes: 59,
                seconds: 59
            },
            image: [{
                url: "/images/products/shampoo.jpg",
            }]
        },
        {
            productName: "Rose Gold Diamonds Earring",
            description: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
            price: "1990.00",
            discount: "6",
            countdown: {
                hours: 23,
                minutes: 59,
                seconds: 59
            },
            image: [{
                url: "/images/products/jewellery-1.jpg",
            }]
        }
    ];

    const { loading, getProducts } = useGetDealOfDay()

    const [products, setProducts] = useState(dealsOfTheDay);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setProducts(data.concat(dealsOfTheDay))
            } catch (e) {
                console.error('Error fetching products:', e);
            }
        }
        fetchData();
    }, [])
    return (
        <div className="product-featured">
            <h2 className="title">Deal of the day</h2>
            <div className="showcase-wrapper has-scrollbar">
                {
                    [0, 1].map((i) => (
                        <div key={i} className="showcase-container">
                            <div className="showcase">
                                <div className="showcase-banner">
                                    <img
                                        src={products[i].image[0]?.url || dealsOfTheDay[i].image[0].url}
                                        alt={products[i].productName}
                                        className="showcase-img"
                                    />
                                </div>
                                <div className="text-center showcase-content">
                                    {/* <div className="showcase-rating">
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star-outline" />
                                        <ion-icon name="star-outline" />
                                    </div> */}
                                    <a href="#">
                                        <h3 className="showcase-title">
                                            {products[i].productName}
                                        </h3>
                                    </a>
                                    <p className="showcase-desc">
                                        {products[i].description}
                                    </p>
                                    <div className="justify-center price-box">
                                        <p className="price">₹{products[i].price - Math.round((Number(products[i].discount) * Number(products[i].price) / 100))}</p>
                                        <del> ₹{products[i].price}</del>
                                    </div>
                                    <button className="mx-auto add-cart-btn">add to cart</button>
                                    {/* <div className="showcase-status">
                                        <div className="wrapper">
                                            <p>
                                                already sold: <b>20</b>
                                            </p>
                                            <p>
                                                available: <b>40</b>
                                            </p>
                                        </div>
                                        <div className="showcase-status-bar" />
                                    </div> */}
                                    <div className="countdown-box">
                                        <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                                        <div className="justify-center countdown">
                                            {/* <div className="countdown-content">
                                                <p className="display-number">360</p>
                                                <p className="display-text">Days</p>
                                            </div> */}
                                            <div className="countdown-content">
                                                <p className="display-number">{products[i].countdown?.hours || 23}</p>
                                                <p className="display-text">Hours</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{products[i].countdown?.minutes || 59}</p>
                                                <p className="display-text">Min</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{products[i].countdown?.seconds || 59}</p>
                                                <p className="display-text">Sec</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DealOfDay