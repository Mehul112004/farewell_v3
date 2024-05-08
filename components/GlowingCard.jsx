import React from "react";
import "../app/card.css";
import Image from "next/image";

function GlowingCard({title,description,image}) {
  return (
    <div class="card sm:w-[30vw] sm:h-[35vh] w-[34vh] h-[22vh] text-white">
      <p className="">{title}</p>
      <div className="image overflow-hidden w-full h-full rounded-3xl flex justify-center items-center">
      <img src={image} className=""/>
      </div>
      <div className="after">
        <p className="text text-sm text-white">{description}</p>
      </div>
    </div>
  );
}

export default GlowingCard;
