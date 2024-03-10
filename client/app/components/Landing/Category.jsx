import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Category = () => {
    const height = 30, width = 30;
    const items = [
        { "category": "dress", "quantity": "10" },
        { "category": "winters", "quantity": "10" },
        { "category": "glasses", "quantity": "10" },
        { "category": "shorts", "quantity": "10" },
        { "category": "t-shirts", "quantity": "10" },
        { "category": "jacket", "quantity": "10" },
        { "category": "watch", "quantity": "10" },
        { "category": "hat", "quantity": "10" },
    ]
    return (
        <div className="category">
            <div className="container">
                <div className="category-item-container has-scrollbar">
                    {
                        items.map(function (item, index) {
                            return <div key={index} className="category-item">
                                <div className="category-img-box">
                                    <Image
                                        src={`/images/icons/${item.category}.svg`}
                                        alt="dress & frock"
                                        width={width}
                                        height={height}
                                    />
                                </div>
                                <div className="category-content-box">
                                    <div className="category-content-flex">
                                        <h3 className="category-item-title">{item.category.toUpperCase()}</h3>
                                        <p className="category-item-amount">{item.quantity}</p>
                                    </div>
                                    <Link href="#" className="category-btn">
                                        Show all
                                    </Link>
                                </div>
                            </div>
                        })
                    }
                    {/* <div className="category-item">
                        <div className="category-img-box">
                            <Image
                                src="/images/icons/dress.svg"
                                alt="dress & frock"
                                width={width}
                                height={height}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Dress &amp; frock</h3>
                                <p className="category-item-amount">(53)</p>
                            </div>
                            <Link href="#" className="category-btn">
                                Show all
                            </Link>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <Image
                                src="/images/icons/coat.svg"
                                alt="winter wear"
                                width={width}
                                height={height}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Winter wear</h3>
                                <p className="category-item-amount">(58)</p>
                            </div>
                            <Link href="#" className="category-btn">
                                Show all
                            </Link>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <Image
                                src="/images/icons/glasses.svg"
                                alt="glasses & lens"
                                width={width}
                                height={height}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Glasses &amp; lens</h3>
                                <p className="category-item-amount">(68)</p>
                            </div>
                            <Link href="#" className="category-btn">
                                Show all
                            </Link>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src="/images/icons/shorts.svg"
                                alt="shorts & jeans"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Shorts &amp; jeans</h3>
                                <p className="category-item-amount">(84)</p>
                            </div>
                            <Link href="#" className="category-btn">
                                Show all
                            </Link>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src="/images/icons/tee.svg"
                                alt="t-shirts"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">T-shirts</h3>
                                <p className="category-item-amount">(35)</p>
                            </div>
                            <Link href="#" className="category-btn">
                                Show all
                            </Link>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src="/images/icons/jacket.svg"
                                alt="jacket"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Jacket</h3>
                                <p className="category-item-amount">(16)</p>
                            </div>
                            <Link href="#" className="category-btn">
                                Show all
                            </Link>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img src="/images/icons/watch.svg" alt="watch" width={30} />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Watch</h3>
                                <p className="category-item-amount">(27)</p>
                            </div>
                            <Link href="#" className="category-btn">
                                Show all
                            </Link>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src="/images/icons/hat.svg"
                                alt="hat & caps"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Hat &amp; caps</h3>
                                <p className="category-item-amount">(39)</p>
                            </div>
                            <Link href="#" className="category-btn">
                                Show all
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Category