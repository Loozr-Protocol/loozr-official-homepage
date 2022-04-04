import React, { useState } from "react";
import UnLoved from "../../assets/img/icon-heart.png";
import Loved from "../../assets/img/icon-heart-full.png";

const LoveIcon = () => {
  const [isLoved, setLove] = useState(false);

  const toggle = () => {
    setLove(!isLoved);
  };

  return (
    <img
      onClick={toggle}
      src={isLoved ? Loved : UnLoved}
      className="ml-4 img-icon"
      alt=""
    />
  );
};

export default LoveIcon;
