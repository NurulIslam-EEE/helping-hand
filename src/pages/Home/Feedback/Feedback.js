import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/feedback")
      .then((res) => setFeedback(res.data));
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  console.log(feedback);
  return (
    <div className="client-review py-5 text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="title mb-5">
              <h2 className="">Our Events Feedback</h2>
              <p>Our Events feedback are here. All feedback added here.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <Slider {...settings}>
              {feedback?.map((pd) => (
                <div key={pd._id} className="text-area border">
                  <h5>{pd.name}</h5>
                  <p style={{ fontSize: "20px" }}>{pd.feedback.slice(0,200)}</p>
                  <p>
                    <Rating
                      initialRating={pd.rating}
                      emptySymbol={<FaRegStar />}
                      fullSymbol={<FaStar />}
                      readonly
                    ></Rating>
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
