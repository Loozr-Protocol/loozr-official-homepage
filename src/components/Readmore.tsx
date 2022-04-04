import React, { useState } from "react";

const ReadMore = (props: any) => {
  const text = props.text;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="txt">
      {isReadMore ? text.slice(0, 180) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...see more" : " show less"}
      </span>
    </p>
  );
};

export default ReadMore;
