import React from "react";
import Image from "next/image";

const S1_text_group = (props) => {
  return (
    <div className="max-w-[400px]">
      <div className="flex items-end">
        <Image
          className="icon_glow"
          src={props.icon}
          width={54}
          height={54}
          alt={"bitch"}
        />
        <h2 className="heading ml-[1.5rem]">{props.heading}</h2>
      </div>

      <p className="body mt-[2rem]">{props.body}</p>
    </div>
  );
};

export default S1_text_group;
