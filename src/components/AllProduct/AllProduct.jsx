import React, { Component } from "react";
import "./allProduct.scss";
import IndividualProduct from "../IndividualProduct/IndividualProduct";
import Title from "../Title/Title";
import { ProductConsumer } from "../../context";

class AllProducts extends Component {
  render() {
    return (
      <>
        <section id="allProducts">
          <div className="container mx-auto">
            {/* title here */}
            <Title title={"Our"} titleTwo={" Products"} />
            {/* all products of list */}
            <div className="flex flex-wrap">
              <ProductConsumer>
                {(value) => {
                  return (
                    <>
                      {value.products.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="xl:w-3/12 lg:w-6/12 md:6/12 sm:w-full w-full"
                          >
                            {/* <NavLink to={`/details/${item.id.toString()}`}> */}
                            <IndividualProduct {...item} />
                            {/* </NavLink> */}
                          </div>
                        );
                      })}
                    </>
                  );
                }}
              </ProductConsumer>
            </div>
          </div>
        </section>
        <div></div>
      </>
    );
  }
}

export default AllProducts;
