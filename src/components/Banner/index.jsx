import React from "react";

const Banner = ({ banner }) => {
  const showBanner = banner.map((info, index) => (
    <section key={index} className={`banner ${info.customClass}`}>
      <img src={info.pic} alt={info.title} />
      <div className="content">
        <h3>{info.title}</h3>
        <p>{info.text}</p>
      </div>
    </section>
  ));

  return <>{showBanner}</>;
};

export default Banner;
