import React from "react";
import "./details.scss";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";

import { storeProducts } from "../../Data/Data";

const Details = () => {
  const { id } = useParams();

  const findItem = storeProducts.find((item) => item.id.toString() === id);
  const { title, img, price, company, info } = findItem;

  return (
    <>
      <section id="details">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="sm:w-full w-full">
              <div className="mainDetails">
                <img src={`/${img}`} alt={title} />
                <div>
                  <h2 className="text-4xl mt-4">{title}</h2>
                  <h4>{price}</h4>
                </div>
                <h2 className="text-red-500">{company} </h2>
                <p className="text-xl">{info}</p>

                {/* back btn / home page */}
                <div>
                  <Button title={"Back"} link={"/"} className="backBtn" />
                  <Button
                    className="addToCartBtn"
                    title={"Add To Cart"}
                    link={"/cart"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
