import { FunctionComponent, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Button as ChakraButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./Loco1.css";

type Loco1Type = {
  onClose?: () => void;
};

const Loco1: FunctionComponent<Loco1Type> = ({ onClose }) => {
  const onLoco1PopupClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onCol1Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  return (
    <div className="loco1" onClick={onLoco1PopupClick}>
      <div className="hero-section1">
        <header className="top-header1">
          <div className="loco-eats2">LOCO EATS</div>
          <div className="top-container1">
            <button className="fickleflight-logo1" />
            <div className="navigation-right1">
              <div className="navigation-menu1">
                <button className="explore1">Explore</button>
                <i className="search1">Search</i>
                <i className="search1">Hotels</i>
                <i className="search1">Offers</i>
              </div>
              <div className="account-section1">
                <img
                  className="hamburger-menu-icon1"
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className="notification-bell-icon1"
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className="profile-picture-icon1"
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="search-section1">
          <div className="search-container1">
            <div className="title5">
              <div className="lets-explore1">{`Let’s explore & eat around PAKISTAN`}</div>
              <i className="find-the-best1">
                Find the best cafes and the most popular diners!
              </i>
            </div>
            <div className="search-form1">
              <div className="form-title-group1">
                <i className="search-cafes1">Search CAFES</i>
                <div className="flight-options1">
                  <div className="flight-type1">
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
              <div className="form-inputs-row1">
                <div className="inputs-row1">
                  <Autocomplete
                    className="departure-field1"
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
                  <div className="arrival-field1">
                    <div className="input3">
                      <div className="label-container1">
                        <i className="city1">City</i>
                      </div>
                      <div className="active1">
                        <div className="muiautocompletetag1">
                          <div className="chip4">
                            <div className="container2">
                              <div className="avatar2">
                                <div className="op2">F</div>
                              </div>
                              <div className="typography2">
                                <div className="chip5">Chip</div>
                              </div>
                              <img
                                className="notification-bell-icon1"
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                          <div className="chip4">
                            <div className="container2">
                              <div className="avatar2">
                                <div className="op2">F</div>
                              </div>
                              <div className="typography2">
                                <div className="chip5">Chip</div>
                              </div>
                              <img
                                className="notification-bell-icon1"
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <i className="islamabad1">Islamabad</i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-group1">
                  <button className="search-flights-button1">
                    <i className="button7">GO Home 2</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-contents1">
        <div className="upcoming-flight-section2">
          <div className="upcoming-flight-section3">
            <i className="recent-searches1">Recent Searches</i>
            <div className="flight-details1">
              <div className="prepare-menu1">
                <i className="prepare-for-your1">Prepare for your trip</i>
                <div className="trip-menus1">
                  <button className="hotel2">
                    <img className="hotel-icon1" alt="" src="/hotel-icon.svg" />
                    <i className="hotel3">Hotel</i>
                  </button>
                  <button className="hotel2">
                    <img
                      className="attractions-icon1"
                      alt=""
                      src="/attractions-icon.svg"
                    />
                    <i className="attractions3">Attractions</i>
                  </button>
                  <div className="eats2">
                    <button className="eats-icon1">
                      <div className="background3" />
                      <img
                        className="cutlery-icon1"
                        alt=""
                        src="/cutlery.svg"
                      />
                    </button>
                    <i className="eats3">Eats</i>
                  </div>
                  <button className="hotel2">
                    <ChakraButton
                      className="search1"
                      variant="solid"
                      w="65.38703918457031px"
                      colorScheme="yellow"
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Button
                    </ChakraButton>
                    <i className="attractions3">Commute</i>
                  </button>
                  <button className="hotel2">
                    <img className="taxi-icon1" alt="" src="/taxi-icon.svg" />
                    <i className="taxi3">Taxi</i>
                  </button>
                  <button className="movies1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pop-destinations-main1">
          <div className="destinations-titles1">
            <div className="title-container1">
              <i className="recent-searches1">Plan your next trip</i>
              <i className="most-popular-destinations1">
                Most Popular Destinations
              </i>
            </div>
            <button className="view-all-top1">
              <i className="view-all-cafes1">View all Cafes</i>
              <img
                className="notification-bell-icon1"
                alt=""
                src="/MySVGs/arrowright.svg"
              />
            </button>
          </div>
          <div className="cards-container1">
            <button className="col-11" onClick={onCol1Click}>
              <div className="pariscard1">
                <div className="destination-details4">
                  <i className="cheezious1">Cheezious</i>
                  <div className="details6">
                    <i className="from4">from</i>
                    <div className="div10">$699</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="col-21">
              <div className="greececard1">
                <div className="destination-details4">
                  <i className="cheezious1">Al Aram Mandi</i>
                  <div className="details7">
                    <i className="from4">from</i>
                    <div className="div11">$1079</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="col-21">
              <div className="norwaycard1">
                <div className="destination-details4">
                  <i className="cheezious1">The Burger Co</i>
                  <div className="details6">
                    <i className="from4">from</i>
                    <div className="div10">$895</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="col-21">
              <div className="tuscanycard1">
                <div className="destination-details4">
                  <i className="cheezious1">Tuscany</i>
                  <div className="details9">
                    <i className="from4">from</i>
                    <div className="div13">$1245</div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="view-all-bottom2">
            <i className="view-all-destinations1">View all destinations</i>
            <img
              className="notification-bell-icon1"
              alt=""
              src="/MySVGs/arrowright1.svg"
            />
          </div>
        </div>
        <div className="recommended-holidays-container1">
          <div className="rec-title1">
            <i className="recommended-holidays1">Recommended Holidays</i>
            <button className="view-all-chinese-group">
              <i className="view-all-chinese1">{`View all Chinese `}</i>
              <img
                className="notification-bell-icon1"
                alt=""
                src="/MySVGs/arrowright2.svg"
              />
            </button>
          </div>
          <div className="rec-cards-container1">
            <button className="rec-card-11">
              <img
                className="unsplash5mv818tzxeo-icon1"
                alt=""
                src="/unsplash5mv818tzxeo@2x.png"
              />
              <div className="holiday-details4">
                <div className="rec-title1">
                  <div className="mei-kong-group">
                    <i className="mei-kong1">Mei Kong</i>
                    <i className="d3n2">4D3N</i>
                  </div>
                  <div className="div14">$899</div>
                </div>
              </div>
            </button>
            <button className="rec-card-11">
              <img
                className="unsplash5mv818tzxeo-icon1"
                alt=""
                src="/switzerlandimage@2x.png"
              />
              <div className="holiday-details4">
                <div className="rec-title1">
                  <div className="mei-kong-group">
                    <i className="mei-kong1">Silver Dragon</i>
                    <i className="d3n2">6D5N</i>
                  </div>
                  <div className="div14">$900</div>
                </div>
              </div>
            </button>
            <button className="rec-card-31">
              <img
                className="unsplash5mv818tzxeo-icon1"
                alt=""
                src="/boracayimage@2x.png"
              />
              <div className="holiday-details4">
                <div className="rec-title1">
                  <div className="mei-kong-group">
                    <i className="mei-kong1">Asian Wok</i>
                    <i className="d3n2">5D4N</i>
                  </div>
                  <div className="div14">$699</div>
                </div>
              </div>
            </button>
            <button className="rec-card-41">
              <img
                className="unsplash5mv818tzxeo-icon1"
                alt=""
                src="/palawanimage@2x.png"
              />
              <div className="holiday-details4">
                <div className="rec-title1">
                  <div className="mei-kong-group">
                    <i className="mei-kong1">Cheema Chataas</i>
                    <i className="d3n2">4D3N</i>
                  </div>
                  <div className="div14">$789</div>
                </div>
              </div>
            </button>
          </div>
          <div className="view-all-bottom3">
            <i className="view-all-holidays1">View all holidays</i>
            <img
              className="notification-bell-icon1"
              alt=""
              src="/MySVGs/arrowright3.svg"
            />
          </div>
        </div>
        <div className="popular-stays2">
          <div className="popular-stays-header1">
            <i className="popular-stays3">Popular Stays</i>
            <button className="view-all-stays-button1">
              <i className="view-all-stays2">View all stays</i>
              <img
                className="notification-bell-icon1"
                alt=""
                src="/arrowright4.svg"
              />
            </button>
          </div>
          <div className="hotel-cards1">
            <div className="hotel-card-11">
              <div className="hotel-card4">
                <img
                  className="matterhorn-suites-image1"
                  alt=""
                  src="/unsplashrlwe8f8anoc@2x.png"
                />
                <div className="stay-details4">
                  <div className="stay-details-rows4">
                    <i className="entire-bungalow1">Entire bungalow</i>
                    <i className="matterhorn-suites1">Matterhorn Suites</i>
                    <i className="night4">$575/night</i>
                  </div>
                  <img className="video-icon4" alt="" src="/video.svg" />
                </div>
                <div className="rating4">
                  <div className="vector-parent7">
                    <img className="vector-icon11" alt="" src="/vector.svg" />
                    <i className="i6">4.9</i>
                  </div>
                  <i className="reviews4">(60 reviews)</i>
                </div>
                <button className="more-details-button4">
                  <i className="button8">More details</i>
                </button>
              </div>
            </div>
            <div className="hotel-card-11">
              <div className="hotel-card4">
                <img
                  className="matterhorn-suites-image1"
                  alt=""
                  src="/unsplashtsn8bpopveo@2x.png"
                />
                <div className="stay-details5">
                  <div className="stay-details-rows4">
                    <i className="entire-bungalow1">2-Story beachfront suite</i>
                    <i className="matterhorn-suites1">Discovery Shores</i>
                    <i className="night4">$360/night</i>
                  </div>
                  <img className="video-icon4" alt="" src="/video1.svg" />
                </div>
                <div className="rating4">
                  <div className="vector-parent7">
                    <img className="vector-icon11" alt="" src="/vector1.svg" />
                    <i className="i6">4.8</i>
                  </div>
                  <i className="reviews4">(116 reviews)</i>
                </div>
                <button className="more-details-button4">
                  <i className="button8">More details</i>
                </button>
              </div>
            </div>
            <div className="hotel-card-11">
              <div className="hotel-card6">
                <img
                  className="matterhorn-suites-image1"
                  alt=""
                  src="/unsplashrlwe8f8anoc1@2x.png"
                />
                <div className="stay-details6">
                  <div className="stay-details-rows4">
                    <i className="entire-bungalow1">Single deluxe hut</i>
                    <i className="arctic-hut1">{`Arctic Hut `}</i>
                    <i className="night4">$420/night</i>
                  </div>
                  <img className="video-icon4" alt="" src="/video2.svg" />
                </div>
                <div className="rating4">
                  <div className="vector-parent9">
                    <img className="vector-icon13" alt="" src="/vector2.svg" />
                    <i className="i6">4.7</i>
                  </div>
                  <i className="reviews6">(78 reviews)</i>
                </div>
                <button className="more-details-button4">
                  <i className="button8">More details</i>
                </button>
              </div>
            </div>
            <div className="hotel-card-41">
              <div className="hotel-card7">
                <img
                  className="matterhorn-suites-image1"
                  alt=""
                  src="/unsplashyqrybvxug5q@2x.png"
                />
                <div className="stay-details4">
                  <div className="stay-details-rows4">
                    <i className="entire-bungalow1">Deluxe King Room</i>
                    <i className="arctic-hut1">Lake Louise Inn</i>
                    <i className="night4">$244/night</i>
                  </div>
                  <img className="video-icon4" alt="" src="/video3.svg" />
                </div>
                <div className="rating4">
                  <div className="vector-parent7">
                    <img className="vector-icon11" alt="" src="/vector3.svg" />
                    <i className="i6">4.6</i>
                  </div>
                  <i className="reviews4">(63 reviews)</i>
                </div>
                <button className="more-details-button4">
                  <i className="button8">More details</i>
                </button>
              </div>
            </div>
          </div>
          <div className="mobile-view-all-stays1">
            <i className="view-all-stays3">View all stays</i>
            <img
              className="notification-bell-icon1"
              alt=""
              src="/arrowright5.svg"
            />
          </div>
        </div>
      </div>
      <div className="footer-section1">
        <div className="subscribe-section1">
          <div className="share-your-travels-form1">
            <div className="form-header1">
              <i className="recent-searches1">subscribe to our newsletter</i>
              <i className="form-title1">Get weekly updates</i>
            </div>
            <form className="form1">
              <div className="form-text1">
                <i className="fill-in-your1">
                  Fill in your details to join the party!
                </i>
              </div>
              <div className="form-fields1">
                <div className="form-text1">
                  <TextField
                    className="input4"
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Your name"
                    size="medium"
                    margin="none"
                  />
                </div>
                <div className="form-text1">
                  <TextField
                    className="input4"
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Email address"
                    size="medium"
                    margin="none"
                  />
                </div>
              </div>
              <button className="button12">
                <div className="unstyledbutton1">
                  <i className="button13">submit</i>
                </div>
              </button>
            </form>
          </div>
        </div>
        <footer className="footer1">
          <div className="loco-eats3">LOCO EATS</div>
          <div className="fickleflight-bio1">
            <div className="logo1" />
            <i className="fickle-flight-is1">
              Fickle Flight is your one-stop travel portal. We offer hassle free
              flight and hotel bookings. We also have all your flight needs in
              you online shop.
            </i>
            <div className="social-icons1">
              <a className="entypo-socialfacebook-with-ci1">
                <img className="vector-icon15" alt="" src="/vector4.svg" />
              </a>
              <img
                className="entypo-socialtwitter-with-cir-icon1"
                alt=""
                src="/entyposocialtwitterwithcircle.svg"
              />
              <img
                className="entypo-socialinstagram-with-c-icon1"
                alt=""
                src="/entyposocialinstagramwithcircle.svg"
              />
            </div>
          </div>
          <div className="footer-item" />
          <div className="footer-links1">
            <div className="company2">
              <i className="about-us1">About Us</i>
              <i className="company3">Company</i>
              <i className="news1">News</i>
              <i className="careers1">Careers</i>
              <i className="how-we-work1">How we work</i>
            </div>
            <div className="company2">
              <i className="account1">Account</i>
              <i className="support3">Support</i>
              <i className="support-center1">Support Center</i>
              <a className="faq1">FAQ</a>
              <i className="accessibility1">Accessibility</i>
            </div>
            <div className="more2">
              <i className="covid-advisory1">Covid Advisory</i>
              <i className="more3">More</i>
              <i className="airline-fees1">Airline Fees</i>
              <i className="tips1">Tips</i>
              <i className="how-we-work1">Quarantine Rules</i>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Loco1;
