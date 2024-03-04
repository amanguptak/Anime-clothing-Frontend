import React, { useState } from "react";
import styles from "./prodImg.module.scss";
const ProdImg = ({images = [{ public_id: "",url: " ",_id: "",}]}) => {
  //   const images = [
  //     {
  //       url: "https://www.jiomart.com/images/product/original/rva1tzre3i/blissink-naruto-itachi-uchiha-front-and-back-printed-black-cotton-tshirt-for-men-product-images-rva1tzre3i-0-202305131244.jpg?im=Resize=(1000,1000)",
  //     },
  //     {
  //       url: "https://www.jiomart.com/images/product/original/rva1tzre3i/blissink-naruto-itachi-uchiha-front-and-back-printed-black-cotton-tshirt-for-men-product-images-rva1tzre3i-1-202305131244.jpg?im=Resize=(1000,1000)",
  //     },
  //     {
  //       url: "https://www.jiomart.com/images/product/original/rva1tzre3i/blissink-naruto-itachi-uchiha-front-and-back-printed-black-cotton-tshirt-for-men-product-images-rva1tzre3i-2-202305131244.jpg?im=Resize=(1000,1000)",
  //     },
  //     {
  //       url: "https://www.jiomart.com/images/product/original/rva1tzre3i/blissink-naruto-itachi-uchiha-front-and-back-printed-black-cotton-tshirt-for-men-product-images-rva1tzre3i-3-202305131244.jpg?im=Resize=(1000,1000)",
  //     },
  //   ];
  const [currImage, setImage] = useState(images[0]);

  return (
    <div className={` ${styles.container} shadow bg-white mb-2 rounded img-fluid`}>
      <div className="row">
        <div className="col-6">
          <img
            src={currImage?.url}
            alt=""
            className={`${styles.mainImg} p-2  img-fluid `}
          />
          <div className={`${styles.smImgContainer} col-6 d-flex mb-2`}>
            {images?.map((image, index) => {
              return (
                <div className="shadow-sm p-1 bg-white rounded">
                  <img
                    src={image?.url}
                    alt=""
                    key={index}
                    className={`${styles.smImages}  rounded`}
                    onClick={() => setImage(image)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdImg;
