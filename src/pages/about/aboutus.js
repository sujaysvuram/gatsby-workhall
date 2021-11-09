import * as React from "react";
import Slider from "react-slick";
import Layout from "../../components/layout";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import videoimg from "../../assets/video.svg";
import bannerDots from "../../assets/banner-dots.svg";
import graydots from "../../assets/gray-dot.svg";
import stockimg1 from "../../assets/stockimg1.jpg";
import stockimg2 from "../../assets/stockimg2.jpg";
import stockimg3 from "../../assets/stockimg3.jpg";
import nextwhite from "../../assets/nextwhite.svg";
import backwhite from "../../assets/backwhite.svg";
import aboutshape from "../../assets/about-shape-2.svg";

const aboutus = () => (
  <Layout>
    <div className="page-banner dark-gradient">
      <Container>
        <Row>
          <Col md="6" className="about-banner">
            <img className="dots" src={bannerDots} />
            <img className="video" src={videoimg} />
          </Col>

          <Col md="6">
            <div className="banner-right">
              <span class="abtus">ABOUT US</span>

              <div class="weareworkhall">We are Workhall</div>

              <div class="A-great-workplace-co">
                A great workplace combines exceptional people with challenging
                problems.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <Container>
      <Row>
        <Col md="6" className="mission-column1">
          <div className="mission-column-left">
            <span className="mission">MISSION</span>
            <div className="ourmission">Our mission.</div>
            <div className="loveproductivity">
              While we absolutely love productivity software, we believe
              productivity, in general, is broken. There's just too many tools
              to keep track of, too many things in entirely separate ecosystems.
              There has to be a better way to work - that's why we created
              Workhall, first an internal tool, now as a way to fulfill our
              vision of making the world more productive. Eventually, our goal
              is to have all work live in Workhall - thereby making people more
              productive and giving back at least 20% of time to dedicate to
              other things. One app to replace them all. We're just getting
              started, and are so grateful for all of the 200,000+ teams that
              are in this together with our team.
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="card-mission">
            <img className="graydots" src={graydots} />
           
           
            {/* <img className="aboutshape" src={aboutshape} /> */}
           <span class="Save-people-time-by">
              <span class="text-style-1">Save people time </span>by making work
              more futuristic.
            </span> 
          </div>
        </Col>
      </Row>
    </Container>

    <span className="core-values">CORE VALUES</span>
    <div className="ourcorevalues">Our Core Values.</div>
    <div className="center-values"></div>
    <div className="stockimages">
      <div className="core-value-cards">
        <Slider {...settings}>
          <div>
            <div className="values">
              <span>01</span>
              <h4>
                Don’t fear or hide mistakes. Learn from it, never repeat it{" "}
              </h4>
            </div>
          </div>
          <div>
            <div className="values">
              <span>02</span>
              <h4>Discipline starts with self </h4>
            </div>
          </div>
          <div>
            <div className="values">
              <span>03</span>
              <h4>Be productive use the 24 </h4>
            </div>
          </div>
          <div>
            <div className="values">
              <span>04</span>
              <h4>Enjoy the work you do, enjoy the challenges </h4>
            </div>
          </div>
          <div>
            <div className="values">
              <span>05</span>
              <h4>Respect people, work, time </h4>
            </div>
          </div>
        </Slider>
      </div>

      <span className="team">TEAM</span>
      <div className="meettheteam">Meet the team!</div>
      <div className="workhallers">
        Workhallers are highly passionate, energetic, and unique people that
        align in the mission of future workplace and making the world more
        productive.
      </div>
      <div className="btn-sec">
        <Button className="btn-white">JOIN OUR TEAM</Button>
      </div>

      <Slider {...settingsadjusted}>
        <img className="stockimg-resize" src={stockimg1} />
        <img className="stockimg-resize" src={stockimg2} />
        <img className="stockimg-resize" src={stockimg3} />
      </Slider>
    </div>
  </Layout>
);

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,

  slidesToShow: 3,
  speed: 500,

  nextArrow: (
    <div>
      <div className="slick-arrow">
        {" "}
        <img className="next-back" src={nextwhite} />{" "}
      </div>
    </div>
  ),
  prevArrow: (
    <div>
      <div className="slick-arrow">
        <img className="next-back" src={backwhite} />{" "}
      </div>
    </div>
  ),

  responsive: [
    {
      breakpoint: 624,
      settings: {
        slidesToShow: 1.05,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        infinite: true,
      },
    },
  ],
};

const settingsadjusted = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 2.45,
  speed: 500,
  nextArrow: (
    <div>
      <div className="slick-arrow">
        {" "}
        <img className="next-back" src={nextwhite} />{" "}
      </div>
    </div>
  ),
  prevArrow: (
    <div>
      <div className="slick-arrow">
        <img className="next-back" src={backwhite} />{" "}
      </div>
    </div>
  ),

  responsive: [
    {
      breakpoint: 624,
      settings: {
        slidesToShow: 1.05,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        infinite: true,
      },
    },
  ],
};

export default aboutus;
