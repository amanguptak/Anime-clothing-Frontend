import React from "react";
import styles from "./carousel.module.scss";
import Link from "next/link";
const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={styles.banner}>
              <div className={styles.slogan}>
                <h1>
                  Welcome to <span>AnimeUchiha</span>{" "}
                </h1>
                <p>Where You will get Anime Merchendise on Resonable Pice</p>

                <button class={styles.btn} type="button"  onClick={() => {
                    let access = document.getElementById("shop-now");

                    access.scrollIntoView(
                      { behavior: "smooth", block: "start", inline: "start" },
                      true
                    );
                  }} >Shop now </button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className={styles.banner1}>
              <div className={styles.slogan1}>
                <h1>
                  <span> Buy Your Favroutie</span>{" "}
                </h1>
                <h4>
                  <span>Anime</span>T-SHIRTS
                </h4>

                <button class={styles.btn} onClick={() => {
                    let access = document.getElementById("shop-now");

                    access.scrollIntoView(
                      { behavior: "smooth", block: "start", inline: "start" },
                      true
                    );
                  }} > Buy Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className={styles.banner2}>
              <div className={styles.slogan2}>
                <h1>
                  <span> Buy Your Favroutie</span>{" "}
                </h1>
                <h4>
                  <span>Marvel</span>T-SHIRTS
                </h4>

                <button class={styles.btn} onClick={() => {
                    let access = document.getElementById("shop-now");

                    access.scrollIntoView(
                      { behavior: "smooth", block: "start", inline: "start" },
                      true
                    );
                  }} > Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          style={{marginTop:"5rem"}}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          style={{marginTop:"5rem"}}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;
