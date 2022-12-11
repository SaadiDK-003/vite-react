import React from "react";

const TwoCols = ({ twocols }) => {
  const showTwoCols = twocols.map((data, index) => (
    <>
      <section key={index}>
        <div className={`grid-box ${data.customClass}`}>
          <div className="box">
            {data.image.img2 !== "" ? (
              <div className="content">
                <img src={data.image.img2} alt={data.title.t2} />
                <h3>{data.title.t2}</h3>
                <p>{data.text.p2}</p>
              </div>
            ) : (
              <div className="content">
                <img
                  src={data.image.img1}
                  alt={data.title.t1}
                  className={data.image.class1}
                />
              </div>
            )}
          </div>
          <div className="box">
            {data.image.img2 !== "" ? (
              <div className="content">
                <img src={data.image.img1} alt={data.title.t1} />
                <h3>{data.title.t1}</h3>
                <p>{data.text.p1}</p>
              </div>
            ) : (
              <div className="content">
                <h3>{data.title.t1}</h3>
                <p>{data.text.p1}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  ));

  return <>{showTwoCols}</>;
};

export default TwoCols;
