import { FunctionComponent, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Button as ChakraButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./Loco2.css";
const Loco2: FunctionComponent = () => {
  const onCol1Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  return (
    <div className="loco2">
      <div className="hero-section">
        <header className="top-header">
          <div className="loco-eats">LOCO EATS</div>
          <div className="top-container">
            <button className="fickleflight-logo" />
            <div className="navigation-right">
              <div className="navigation-menu">
                <button className="explore">Explore</button>
                <i className="search">Search</i>
                <i className="search">Hotels</i>
                <button className="offers">Offers</button>
              </div>
              <div className="account-section">
                <img
                  className="hamburger-menu-icon"
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className="notification-bell-icon"
                  alt=""
                  src="/notification2.svg"
                />
                <img
                  className="profile-picture-icon"
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="search-section">
          <div className="search-container">
            <div className="title2">
              <div className="lets-explore">{`Let’s explore & eat around PAKISTAN`}</div>
              <i className="find-the-best">
                Find the best cafes and the most popular diners!
              </i>
            </div>
            <div className="search-form">
              <div className="form-title-group">
                <i className="search-cafes">Search CAFES</i>
                <div className="flight-options">
                  <div className="flight-type">
                    <FormControlLabel
                      label="Return"
                      labelPlacement="end"
                      control={<Radio size="medium" />}
                    />
                    <FormControlLabel
                      label="One-way"
                      labelPlacement="end"
                      control={<Radio color="primary" checked size="medium" />}
                    />
                  </div>
                </div>
              </div>
              <div className="form-inputs-row">
                <div className="inputs-row">
                  <Autocomplete
                    className="departure-field"
                    disablePortal
                    options={[] as any}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Country"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Pakistan"
                    size="medium"
                  />
                  <div className="arrival-field">
                    <div className="input">
                      <div className="label-container">
                        <i className="city">City</i>
                      </div>
                      <div className="active">
                        <div className="muiautocompletetag">
                          <div className="chip">
                            <div className="container">
                              <div className="avatar">
                                <div className="op">F</div>
                              </div>
                              <div className="typography">
                                <div className="chip1">Chip</div>
                              </div>
                              <img
                                className="notification-bell-icon"
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                          <div className="chip">
                            <div className="container">
                              <div className="avatar">
                                <div className="op">F</div>
                              </div>
                              <div className="typography">
                                <div className="chip1">Chip</div>
                              </div>
                              <img
                                className="notification-bell-icon"
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <i className="islamabad">Islamabad</i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-group">
                  <button className="search-flights-button">
                    <i className="button">GO Home 2</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-contents">
        <div className="upcoming-flight-section">
          <div className="upcoming-flight-section1">
            <i className="recent-searches">Recent Searches</i>
            <div className="flight-details">
              <div className="prepare-menu">
                <i className="prepare-for-your">Prepare for your trip</i>
                <div className="trip-menus">
                  <button className="hotel">
                    <img className="hotel-icon" alt="" src="/hotel-icon.svg" />
                    <i className="hotel1">Hotel</i>
                  </button>
                  <button className="hotel">
                    <img
                      className="attractions-icon"
                      alt=""
                      src="/attractions-icon1.svg"
                    />
                    <i className="attractions1">Attractions</i>
                  </button>
                  <div className="eats">
                    <button className="eats-icon">
                      <div className="background1" />
                      <img
                        className="cutlery-icon"
                        alt=""
                        src="/cutlery1.svg"
                      />
                    </button>
                    <i className="eats1">Eats</i>
                  </div>
                  <button className="hotel">
                    <ChakraButton
                      className="search"
                      variant="solid"
                      w="65.38703918457031px"
                      colorScheme="yellow"
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Button
                    </ChakraButton>
                    <i className="attractions1">Commute</i>
                  </button>
                  <button className="hotel">
                    <img className="taxi-icon" alt="" src="/taxi-icon.svg" />
                    <i className="taxi1">Taxi</i>
                  </button>
                  <button className="movies" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pop-destinations-main">
          <div className="destinations-titles">
            <div className="title-container">
              <i className="recent-searches">Plan your next trip</i>
              <i className="most-popular-destinations">
                Most Popular Destinations
              </i>
            </div>
            <button className="view-all-top">
              <i className="view-all-cafes">View all Cafes</i>
              <img
                className="notification-bell-icon"
                alt=""
                src="/arrowright6.svg"
              />
            </button>
          </div>
          <div className="cards-container">
            <button className="col-1" onClick={onCol1Click}>
              <div className="pariscard">
                <div className="destination-details">
                  <i className="cheezious">Cheezious</i>
                  <div className="details">
                    <i className="from">from</i>
                    <div className="div1">$699</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="col-2">
              <div className="greececard">
                <div className="destination-details">
                  <i className="cheezious">Al Aram Mandi</i>
                  <div className="details1">
                    <i className="from">from</i>
                    <div className="div2">$1079</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="col-2">
              <div className="norwaycard">
                <div className="destination-details">
                  <i className="cheezious">The Burger Co</i>
                  <div className="details">
                    <i className="from">from</i>
                    <div className="div1">$895</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="col-2">
              <div className="tuscanycard">
                <div className="destination-details">
                  <i className="cheezious">Tuscany</i>
                  <div className="details3">
                    <i className="from">from</i>
                    <div className="div4">$1245</div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="view-all-bottom">
            <i className="view-all-destinations">View all destinations</i>
            <img
              className="notification-bell-icon"
              alt=""
              src="/MySVGs/arrowright1.svg"
            />
          </div>
        </div>
        <div className="recommended-holidays-container">
          <div className="rec-title">
            <i className="recommended-holidays">Recommended Holidays</i>
            <button className="view-all-chinese-parent">
              <i className="view-all-chinese">{`View all Chinese `}</i>
              <img
                className="notification-bell-icon"
                alt=""
                src="/arrowright7.svg"
              />
            </button>
          </div>
          <div className="rec-cards-container">
            <button className="rec-card-1">
              <img
                className="unsplash5mv818tzxeo-icon"
                alt=""
                src="/unsplash5mv818tzxeo@2x.png"
              />
              <div className="holiday-details">
                <div className="rec-title">
                  <div className="mei-kong-parent">
                    <i className="mei-kong">Mei Kong</i>
                    <i className="d3n">4D3N</i>
                  </div>
                  <div className="div5">$899</div>
                </div>
              </div>
            </button>
            <button className="rec-card-1">
              <img
                className="unsplash5mv818tzxeo-icon"
                alt=""
                src="/switzerlandimage@2x.png"
              />
              <div className="holiday-details">
                <div className="rec-title">
                  <div className="mei-kong-parent">
                    <i className="mei-kong">Silver Dragon</i>
                    <i className="d3n">6D5N</i>
                  </div>
                  <div className="div5">$900</div>
                </div>
              </div>
            </button>
            <button className="rec-card-3">
              <img
                className="unsplash5mv818tzxeo-icon"
                alt=""
                src="/boracayimage@2x.png"
              />
              <div className="holiday-details">
                <div className="rec-title">
                  <div className="mei-kong-parent">
                    <i className="mei-kong">Asian Wok</i>
                    <i className="d3n">5D4N</i>
                  </div>
                  <div className="div5">$699</div>
                </div>
              </div>
            </button>
            <button className="rec-card-4">
              <img
                className="unsplash5mv818tzxeo-icon"
                alt=""
                src="/palawanimage@2x.png"
              />
              <div className="holiday-details">
                <div className="rec-title">
                  <div className="mei-kong-parent">
                    <i className="mei-kong">Cheema Chataas</i>
                    <i className="d3n">4D3N</i>
                  </div>
                  <div className="div5">$789</div>
                </div>
              </div>
            </button>
          </div>
          <div className="view-all-bottom1">
            <i className="view-all-holidays">View all holidays</i>
            <img
              className="notification-bell-icon"
              alt=""
              src="/arrowright8.svg"
            />
          </div>
        </div>
        <div className="popular-stays">
          <div className="popular-stays-header">
            <i className="popular-stays1">Popular Stays</i>
            <button className="view-all-stays-button">
              <i className="view-all-stays">View all stays</i>
              <img
                className="notification-bell-icon"
                alt=""
                src="/arrowright9.svg"
              />
            </button>
          </div>
          <div className="hotel-cards">
            <div className="hotel-card-1">
              <div className="hotel-card">
                <img
                  className="matterhorn-suites-image"
                  alt=""
                  src="/unsplashrlwe8f8anoc@2x.png"
                />
                <div className="stay-details">
                  <div className="stay-details-rows">
                    <i className="entire-bungalow">Entire bungalow</i>
                    <i className="matterhorn-suites">Matterhorn Suites</i>
                    <i className="night">$575/night</i>
                  </div>
                  <img className="video-icon" alt="" src="/video4.svg" />
                </div>
                <div className="rating">
                  <div className="frame-div">
                    <img className="vector-icon3" alt="" src="/vector8.svg" />
                    <i className="i1">4.9</i>
                  </div>
                  <i className="reviews">(60 reviews)</i>
                </div>
                <button className="more-details-button">
                  <i className="button1">More details</i>
                </button>
              </div>
            </div>
            <div className="hotel-card-1">
              <div className="hotel-card">
                <img
                  className="matterhorn-suites-image"
                  alt=""
                  src="/unsplashtsn8bpopveo@2x.png"
                />
                <div className="stay-details1">
                  <div className="stay-details-rows">
                    <i className="entire-bungalow">2-Story beachfront suite</i>
                    <i className="matterhorn-suites">Discovery Shores</i>
                    <i className="night">$360/night</i>
                  </div>
                  <img className="video-icon" alt="" src="/video5.svg" />
                </div>
                <div className="rating">
                  <div className="frame-div">
                    <img className="vector-icon3" alt="" src="/vector9.svg" />
                    <i className="i1">4.8</i>
                  </div>
                  <i className="reviews">(116 reviews)</i>
                </div>
                <button className="more-details-button">
                  <i className="button1">More details</i>
                </button>
              </div>
            </div>
            <div className="hotel-card-1">
              <div className="hotel-card2">
                <img
                  className="matterhorn-suites-image"
                  alt=""
                  src="/unsplashrlwe8f8anoc1@2x.png"
                />
                <div className="stay-details2">
                  <div className="stay-details-rows">
                    <i className="entire-bungalow">Single deluxe hut</i>
                    <i className="arctic-hut">{`Arctic Hut `}</i>
                    <i className="night">$420/night</i>
                  </div>
                  <img className="video-icon" alt="" src="/video6.svg" />
                </div>
                <div className="rating">
                  <div className="vector-parent2">
                    <img className="vector-icon5" alt="" src="/vector10.svg" />
                    <i className="i1">4.7</i>
                  </div>
                  <i className="reviews2">(78 reviews)</i>
                </div>
                <button className="more-details-button">
                  <i className="button1">More details</i>
                </button>
              </div>
            </div>
            <div className="hotel-card-4">
              <div className="hotel-card3">
                <img
                  className="matterhorn-suites-image"
                  alt=""
                  src="/unsplashyqrybvxug5q@2x.png"
                />
                <div className="stay-details">
                  <div className="stay-details-rows">
                    <i className="entire-bungalow">Deluxe King Room</i>
                    <i className="arctic-hut">Lake Louise Inn</i>
                    <i className="night">$244/night</i>
                  </div>
                  <img className="video-icon" alt="" src="/video7.svg" />
                </div>
                <div className="rating">
                  <div className="frame-div">
                    <img className="vector-icon3" alt="" src="/vector11.svg" />
                    <i className="i1">4.6</i>
                  </div>
                  <i className="reviews">(63 reviews)</i>
                </div>
                <button className="more-details-button">
                  <i className="button1">More details</i>
                </button>
              </div>
            </div>
          </div>
          <div className="mobile-view-all-stays">
            <i className="view-all-stays1">View all stays</i>
            <img
              className="notification-bell-icon"
              alt=""
              src="/MySVGs/arrowright10.svg"
            />
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="subscribe-section">
          <div className="share-your-travels-form">
            <div className="form-header">
              <i className="recent-searches">subscribe to our newsletter</i>
              <i className="form-title">Get weekly updates</i>
            </div>
            <form className="form">
              <div className="form-text">
                <i className="fill-in-your">
                  Fill in your details to join the party!
                </i>
              </div>
              <div className="form-fields">
                <div className="form-text">
                  <TextField
                    className="input1"
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Your name"
                    size="medium"
                    margin="none"
                  />
                </div>
                <div className="form-text">
                  <TextField
                    className="input1"
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Email address"
                    size="medium"
                    margin="none"
                  />
                </div>
              </div>
              <button className="button5">
                <div className="unstyledbutton">
                  <i className="button6">submit</i>
                </div>
              </button>
            </form>
          </div>
        </div>
        <footer className="footer">
          <div className="loco-eats1">LOCO EATS</div>
          <div className="fickleflight-bio">
            <div className="logo" />
            <i className="fickle-flight-is">
              Fickle Flight is your one-stop travel portal. We offer hassle free
              flight and hotel bookings. We also have all your flight needs in
              you online shop.
            </i>
            <div className="social-icons">
              <a className="entypo-socialfacebook-with-ci">
                <img className="vector-icon7" alt="" src="/vector12.svg" />
              </a>
              <img
                className="entypo-socialtwitter-with-cir-icon"
                alt=""
                src="/entyposocialtwitterwithcircle1.svg"
              />
              <img
                className="entypo-socialinstagram-with-c-icon"
                alt=""
                src="/entyposocialinstagramwithcircle1.svg"
              />
            </div>
          </div>
          <div className="footer-child" />
          <div className="footer-links">
            <div className="company">
              <i className="about-us">About Us</i>
              <i className="company1">Company</i>
              <i className="news">News</i>
              <i className="careers">Careers</i>
              <i className="how-we-work">How we work</i>
            </div>
            <div className="company">
              <i className="account">Account</i>
              <i className="support1">Support</i>
              <i className="support-center">Support Center</i>
              <a className="faq">FAQ</a>
              <i className="accessibility">Accessibility</i>
            </div>
            <div className="more">
              <i className="covid-advisory">Covid Advisory</i>
              <i className="more1">More</i>
              <i className="airline-fees">Airline Fees</i>
              <i className="tips">Tips</i>
              <i className="how-we-work">Quarantine Rules</i>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Loco2;
