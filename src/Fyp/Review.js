import React from "react";
import "./Review.css";
import { BsStarFill } from "react-icons/bs";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
function ReviewFromClients() {
  return (
    <>
      <div className="reviewMain-box">
        <div className="review-heading">
          <p>Over 200,000 user recommendations</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <div className="left-arrow ">
                <CiCircleChevLeft size={30} />
              </div>
            </div>
            <div className="col-md-10">
              <div className="reviews-boxes">
                <div className="flex-box mx-2">
                  <div
                    class="card review-cards"
                    style={{ width: " 18rem", height: "260px" }}
                  >
                    <div class="card-body">
                      <h5 class="card-title p-1 ">
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                      </h5>

                      <p class="card-text">
                        "Literally the best website to book the appointments
                        online for Doctors. The service is great, helpline guys
                        are very cooperative and understanding. And I don't have
                        to hassle through different hospitals anymore now."
                      </p>
                    </div>
                  </div>
                  <div className="user-img"></div>
                </div>
                <div className="flex-box mx-2">
                  <div
                    class="card review-cards"
                    style={{ width: " 18rem", height: "260px" }}
                  >
                    <div class="card-body">
                      <h5 class="card-title p-1 ">
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                      </h5>

                      <p class="card-text">
                        "Literally the best website to book the appointments
                        online for Doctors. The service is great, helpline guys
                        are very cooperative and understanding. And I don't have
                        to hassle through different hospitals anymore now."
                      </p>
                    </div>
                  </div>
                  <div className="user-img"></div>
                </div>
                <div className="flex-box mx-2">
                  <div
                    class="card review-cards"
                    style={{ width: " 18rem", height: "260px" }}
                  >
                    <div class="card-body">
                      <h5 class="card-title p-1 ">
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                      </h5>

                      <p class="card-text">
                        "Literally the best website to book the appointments
                        online for Doctors. 
                      </p>
                    </div>
                  </div>
                  <div className="user-img"></div>
                </div>
                <div className="flex-box mx-2">
                  <div
                    class="card review-cards"
                    style={{ width: " 18rem", height: "260px" }}
                  >
                    <div class="card-body">
                      <h5 class="card-title p-1 ">
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                        <BsStarFill color="#ff9e15" />
                      </h5>

                      <p class="card-text">
                        "Literally the best website to book the appointments
                        online for Doctors. The service is great, helpline guys
                        are very cooperative and understanding. And I don't have
                        to hassle through different hospitals anymore now."
                      </p>
                    </div>
                  </div>
                  <div className="user-img"></div>
                </div>
              </div>
            </div>
            <div className="col-md-1 d-flex justify-content-end">
              <div className="right-arrow">
                <CiCircleChevRight size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewFromClients;
