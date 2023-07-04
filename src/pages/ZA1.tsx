import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { Button as BsButton } from "react-bootstrap";
import { Button as ChakraButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./ZA1.css";
const ZA1: FunctionComponent = () => {
  const onFrameButtonClick = useCallback(() => {
    window.open("https:/www.youtube.com");
  }, []);

  const onRectangleImage1Click = useCallback(() => {
    window.open("https://www.youtube.com");
  }, []);

  return (
    <div className="za1">
      <div className="rectangle-parent4">
        <img className="frame-child1" alt="" src="/rectangle-9@2x.png" />
        <div className="group-parent4">
          <div className="application-development-is-at-group">
            <i className="application-development-is-container1">
              <p className="application-development-is1">
                Application development is at the heart of what we do. Our team
                are skilled in creating custom software solutions that meet the
                unique needs of our clients. So whether you need a simple
              </p>
              <p className="application-development-is1">
                application to automate a business process or a complex system
                to manage your entire operation, we have the expertise and
                experience to deliver results.
              </p>
            </i>
            <i className="application-development2">
              1. Application Development
            </i>
          </div>
          <button className="frame-button" onClick={onFrameButtonClick}>
            <button className="frame-child2" />
          </button>
        </div>
        <i className="read-more4">Read more</i>
      </div>
      <div className="frame-parent1">
        <div className="group-parent5">
          <div className="group-frame">
            <div className="human-to-machine-communication-group">
              <i className="human-to-machine-communication4">
                <p className="application-development-is1">
                  Human-to-machine communication is another crucial area of
                  focus for our company. With the proliferation of smart devices
                  and the Internet of Things (IoT), it's more important than
                  ever for
                </p>
                <p className="application-development-is1">
                  businesses to connect and communicate seamlessly with their
                  customers and employees. Our team can help you develop the
                  systems and technologies needed to enable effective
                  human-to-machine communication, including wireless
                  controls....
                </p>
              </i>
              <i className="application-development2">
                2. Human-To-Machine Communication
              </i>
            </div>
          </div>
          <button className="rectangle-parent5">
            <div className="group-child3" />
            <i className="read-more5">Read more</i>
          </button>
        </div>
        <img
          className="frame-child3"
          alt=""
          src="/rectangle-11@2x.png"
          onClick={onRectangleImage1Click}
        />
      </div>
      <div className="rectangle-parent6">
        <img className="frame-child4" alt="" src="/rectangle-111@2x.png" />
        <div className="group-parent6">
          <div className="group-parent7">
            <div className="machine-to-machine-communicati-group">
              <i className="machine-to-machine-communicati4">
                <p className="application-development-is1">
                  Machine-to-machine communication is also an essential part of
                  our offering. With the ability to connect and communicate with
                  other devices and systems, businesses can automate processes,
                </p>
                <p className="application-development-is1">
                  improve efficiency, and gather valuable data to inform
                  decision-making. We can help you develop the infrastructure
                  and systems needed to enable effective machine-to-machine
                  communication and leverage the power of the IoT to drive
                  business growth.
                </p>
              </i>
              <i className="machine-to-machine-communicati6">
                3. Machine-To-Machine Communication
              </i>
            </div>
            <button className="rectangle-wrapper1">
              <Button
                className="frame-child5"
                sx={{ width: 149 }}
                variant="contained"
                color="error"
              >
                Button
              </Button>
            </button>
            <BsButton className="buttondefault1" variant="primary" size="lg">
              Button
            </BsButton>
            <ChakraButton
              className="buttonsolid-text-and-icon1"
              variant="solid"
              colorScheme="teal"
              rightIcon={<ArrowForwardIcon />}
            >
              Button
            </ChakraButton>
          </div>
          <i className="read-more6">Read more</i>
        </div>
      </div>
      <div className="rectangle-parent7">
        <img className="group-child4" alt="" src="/rectangle-10@2x.png" />
        <div className="group-parent8">
          <div className="our-video-analytics-services-a-group">
            <i className="our-video-analytics-container1">
              <p className="application-development-is1">
                Our video analytics services are designed to help businesses
                extract valuable insights and information from video footage.
                Whether you need to monitor customer behavior in a retail
              </p>
              <p className="application-development-is1">
                environment, optimize your manufacturing processes, or gather
                intelligence for security, our team can help you develop the
                technology and capabilities needed to turn video data into
                actionable insights.
              </p>
            </i>
            <i className="application-development2">4. Video Analytics</i>
          </div>
          <div className="group-child5" />
        </div>
        <i className="read-more7">Read more</i>
      </div>
      <div className="banner2">
        <div className="content2">
          <div className="title3">
            <i className="contact-us3">Contact Us</i>
            <div className="line1" />
          </div>
          <i className="there-are-many1">
            There are many variations of passages of Lorem Ipsum available, have
            suffered alteration in some form.
          </i>
        </div>
        <img
          className="cogai-logotrans-1-1-icon2"
          alt=""
          src="/cogailogotrans1-1@2x.png"
        />
        <div className="home-container">
          <i className="home2">Home</i>
          <i className="about2">About</i>
          <i className="about2">Services</i>
          <i className="about2">Industries</i>
          <i className="about2">Resources</i>
        </div>
        <div className="rectangle-parent8">
          <div className="group-child6" />
          <i className="get-a-quote2">GET A QUOTE</i>
        </div>
      </div>
      <div className="banner3">
        <div className="image1">
          <div className="background2" />
        </div>
        <div className="content3">
          <div className="title4">
            <i className="contact-us3">Services</i>
          </div>
        </div>
        <img
          className="cogai-logotrans-1-1-icon3"
          alt=""
          src="/cogailogotrans1-1@2x.png"
        />
        <div className="home-parent1">
          <i className="about2">Home</i>
          <i className="about2">About</i>
          <i className="services5">Services</i>
          <i className="about2">Industries</i>
          <a className="resources3">Resources</a>
        </div>
        <button className="rectangle-parent9">
          <div className="group-child6" />
          <i className="get-a-quote3">GET A QUOTE</i>
        </button>
      </div>
      <div className="group-parent9">
        <div className="rectangle-parent10">
          <div className="group-child8" />
          <i className="copyright-20221">
            Copyright @ 2022. All Rights Reserved.
          </i>
          <i className="other-links1">Other Links</i>
          <i className="terms-condition1">{`Terms & Condition`}</i>
          <i className="privacy-policy1">Privacy Policy</i>
          <i className="report-abuse1">Report Abuse</i>
          <i className="contact-us4">Contact Us</i>
          <i className="serives1">Serives</i>
          <i className="application-development3">Application Development</i>
          <i className="human-to-machine-communication7">
            Human-to-Machine Communication
          </i>
          <i className="machine-to-machine-communicati7">
            Machine-to-Machine Communication
          </i>
          <i className="video-analytics3">Video Analytics</i>
          <div className="div9" />
          <img className="group-child9" alt="" src="/group-215.svg" />
          <img className="frame-icon1" alt="" src="/frame.svg" />
          <i className="we-specialize-in1">
            We specialize in developing custom applications that streamline
            processes and improve efficiency for businesses of all sizes.
          </i>
        </div>
        <div className="contact-us-group">
          <i className="contact-us5">CONTACT US</i>
          <div className="frame-parent2">
            <div className="vector-parent4">
              <img className="vector-icon8" alt="" src="/vector5.svg" />
              <i className="i5">+44-(0)-1474-338-718</i>
            </div>
            <div className="vector-parent5">
              <img className="vector-icon9" alt="" src="/vector6.svg" />
              <i className="i5">info@cogai.uk</i>
            </div>
            <div className="group-parent10">
              <img className="group-icon2" alt="" src="/group.svg" />
              <i className="i5">
                <p className="application-development-is1">{`Cogai LTD, 6 Station View, `}</p>
                <p className="application-development-is1">{`Hazel Grove, Stockport, `}</p>
                <p className="application-development-is1">England, SK7 5ER</p>
              </i>
            </div>
            <div className="vector-parent6">
              <img className="vector-icon10" alt="" src="/vector7.svg" />
              <i className="i5">Monday To Friday</i>
            </div>
          </div>
        </div>
      </div>
      <div className="za1-inner">
        <div className="services-we-are-providing-container">
          <i className="services-we-are1">Services We Are Providing</i>
        </div>
      </div>
      <i className="home-services1">Home / Services</i>
    </div>
  );
};

export default ZA1;
