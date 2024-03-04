import React from "react";
import Link from "next/link";
const err_404 = () => {
  return (
    <div>
      <section class="page_404">
        <div class="container">
          <div class="row mt-5">
            <div class="col-sm-12 col-xs-12">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost animeUchiha</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link href="/" class="link_404">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default err_404;
