"use client"
import useGetCategories from '@/app/hooks/getCategories';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Category = () => {
    const height = 30, width = 30;
    const items = {
        "Clothes": "196",
        "Winters": "170",
        "Glasses": "120",
        "Shorts": "103",
        "Watch": "110",
        "Hat": "104",
        "Perfume": "56",
        "Shoes": "176",
    }

    const [categories, setCategories] = useState({})
    const { loading, getCategories } = useGetCategories();

    useEffect(() => {
        async function fetchData() {
            try {
                const categories = await getCategories();
                setCategories(categories || {});
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchData();
    })

    return (
        <div className="category">
            <div className="container">
                <div className="category-item-container has-scrollbar">
                    {
                        Object.entries(Object.entries(categories).length > 0 ? categories : items).map(function ([category, quantity], index) {
                            return <div key={index} className="category-item">
                                <div className="category-img-box">
                                    <Image
                                        src={`/images/icons/${category.toLowerCase()}.svg`}
                                        alt={category}
                                        width={width}
                                        height={height}
                                    />
                                </div>
                                <div className="category-content-box">
                                    <div className="category-content-flex">
                                        <h3 className="category-item-title">{category.toUpperCase()}</h3>
                                        <p className="category-item-amount">{quantity}</p>
                                    </div>
                                    <Link href="#" className="category-btn">
                                        Show all
                                    </Link>
                                </div>
                            </div>
                        })
                        // items.map(function (item, index) {
                        //     return <div key={index} className="category-item">
                        //         <div className="category-img-box">
                        //             <Image
                        //                 src={`/images/icons/${item.category}.svg`}
                        //                 alt="dress & frock"
                        //                 width={width}
                        //                 height={height}
                        //             />
                        //         </div>
                        //         <div className="category-content-box">
                        //             <div className="category-content-flex">
                        //                 <h3 className="category-item-title">{item.category.toUpperCase()}</h3>
                        //                 <p className="category-item-amount">{item.quantity}</p>
                        //             </div>
                        //             <Link href="#" className="category-btn">
                        //                 Show all
                        //             </Link>
                        //         </div>
                        //     </div>
                        // })
                    }
                </div>
            </div>
        </div>
    )
}

export default Category