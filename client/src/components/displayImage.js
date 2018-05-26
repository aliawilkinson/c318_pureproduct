import React, { Component } from 'react';
import '../assets/css/displayImage.css';
import Image_1 from '../assets/images/displayImages/Image_1.png';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';
import foundation_alt_img from '../assets/images/landing_page_icons/foundation_alt_image.jpg';
import { Link } from 'react-router-dom';

export default class DisplayImage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            product:
                {
                    Cruelty_Free: "N/A",
                    Vegan: "N/A",
                    brand: "N/A",
                    categories: "N/A",
                    gentle_avg_rating: "N/A",
                    img_src: foundation_alt_img,
                    price: "N/A",
                    product_id: "N/A",
                    product_name: "N/A",
                    rating: "N/A",
                    safety_avg_rating: "N/A"
                },
        }
    }
    render() {
        if (!this.props || this.state.product === false) {
            return (<div>no product specified</div>)
        } else {
            const { product_name, brand, price, img_src, categories, product_id, gentle_avg_rating, safety_avg_rating, rating } = this.props.product;
            const { displayCont, imgProductPage, heartIcon, crossIcon, gentleRating, safetyRating } = this.props.className;
            const image = "/product_images/" + categories + "/" + product_id + "/" + img_src;
            return (
                <Link to={"/product/" + product_id}>
                    <div className={displayCont}>
                        <div className={imgProductPage} style={{ backgroundImage: `url(${image})` }}>
                            <div className="display-cont">
                                <div className="icon-cont">
                                    <img className={heartIcon} src={CompoundPath_1} />
                                    <span className={gentleRating}>{gentle_avg_rating}</span>
                                </div>
                                <div className="icon-cont">
                                    <img className={crossIcon} src={Group_1} />
                                    <span className={safetyRating}>{safety_avg_rating}</span>
                                </div>
                            </div>
                            <span>average user rating: {rating}</span>
                            <h3 className='product-name'>
                                <span className="hidden">
                                    Brand:
                        </span>
                                <span className="brand-text">
                                    {brand}
                                </span>
                            </h3>
                            <h1 className='product-name'>
                                <span className="hidden">
                                    Product Name:
                        </span>
                                <span className="product-name-text">
                                    {product_name}
                                </span>
                            </h1>
                            <h3 className='product-name'>
                                <span className="hidden">
                                    Price:
                        </span>
                                <span className="price-text">
                                    MSRP: ${price}
                                </span>
                            </h3>
                            <h3 className='product-name hidden'>
                                {categories}
                            </h3>
                        </div>
                    </div >
                </Link>
            )
        };
    };
};

