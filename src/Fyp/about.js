import React from "react";
import "./about.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiMap, BiMessageDetail } from "react-icons/bi";

import { IoIosCall } from "react-icons/io";
function AboutUs() {
  return (
    <>
      <div className="about-us">
        <div className="main-about">
          <div className="about-main-header ">
            <h1>
              Hey, we're <span className="rounded-pill">pakAdvo.</span>
            </h1>
          </div>
          <div className="about-main-pera">
            <p>
              pakAdvo is Pakistan’s <b>Biggest</b> and
              <b>
                Most <br />
                Trusted
              </b>
              Digital Justice Platform
            </p>
          </div>
        </div>
        <div className="about-pakadvo">
          <div className="container p-4">
            <div className="header-pak">
              <h2>About pakAdvo</h2>
            </div>
            <div className="pera-pak">
              <p>
                oladoc is the #1 <b>digital healthcare platform in Pakistan.</b>
                oladoc helps you <b>find</b> and <br />
                instantly <b>book appointments</b> or
                <b>online video consultations</b> with the
                <b>
                  best doctors in <br />
                  Pakistan.
                </b>
                Our <b>transparent and intuitive platform helps </b> you choose
                the right doctors by <br />
                letting you check up on patient reviews, consultation fees,
                satisfaction scores, and wait <br />
                times.
              </p>
            </div>
          </div>
        </div>
        <div className="our-mission">
          <div className="container py-5">
            <div className="mini-mission">
              <p className="our-mini"> OUR MISSION</p>
            </div>
            <div className="over-mission-para">
              <p>
                Our mission is to make healthcare
                <span className="blue-text">Accessible</span>,<br />
                <span className="blue-text">Transparent</span> &
                <span className="blue-text">Affordable</span> for the people of
                <br />
                Pakistan
              </p>
            </div>
          </div>
        </div>
        <div className="services py-5 ">
          <div className="container ">
            <div className="header-pak">
              <h2>Services</h2>
            </div>
            <div className="pera-pak">
              <p>
                We connect you with the <b>best doctors in Pakistan </b> who are
                experts
                <br />
                in their relevant fields via <b>in-person appointments</b> or
                <b>
                  video
                  <br />
                  consultations.
                </b>
                You can use oladoc to instantly book an <br />
                appointment for a relevant specialty, treatment, hospital, or
                <br />
                lab test
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="list-services">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item border-0 fs-4">
                      <span className="icon me-2">
                        <AiOutlineCheckCircle />
                      </span>
                      24/7 Unlimited consultations
                    </li>
                    <li class="list-group-item border-0 fs-4">
                      <span className="icon me-2">
                        <AiOutlineCheckCircle />
                      </span>
                      Diagnostic lab appointments
                    </li>
                    <li class="list-group-item border-0 fs-4">
                      <span className="icon me-2">
                        <AiOutlineCheckCircle />
                      </span>
                      In-person appointments
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item border-0 fs-4">
                    <span className="icon me-2">
                      <AiOutlineCheckCircle />
                    </span>
                    24/7 Unlimited consultations
                  </li>
                  <li class="list-group-item border-0 fs-4">
                    <span className="icon me-2">
                      <AiOutlineCheckCircle />
                    </span>
                    Diagnostic lab appointments
                  </li>
                  <li class="list-group-item border-0 fs-4">
                    <span className="icon me-2">
                      <AiOutlineCheckCircle />
                    </span>
                    In-person appointments
                  </li>
                </ul>
              </div>
            </div>
            <div className="service-box mt-5">
              <div className="row bg-info">
                <div className="col-md-3 pt-3">
                  <h4>15M+</h4>
                  <p>Users served</p>
                </div>
                <div className="col-md-3 pt-3">
                  <h4>15M+</h4>
                  <p>Users served</p>
                </div>
                <div className="col-md-3 pt-3">
                  <h4>15M+</h4>
                  <p>Users served</p>
                </div>
                <div className="col-md-3 pt-3">
                  <h4>15M+</h4>
                  <p>Users served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-team">
          <div className="container py-4">
            <div className="header-pak">
              <h2>Meet the minds behind pakAdvo</h2>
            </div>
            <div className="row my-4">
              <div className="col-md-3">
                <div class="card card-ceo shadow" style={{ width: "18rem" }}>
                  <img
                    src="https://i0.wp.com/heartafact.com/wp-content/uploads/2022/07/zayn-malik-hair.png?fit=1200%2C675&ssl=1"
                    class="card-img-top"
                    alt="myself"
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Zayn Malik</h5>
                    <p class="card-text">Brand Ambissider</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card card-ceo  shadow" style={{ width: "18rem" }}>
                  <img
                    src="https://i0.wp.com/heartafact.com/wp-content/uploads/2022/07/zayn-malik-hair.png?fit=1200%2C675&ssl=1"
                    class="card-img-top"
                    alt="myself"
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Zayn Malik</h5>
                    <p class="card-text">Brand Ambissider</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card card-ceo  shadow" style={{ width: "18rem" }}>
                  <img
                    src="https://i0.wp.com/heartafact.com/wp-content/uploads/2022/07/zayn-malik-hair.png?fit=1200%2C675&ssl=1"
                    class="card-img-top"
                    alt="myself"
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Zayn Malik</h5>
                    <p class="card-text">Brand Ambissider</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card card-ceo  shadow" style={{ width: "18rem" }}>
                  <img
                    src="https://i0.wp.com/heartafact.com/wp-content/uploads/2022/07/zayn-malik-hair.png?fit=1200%2C675&ssl=1"
                    class="card-img-top"
                    alt="myself"
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Zayn Malik</h5>
                    <p class="card-text">Brand Ambissider</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="office">
          <div className="container py-4">
            <div className="header-pak">
              <h2>Office</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div class="card border-0 shadow" style={{ width: "24rem" }}>
                  <div class="card-body ">
                    <div className="card-header border-0 bg-white">
                      <div className="map pt-2 d-flex justify-content-between">
                        <div className="branch">
                          <h3>Lahore</h3>
                        </div>
                        <div className="or-map">
                          <BiMap size={30} />
                          Map
                        </div>
                        <div className="msg">
                          <BiMessageDetail size={30} />
                        </div>
                        <div className="call">
                          <IoIosCall size={30} />
                        </div>
                      </div>
                    </div>
                    <h5 class="card-text mt-4 ">
                      290 CCA Sector FF, DHA Phase IV, Lahore, Pakistan, 54660
                    </h5>
                    <div className="phone-email mt-5 mb-5 d-flex justify-content-between">
                      <div className="key-word">
                        <h5>Phone :</h5>
                        <h5>Email :</h5>
                      </div>
                      <div className="data">
                        <h5>03429493873</h5>
                        <h5>pakadvo@gmail.com</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="location">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7878.852921888558!2d76.33877892584047!3d35.15625525577026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e4a97624bcbd53%3A0x74c27cafd3aeb90f!2sMasjid%20Sofia%20NoorBakhshia%2C%20Hundili!5e0!3m2!1sen!2s!4v1667242721248!5m2!1sen!2s"
                    width="100%"
                    height="320px"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <div class="card border-0 shadow" style={{ width: "24rem" }}>
                  <div class="card-body ">
                    <div className="card-header border-0 bg-white">
                      <div className="map pt-2 d-flex justify-content-between">
                        <div className="branch">
                          <h3>Lahore</h3>
                        </div>
                        <div className="or-map">
                          <BiMap size={30} />
                          Map
                        </div>
                        <div className="msg">
                          <BiMessageDetail size={30} />
                        </div>
                        <div className="call">
                          <IoIosCall size={30} />
                        </div>
                      </div>
                    </div>
                    <h5 class="card-text mt-4 ">
                      290 CCA Sector FF, DHA Phase IV, Lahore, Pakistan, 54660
                    </h5>
                    <div className="phone-email mt-5 mb-5 d-flex justify-content-between">
                      <div className="key-word">
                        <h5>Phone :</h5>
                        <h5>Email :</h5>
                      </div>
                      <div className="data">
                        <h5>03429493873</h5>
                        <h5>pakadvo@gmail.com</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card border-0 shadow" style={{ width: "24rem" }}>
                  <div class="card-body ">
                    <div className="card-header border-0 bg-white">
                      <div className="map pt-2 d-flex justify-content-between">
                        <div className="branch">
                          <h3>Lahore</h3>
                        </div>
                        <div className="or-map">
                          <BiMap size={30} />
                          Map
                        </div>
                        <div className="msg">
                          <BiMessageDetail size={30} />
                        </div>
                        <div className="call">
                          <IoIosCall size={30} />
                        </div>
                      </div>
                    </div>
                    <h5 class="card-text mt-4 ">
                      290 CCA Sector FF, DHA Phase IV, Lahore, Pakistan, 54660
                    </h5>
                    <div className="phone-email mt-5 mb-5 d-flex justify-content-between">
                      <div className="key-word">
                        <h5>Phone :</h5>
                        <h5>Email :</h5>
                      </div>
                      <div className="data">
                        <h5>03429493873</h5>
                        <h5>pakadvo@gmail.com</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card border-0 shadow" style={{ width: "24rem" }}>
                  <div class="card-body ">
                    <div className="card-header border-0 bg-white">
                      <div className="map pt-2 d-flex justify-content-between">
                        <div className="branch">
                          <h3>Lahore</h3>
                        </div>
                        <div className="or-map">
                          <BiMap size={30} />
                          Map
                        </div>
                        <div className="msg">
                          <BiMessageDetail size={30} />
                        </div>
                        <div className="call">
                          <IoIosCall size={30} />
                        </div>
                      </div>
                    </div>
                    <h5 class="card-text mt-4 ">
                      290 CCA Sector FF, DHA Phase IV, Lahore, Pakistan, 54660
                    </h5>
                    <div className="phone-email mt-5 mb-5 d-flex justify-content-between">
                      <div className="key-word">
                        <h5>Phone :</h5>
                        <h5>Email :</h5>
                      </div>
                      <div className="data">
                        <h5>03429493873</h5>
                        <h5>pakadvo@gmail.com</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="love my-5">
          <div className="container">
            <div className="header-pak">
              <h2>Lawyer Love pakAdvo</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="main-love-law  shadow">
                  <div className="row">
                    <div className="col-md-4 p-2">
                      <div className="img-lawyer"></div>
                    </div>
                    <div className="col-md-8">
                      <div className="text-love ">
                        <div className="pera-love  fs-5">
                          <p>I am extremely satisfied with oladoc's services. It's the best digital healthcare platform in Pakistan.</p>
                        </div>
                        <div className="quanty-love d-flex justify-content-around border mt-5 mb-3 mx-2">
                          <div className="quantity">
                            <h4>1000+</h4>
                            <p>Patient Satisfied</p>
                          </div>
                          <div className="rate">
                          <h4>1000+</h4>
                            <p>Satisfied rate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
              <div className="main-love-law  shadow">
                  <div className="row">
                    <div className="col-md-4 p-2">
                      <div className="img-lawyer"></div>
                    </div>
                    <div className="col-md-8">
                      <div className="text-love ">
                        <div className="pera-love  fs-5">
                          <p>I am extremely satisfied with oladoc's services. It's the best digital healthcare platform in Pakistan.</p>
                        </div>
                        <div className="quanty-love d-flex justify-content-around border mt-5 mb-3 mx-2">
                          <div className="quantity">
                            <h4>1000+</h4>
                            <p>Patient Satisfied</p>
                          </div>
                          <div className="rate">
                          <h4>1000+</h4>
                            <p>Satisfied rate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
