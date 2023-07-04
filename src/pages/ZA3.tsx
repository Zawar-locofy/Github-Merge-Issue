import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Button as MuiButton } from "@mui/material";
import { Button as BsButton } from "react-bootstrap";
import { Button as ChakraButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./ZA3.css";
const ZA3: FunctionComponent = () => {
  const onFrameButtonClick = useCallback(() => {
    window.open("https:/www.youtube.com");
  }, []);

  const onRectangleImage1Click = useCallback(() => {
    window.open("https://www.youtube.com");
  }, []);

  const onRectangleButton2Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  return (
    <div className="za3">
      <div className="rectangle-parent">
        <img className="frame-child" alt="" src="/rectangle-9@2x.png" />
        <div className="group-parent">
          <div className="application-development-is-at-parent">
            <i className="application-development-is-container">
              <p className="application-development-is">
                Application development is at the heart of what we do. Our team
                are skilled in creating custom software solutions that meet the
                unique needs of our clients. So whether you need a simple
              </p>
              <p className="application-development-is">
                application to automate a business process or a complex system
                to manage your entire operation, we have the expertise and
                experience to deliver results.
              </p>
            </i>
            <i className="application-development">
              1. Application Development
            </i>
          </div>
          <button className="rectangle-wrapper" onClick={onFrameButtonClick}>
            <button className="frame-item" />
          </button>
        </div>
        <i className="read-more">Read more</i>
      </div>
      <div className="frame-parent">
        <div className="group-container">
          <div className="group-wrapper">
            <div className="human-to-machine-communication-parent">
              <i className="human-to-machine-communication">
                <p className="application-development-is">
                  Human-to-machine communication is another crucial area of
                  focus for our company. With the proliferation of smart devices
                  and the Internet of Things (IoT), it's more important than
                  ever for
                </p>
                <p className="application-development-is">
                  businesses to connect and communicate seamlessly with their
                  customers and employees. Our team can help you develop the
                  systems and technologies needed to enable effective
                  human-to-machine communication, including wireless
                  controls....
                </p>
              </i>
              <i className="application-development">
                2. Human-To-Machine Communication
              </i>
            </div>
          </div>
          <button className="rectangle-group">
            <div className="group-child" />
            <i className="read-more1">Read more</i>
          </button>
        </div>
        <img
          className="frame-inner"
          alt=""
          src="/rectangle-11@2x.png"
          onClick={onRectangleImage1Click}
        />
      </div>
      <div className="rectangle-container">
        <img className="rectangle-icon" alt="" src="/rectangle-111@2x.png" />
        <div className="group-div">
          <div className="group-parent1">
            <div className="machine-to-machine-communicati-parent">
              <i className="machine-to-machine-communicati">
                <p className="application-development-is">
                  Machine-to-machine communication is also an essential part of
                  our offering. With the ability to connect and communicate with
                  other devices and systems, businesses can automate processes,
                </p>
                <p className="application-development-is">
                  improve efficiency, and gather valuable data to inform
                  decision-making. We can help you develop the infrastructure
                  and systems needed to enable effective machine-to-machine
                  communication and leverage the power of the IoT to drive
                  business growth.
                </p>
              </i>
              <i className="machine-to-machine-communicati2">
                3. Machine-To-Machine Communication
              </i>
            </div>
            <button className="rectangle-frame">
              <Button
                className="rectangle-button"
                sx={{ width: 149 }}
                variant="contained"
                color="error"
              >
                Button
              </Button>
            </button>
            <BsButton className="buttondefault" variant="primary" size="lg">
              Button
            </BsButton>
            <ChakraButton
              className="buttonsolid-text-and-icon"
              variant="solid"
              colorScheme="teal"
              rightIcon={<ArrowForwardIcon />}
            >
              Button
            </ChakraButton>
          </div>
          <i className="read-more2">Read more</i>
        </div>
      </div>
      <div className="rectangle-parent1">
        <img className="group-item" alt="" src="/rectangle-10@2x.png" />
        <div className="group-parent2">
          <div className="our-video-analytics-services-a-parent">
            <i className="our-video-analytics-container">
              <p className="application-development-is">
                Our video analytics services are designed to help businesses
                extract valuable insights and information from video footage.
                Whether you need to monitor customer behavior in a retail
              </p>
              <p className="application-development-is">
                environment, optimize your manufacturing processes, or gather
                intelligence for security, our team can help you develop the
                technology and capabilities needed to turn video data into
                actionable insights.
              </p>
            </i>
            <i className="application-development">4. Video Analytics</i>
          </div>
          <button
            className="group-inner"
            type="submit"
            onClick={onRectangleButton2Click}
          />
        </div>
        <i className="read-more3">Read more</i>
      </div>
      <div className="banner">
        <div className="content">
          <div className="title">
            <i className="contact-us">Contact Us</i>
            <div className="line" />
          </div>
          <i className="there-are-many">
            There are many variations of passages of Lorem Ipsum available, have
            suffered alteration in some form.
          </i>
        </div>
        <img
          className="cogai-logotrans-1-1-icon"
          alt=""
          src="/cogailogotrans1-1@2x.png"
        />
        <div className="home-parent">
          <i className="home">Home</i>
          <i className="about">About</i>
          <i className="about">Services</i>
          <i className="about">Industries</i>
          <i className="about">Resources</i>
        </div>
        <div className="rectangle-parent2">
          <div className="rectangle-div" />
          <i className="get-a-quote">GET A QUOTE</i>
        </div>
      </div>
      <div className="banner1">
        <div className="image">
          <div className="background" />
        </div>
        <div className="content1">
          <div className="title1">
            <i className="contact-us">Services</i>
          </div>
        </div>
        <img
          className="cogai-logotrans-1-1-icon1"
          alt=""
          src="/cogailogotrans1-1@2x.png"
        />
        <div className="home-group">
          <i className="about">Home</i>
          <i className="about">About</i>
          <i className="services2">Services</i>
          <i className="about">Industries</i>
          <a className="resources1">Resources</a>
        </div>
        <button className="group-button">
          <div className="rectangle-div" />
          <i className="get-a-quote1">GET A QUOTE</i>
        </button>
      </div>
      <div className="group-parent3">
        <div className="rectangle-parent3">
          <div className="group-child2" />
          <i className="copyright-2022">
            Copyright @ 2022. All Rights Reserved.
          </i>
          <i className="other-links">Other Links</i>
          <i className="terms-condition">{`Terms & Condition`}</i>
          <i className="privacy-policy">Privacy Policy</i>
          <i className="report-abuse">Report Abuse</i>
          <i className="contact-us1">Contact Us</i>
          <i className="serives">Serives</i>
          <i className="application-development1">Application Development</i>
          <i className="human-to-machine-communication3">
            Human-to-Machine Communication
          </i>
          <i className="machine-to-machine-communicati3">
            Machine-to-Machine Communication
          </i>
          <i className="video-analytics1">Video Analytics</i>
          <div className="div" />
          <img className="group-icon" alt="" src="/group-2151.svg" />
          <img className="frame-icon" alt="" src="/frame1.svg" />
          <i className="we-specialize-in">
            We specialize in developing custom applications that streamline
            processes and improve efficiency for businesses of all sizes.
          </i>
          <MuiButton
            className="buttoncontained-text"
            variant="contained"
            color="primary"
          >
            Button
          </MuiButton>
        </div>
        <div className="contact-us-parent">
          <i className="contact-us2">CONTACT US</i>
          <div className="frame-group">
            <div className="vector-parent">
              <img className="vector-icon" alt="" src="/vector5.svg" />
              <i className="i">+44-(0)-1474-338-718</i>
            </div>
            <div className="vector-group">
              <img className="vector-icon1" alt="" src="/vector6.svg" />
              <i className="i">info@cogai.uk</i>
            </div>
            <div className="group-group">
              <img className="group-icon1" alt="" src="/group1.svg" />
              <i className="i">
                <p className="application-development-is">{`Cogai LTD, 6 Station View, `}</p>
                <p className="application-development-is">{`Hazel Grove, Stockport, `}</p>
                <p className="application-development-is">England, SK7 5ER</p>
              </i>
            </div>
            <div className="vector-container">
              <img className="vector-icon2" alt="" src="/vector7.svg" />
              <i className="i">Monday To Friday</i>
            </div>
          </div>
        </div>
      </div>
      <div className="za3-inner">
        <div className="services-we-are-providing-wrapper">
          <i className="services-we-are">Services We Are Providing</i>
        </div>
      </div>
      <i className="home-services">Home / Services</i>
    </div>
  );
};

export default ZA3;
