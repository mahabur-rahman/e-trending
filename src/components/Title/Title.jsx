import React from "react";

const Title = (props) => {
  return (
    <>
      <div className="text-black text-center font-bold capitalize">
        <h2 className="text-6xl">
          {props.title}
          <span style={{ color: "#115147", opacity: ".999" }}>
            {props.titleTwo}
          </span>
        </h2>
      </div>
    </>
  );
};

export default Title;
