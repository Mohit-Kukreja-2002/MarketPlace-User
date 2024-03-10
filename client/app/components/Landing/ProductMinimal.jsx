import Link from 'next/link'
import React from 'react'

const ProductMinimal = () => {
    return (
        <div className="product-minimal">
            {/* New Arrivals */}
            <div className="product-showcase">
                <h2 className="title">New Arrivals</h2>
                <div className="showcase-wrapper has-scrollbar">
                    <div className="showcase-container">
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/clothes-1.jpg"
                                    alt="relaxed short full sleeve t-shirt"
                                    width={70}
                                    className="showcase-img"
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Relaxed Short full Sleeve T-Shirt
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Clothes
                                </Link>
                                <div className="price-box">
                                    <p className="price">$45.00</p>
                                    <del>$12.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/clothes-2.jpg"
                                    alt="girls pink embro design top"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Girls pnk Embro design Top
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Clothes
                                </Link>
                                <div className="price-box">
                                    <p className="price">$61.00</p>
                                    <del>$9.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/clothes-3.jpg"
                                    alt="black floral wrap midi skirt"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Black Floral Wrap Midi Skirt
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Clothes
                                </Link>
                                <div className="price-box">
                                    <p className="price">$76.00</p>
                                    <del>$25.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/shirt-1.jpg"
                                    alt="pure garment dyed cotton shirt"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Pure Garment Dyed Cotton Shirt
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Mens Fashion
                                </Link>
                                <div className="price-box">
                                    <p className="price">$68.00</p>
                                    <del>$31.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showcase-container">
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/jacket-5.jpg"
                                    alt="men yarn fleece full-zip jacket"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        MEN Yarn Fleece Full-Zip Jacket
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Winter wear
                                </Link>
                                <div className="price-box">
                                    <p className="price">$61.00</p>
                                    <del>$11.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/jacket-1.jpg"
                                    alt="mens winter leathers jackets"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Mens Winter Leathers Jackets
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Winter wear
                                </Link>
                                <div className="price-box">
                                    <p className="price">$32.00</p>
                                    <del>$20.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/jacket-3.jpg"
                                    alt="mens winter leathers jackets"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Mens Winter Leathers Jackets
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Jackets
                                </Link>
                                <div className="price-box">
                                    <p className="price">$50.00</p>
                                    <del>$25.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/shorts-1.jpg"
                                    alt="better basics french terry sweatshorts"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Better Basics French Terry Sweatshorts
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Shorts
                                </Link>
                                <div className="price-box">
                                    <p className="price">$20.00</p>
                                    <del>$10.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending */}
            <div className="product-showcase">
                <h2 className="title">Trending</h2>
                <div className="showcase-wrapper has-scrollbar">
                    <div className="showcase-container">
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/sports-1.jpg"
                                    alt="running & trekking shoes - white"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Running &amp; Trekking Shoes - White
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Sports
                                </Link>
                                <div className="price-box">
                                    <p className="price">$49.00</p>
                                    <del>$15.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/sports-2.jpg"
                                    alt="trekking & running shoes - black"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Trekking &amp; Running Shoes - black
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Sports
                                </Link>
                                <div className="price-box">
                                    <p className="price">$78.00</p>
                                    <del>$36.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/party-wear-1.jpg"
                                    alt="womens party wear shoes"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Womens Party Wear Shoes
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Party wear
                                </Link>
                                <div className="price-box">
                                    <p className="price">$94.00</p>
                                    <del>$42.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/sports-3.jpg"
                                    alt="sports claw women's shoes"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Sports Claw Women's Shoes
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Sports
                                </Link>
                                <div className="price-box">
                                    <p className="price">$54.00</p>
                                    <del>$65.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showcase-container">
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/sports-6.jpg"
                                    alt="air tekking shoes - white"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Air Trekking Shoes - white
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Sports
                                </Link>
                                <div className="price-box">
                                    <p className="price">$52.00</p>
                                    <del>$55.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/shoe-3.jpg"
                                    alt="Boot With Suede Detail"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">Boot With Suede Detail</h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    boots
                                </Link>
                                <div className="price-box">
                                    <p className="price">$20.00</p>
                                    <del>$30.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/shoe-1.jpg"
                                    alt="men's leather formal wear shoes"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Men's Leather Formal Wear shoes
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    formal
                                </Link>
                                <div className="price-box">
                                    <p className="price">$56.00</p>
                                    <del>$78.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/shoe-2.jpg"
                                    alt="casual men's brown shoes"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Casual Men's Brown shoes
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Casual
                                </Link>
                                <div className="price-box">
                                    <p className="price">$50.00</p>
                                    <del>$55.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Arrival */}
            <div className="product-showcase">
                <h2 className="title">Top Rated</h2>
                <div className="showcase-wrapper has-scrollbar">
                    <div className="showcase-container">
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/watch-3.jpg"
                                    alt="pocket watch leather pouch"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Pocket Watch Leather Pouch
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Watches
                                </Link>
                                <div className="price-box">
                                    <p className="price">$50.00</p>
                                    <del>$34.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/jewellery-3.jpg"
                                    alt="silver deer heart necklace"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Silver Deer Heart Necklace
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Jewellery
                                </Link>
                                <div className="price-box">
                                    <p className="price">$84.00</p>
                                    <del>$30.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/perfume.jpg"
                                    alt="titan 100 ml womens perfume"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Titan 100 Ml Womens Perfume
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Perfume
                                </Link>
                                <div className="price-box">
                                    <p className="price">$42.00</p>
                                    <del>$10.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/belt.jpg"
                                    alt="men's leather reversible belt"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Men's Leather Reversible Belt
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Belt
                                </Link>
                                <div className="price-box">
                                    <p className="price">$24.00</p>
                                    <del>$10.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showcase-container">
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/jewellery-2.jpg"
                                    alt="platinum zircon classic ring"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        platinum Zircon Classic Ring
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    jewellery
                                </Link>
                                <div className="price-box">
                                    <p className="price">$62.00</p>
                                    <del>$65.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/watch-1.jpg"
                                    alt="smart watche vital plus"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Smart watche Vital Plus
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    Watches
                                </Link>
                                <div className="price-box">
                                    <p className="price">$56.00</p>
                                    <del>$78.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/shampoo.jpg"
                                    alt="shampoo conditioner packs"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        shampoo conditioner packs
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    cosmetics
                                </Link>
                                <div className="price-box">
                                    <p className="price">$20.00</p>
                                    <del>$30.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src="/images/products/jewellery-1.jpg"
                                    alt="rose gold peacock earrings"
                                    className="showcase-img"
                                    width={70}
                                />
                            </Link>
                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        Rose Gold Peacock Earrings
                                    </h4>
                                </Link>
                                <Link href="#" className="showcase-category">
                                    jewellery
                                </Link>
                                <div className="price-box">
                                    <p className="price">$20.00</p>
                                    <del>$30.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductMinimal