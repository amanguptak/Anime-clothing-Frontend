import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./catogeris.module.scss";
const ImageSlider = () => {
  return (
    <>
      <h3 className={styles.heading}>TRENDING CATEGORIES</h3>
      <div className={styles.SlideShow}>
        {itemData.map((item, index) => (
          <div key={index} className="shadow p-3 ">
            <img src={item.image} className={styles.cardImg} alt="" />
            <p className={styles.trend}>{item.trend}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageSlider;

const itemData = [
  {
    image:
      "https://thesagacity.s3.ap-south-1.amazonaws.com/media/Itadori_x_Sukuna_back_HX4Qh8i.webp",
    title: "trending Products",
    trend: "OVERSIZED ANIME T-SHIRTS",
  },
  {
    image:
      "https://i1.adis.ws/i/boohooamplience/bmm31578_black_xl?$product_image_main_mobile$&fmt=webp",
    title: "trending Products",
    trend: "MARVEL T-SHIRTS",
  },
  {
    image: "https://www.trendingus.com/wp-content/uploads/2021/05/9-1.jpg",
    title: "trending Products",
    trend: "NEW ARRIVAL",
  },
  {
    image:
      "https://www.copycatz.in/wp-content/uploads/2022/03/itachi-uchicha-naruto-tshirt-974962.jpg",
    title: "trending Products",
    trend: "ANIME T-SHIRTS",
  },
];
