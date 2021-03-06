import React from "react";
import "./featuresPage.css";

const Features = props => {
  return (
    <div className="jd-feature-container">
      <div className="jd-sub-wrapper">
        <div className="jd-sub-one">
          <h1>Fed up with the traditional storage model?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent auctor quis lorem sit amet varius. Sed vulputate odio vitae justo scelerisque congue.
            Integer suscipit quam sed nunc accumsan iaculis. Duis auctor neque justo, quis semper enim hendrerit vehicula.
            Praesent auctor quis lorem sit amet varius. Sed vulputate odio vitae justo scelerisque congue.
        </p>
        </div>
        <img src="../../assets/badStorage.jpg" className="jd-sub-img-one"></img>
      </div>

      <div className="jd-sub-wrapper">
        <div className="jd-sub-two">
          <h1>Search listings Nationwide</h1>
          <p>
            Praesent auctor quis lorem sit amet varius. Sed vulputate odio vitae justo scelerisque congue.
            Integer suscipit quam sed nunc accumsan iaculis. Duis auctor neque justo, quis semper enim hendrerit vehicula.
            Praesent auctor quis lorem sit amet varius. Sed vulputate odio vitae justo scelerisque congue.
            Integer suscipit quam sed nunc accumsan iaculis. Duis auctor neque justo, quis semper enim hendrerit vehicula.
        </p>
        </div>
        <img src="../../assets/nationwide.jpg" className="jd-sub-img-two"></img>
      </div>

      <div className="jd-sub-wrapper">
        <div className="jd-sub-three">
          <h1>Reach and connect with others with ease</h1>
          <p>
            Praesent auctor quis lorem sit amet varius. Sed vulputate odio vitae justo scelerisque congue.
            Integer suscipit quam sed nunc accumsan iaculis.
            Duis auctor neque justo, quis semper enim hendrerit vehicula.
            Praesent auctor quis lorem sit amet varius. Sed vulputate odio vitae justo scelerisque congue.
            Integer suscipit quam sed nunc accumsan iaculis. Duis auctor neque justo, quis semper enim hendrerit vehicula.
        </p>
        </div>
        <img src="../../assets/connect.jpg" className="jd-sub-img-three"></img>
      </div>

      <div className="jd-sub-wrapper">
        <div className="jd-sub-four">
          <h1>Every listing is verified and vetted for your peace of mind</h1>
          <p>
            Praesent auctor quis lorem sit amet varius. Sed vulputate odio vitae justo scelerisque congue.
            Integer suscipit quam sed nunc accumsan iaculis.
            Duis auctor neque justo, quis semper enim hendrerit vehicula.
            Praesent auctor quis lorem sit amet varius. Sed vulputate odio vitae justo scelerisque congue.
            Integer suscipit quam sed nunc accumsan iaculis.
        </p>
        </div>
        <img src="../../assets/happy.jpg" className="jd-sub-img-four"></img>
      </div>
    </div>
  );
};

export default Features;
