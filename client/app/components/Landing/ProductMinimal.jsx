"use client"
import useGetProductMinimal from '@/app/hooks/getProductMinimal';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ProductMinimal = () => {

    const clothing = [
        {
            productName: "Relaxed Short full Sleeve T-Shirt",
            category: "T-Shirt",
            price: "450",
            discount: "10",
            image: [{
                url: "/images/products/clothes-1.jpg"
            }]
        },
        {
            productName: "Girls pnk Embro design Top",
            category: "Ladies Top",
            price: "610",
            discount: "12",
            image: [{
                url: "/images/products/clothes-2.jpg"
            }]
        },
        {
            productName: "Red Floral Wrap Midi Skirt",
            categoty: "Skirts",
            price: "700",
            discount: "22",
            image: [{
                url: "/images/products/clothes-3(2).jpg"
            }]
        },
        {
            productName: "Sharara Lehenga",
            category: "Womens Fashion",
            price: "7500",
            discount: "17",
            image: [{
                url: "/images/products/clothes-4(2).avif"
            }]
        },
        {
            productName: "Denim Jeans",
            category: "Pants",
            price: "730",
            discount: "14",
            image: [{
                url: "/images/products/clothes-5.jpg"
            }]
        },
        {
            productName: "Waist Coats",
            category: "Coats",
            price: "1200",
            discount: "34",
            image: [{
                url: "/images/products/clothes-6.jpg"
            }]
        },
        {
            productName: "Bridal Suite",
            category: "Wedding",
            price: "18000",
            discount: "22",
            image: [{
                url: "/images/products/clothes-7.jpg"
            }]
        },
        {
            productName: "Denim Jacket",
            category: "Jackets",
            price: "1800",
            discount: "19",
            image: [{
                url: "/images/products/clothes-8.webp"
            }]
        },
    ]

    const footwear = [
        {
            productName: "Running & Trekking Shoes - White",
            category: "Sports",
            price: "490",
            discount: "10",
            image: [{ url: "/images/products/sports-1.jpg" }]
        },
        {
            productName: "Trekking & Running Shoes - black",
            category: "Sports",
            price: "780",
            discount: "17",
            image: [{ url: "/images/products/sports-2.jpg" }]
        },
        {
            productName: "Womens Party Wear Shoes",
            category: "Party wear",
            price: "940",
            discount: "21",
            image: [{ url: "/images/products/party-wear-1.jpg" }]
        },
        {
            productName: "Sports Claw Women's Shoes",
            category: "Sports",
            price: "1500",
            discount: "7",
            image: [{ url: "/images/products/sports-3.jpg" }]
        },
        {
            productName: "Air Trekking Shoes - white",
            category: "Sports",
            price: "7300",
            discount: "17",
            image: [{ url: "/images/products/sports-6.jpg" }]
        },
        {
            productName: "Boot With Suede Detail",
            category: "Boots",
            price: "2500",
            discount: "18",
            image: [{ url: "/images/products/shoe-3.jpg" }]
        },
        {
            productName: "Men's Leather Formal Wear shoes",
            category: "Formal",
            price: "1399",
            discount: "18",
            image: [{ url: "/images/products/shoe-1.jpg" }]
        },
        {
            productName: "Casual Men's Brown shoes",
            category: "Casual",
            price: "2400",
            discount: "13",
            image: [{ url: "/images/products/shoe-2.jpg" }]
        }
    ];

    const accessory = [
        {
            productName: "Pocket Watch Leather Pouch",
            category: "Watches",
            price: "5000",
            discount: "34",
            image: [{
                url: "/images/products/watch-3.jpg"
            }]
        },
        {
            productName: "Silver Deer Heart Necklace",
            category: "Jewellery",
            price: "840",
            discount: "33",
            image: [{
                url: "/images/products/jewellery-3.jpg"
            }]
        },
        {
            productName: "Titan 100 Ml Womens Perfume",
            category: "Perfume",
            price: "760",
            discount: "13",
            image: [{
                url: "/images/products/perfume.jpg"
            }]
        },
        {
            productName: "Men's Leather Reversible Belt",
            category: "Belt",
            price: "240",
            discount: "15",
            image: [{
                url: "/images/products/belt.jpg"
            }]
        },
        {
            productName: "Platinum Zircon Classic Ring",
            category: "Jewellery",
            price: "620",
            discount: "22",
            image: [{
                url: "/images/products/jewellery-2.jpg"
            }]
        },
        {
            productName: "Smart Watch Vital Plus",
            category: "Watches",
            price: "5600",
            discount: "13",
            image: [{
                url: "/images/products/watch-1.jpg"
            }]
        },
        {
            productName: "Shampoo Conditioner Packs",
            category: "Cosmetics",
            price: "100",
            discount: "18",
            image: [{
                url: "/images/products/shampoo.jpg"
            }]
        },
        {
            productName: "Rose Gold Peacock Earrings",
            category: "Jewellery",
            price: "290",
            discount: "18",
            image: [{
                url: "/images/products/jewellery-1.jpg"
            }]
        }
    ];



    const [clothes, setClothes] = useState(clothing);
    const [footwears, setFootWears] = useState(footwear);
    const [accessories, setAccessories] = useState(accessory);

    const { loading, getProducts } = useGetProductMinimal()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setClothes(data.clothes.concat(clothing))
                setFootWears(data.footwears.concat(footwear))
                setAccessories(data.accessories.concat(accessory))
            } catch (e) {
                console.error('Error fetching products:', e);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="product-minimal">
            {/* Clothes */}
            <div className="product-showcase">
                <h2 className="title">Clothes</h2>
                <div className="showcase-wrapper has-scrollbar">
                    {
                        [0, 1].map((i) => (
                            <div key={i} className="showcase-container">
                                {
                                    clothes.slice(i * 4, (i + 1) * 4).map((product, indx) => {
                                        return <div key={indx} className="showcase">
                                            <Link href="#" className="showcase-img-box">
                                                <Image
                                                    src={product.image[0]?.url || clothing[indx].image[0].url}
                                                    alt={product.productName}
                                                    height={30}
                                                    width={70}
                                                    style={{ "maxHeight": "70px", "minWidth": "70px" }}
                                                    className="showcase-img"
                                                />
                                            </Link>
                                            <div className="showcase-content">
                                                <Link href="#">
                                                    <h4 className="showcase-title">
                                                        {product.productName}
                                                    </h4>
                                                </Link>
                                                <Link href="#" className="showcase-category">
                                                    {product.category}
                                                </Link>
                                                <div className="price-box">
                                                    <p className="price">₹{product.price - Math.round((Number(product.discount) * Number(product.price) / 100))}</p>
                                                    <del> ₹{product.price}</del>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Footwears */}
            <div className="product-showcase">
                <h2 className="title">Footwears</h2>
                <div className="showcase-wrapper has-scrollbar">
                    {
                        [0, 1].map((i) => (
                            <div key={i} className="showcase-container">
                                {
                                    footwears.slice(i * 4, (i + 1) * 4).map((product, indx) => {
                                        return <div key={indx} className="showcase">
                                            <Link href="#" className="showcase-img-box">
                                                <Image
                                                    src={product.image[0]?.url || footwears[indx].image[0].url}
                                                    alt={product.productName}
                                                    height={30}
                                                    width={70}
                                                    style={{ "maxHeight": "70px", "minWidth": "70px" }}
                                                    className="showcase-img"
                                                />
                                            </Link>
                                            <div className="showcase-content">
                                                <Link href="#">
                                                    <h4 className="showcase-title">
                                                        {product.productName}
                                                    </h4>
                                                </Link>
                                                <Link href="#" className="showcase-category">
                                                    {product.category}
                                                </Link>
                                                <div className="price-box">
                                                    <p className="price">₹{product.price - Math.round((Number(product.discount) * Number(product.price) / 100))}</p>
                                                    <del> ₹{product.price}</del>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Accessories */}
            <div className="product-showcase">
                <h2 className="title">Accessories</h2>
                <div className="showcase-wrapper has-scrollbar">
                    {
                        [0, 1].map((i) => (
                            <div key={i} className="showcase-container">
                                {
                                    accessories.slice(i * 4, (i + 1) * 4).map((product, indx) => {
                                        return <div key={indx} className="showcase">
                                            <Link href="#" className="showcase-img-box">
                                                <Image
                                                    src={product.image[0]?.url || accessories[indx].image[0].url}
                                                    alt={product.productName}
                                                    height={30}
                                                    width={70}
                                                    style={{ "maxHeight": "70px", "minWidth": "70px" }}
                                                    className="showcase-img"
                                                />
                                            </Link>
                                            <div className="showcase-content">
                                                <Link href="#">
                                                    <h4 className="showcase-title">
                                                        {product.productName}
                                                    </h4>
                                                </Link>
                                                <Link href="#" className="showcase-category">
                                                    {product.category}
                                                </Link>
                                                <div className="price-box">
                                                    <p className="price">₹{product.price - Math.round((Number(product.discount) * Number(product.price) / 100))}</p>
                                                    <del> ₹{product.price}</del>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductMinimal