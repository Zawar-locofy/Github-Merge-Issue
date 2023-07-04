import { FunctionComponent } from "react";
import { css } from "@emotion/css";

const Footer: FunctionComponent = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        background: linear-gradient(91.74deg, #0b5ba8 25.38%, #299bd8);
        display: flex;
        flex-direction: row;
        padding: 33px 84px;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 44px;
        text-align: left;
        font-size: 18px;
        color: #fff;
        font-family: Roboto;
        @media screen and (max-width: 1200px) {
          padding: 40px;
          box-sizing: border-box;
        }
        @media screen and (max-width: 960px) {
          flex-direction: column;
          padding: 40px 24px 30px;
          box-sizing: border-box;
        }
        @media screen and (max-width: 420px) {
          padding: 30px 24px;
          box-sizing: border-box;
        }
      `}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 14px;
          margin-bottom: 40px !important;
          @media screen and (max-width: 960px) {
            flex: unset;
            align-self: stretch;
          }
        `}
      >
        <img
          className={css`
            position: relative;
            width: 174px;
            height: 33px;
            overflow: hidden;
            flex-shrink: 0;
          `}
          alt=""
          src="/logo.svg"
        />
        <div
          className={css`
            align-self: stretch;
            position: relative;
            line-height: 27px;
          `}
        >
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <img
          className={css`
            position: relative;
            width: 130px;
            height: 30px;
          `}
          alt=""
          src="/social-icons.svg"
        />
      </div>
      <div
        className={css`
          position: relative;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          box-sizing: border-box;
          width: 1px;
          height: 157.87px;
          @media screen and (max-width: 960px) {
            display: none;
          }
        `}
      />
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          font-size: 16px;
          @media screen and (max-width: 960px) {
            flex: unset;
            align-self: stretch;
          }
          @media screen and (max-width: 420px) {
            flex-direction: column;
          }
        `}
      >
        <div
          className={css`
            position: relative;
            width: 197.33px;
            height: 159.76px;
            @media screen and (max-width: 420px) {
              margin-bottom: 40px !important;
            }
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 47.76px;
              left: 0px;
              display: inline-block;
              width: 135.67px;
            `}
          >
            About Us
          </div>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              font-size: 20px;
              line-height: 27px;
              font-weight: 500;
              display: inline-block;
              width: 174.72px;
            `}
          >
            Company
          </div>
          <div
            className={css`
              position: absolute;
              top: 78.76px;
              left: 0px;
              display: inline-block;
              width: 84.28px;
            `}
          >
            News
          </div>
          <div
            className={css`
              position: absolute;
              top: 109.76px;
              left: 0px;
              display: inline-block;
              width: 115.11px;
            `}
          >
            Careers
          </div>
          <div
            className={css`
              position: absolute;
              top: 140.76px;
              left: 0px;
              display: inline-block;
              width: 197.33px;
            `}
          >
            How we work
          </div>
        </div>
        <div
          className={css`
            position: relative;
            width: 197.33px;
            height: 159.76px;
            @media screen and (max-width: 420px) {
              margin-bottom: 40px !important;
            }
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 47.76px;
              left: 0px;
              display: inline-block;
              width: 109.63px;
            `}
          >
            Account
          </div>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              font-size: 20px;
              line-height: 27px;
              font-weight: 500;
              display: inline-block;
              width: 131.56px;
            `}
          >
            Support
          </div>
          <div
            className={css`
              position: absolute;
              top: 78.76px;
              left: 0px;
              display: inline-block;
              width: 197.33px;
            `}
          >
            Support Center
          </div>
          <div
            className={css`
              position: absolute;
              top: 109.76px;
              left: 0px;
              display: inline-block;
              width: 52.99px;
            `}
          >
            FAQ
          </div>
          <div
            className={css`
              position: absolute;
              top: 140.76px;
              left: 0px;
              display: inline-block;
              width: 164.44px;
            `}
          >
            Accessibility
          </div>
        </div>
        <div
          className={css`
            position: relative;
            width: 197.33px;
            height: 159.76px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 47.76px;
              left: 0px;
              display: inline-block;
              width: 172.87px;
            `}
          >
            Covid Advisory
          </div>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              font-size: 20px;
              line-height: 27px;
              font-weight: 500;
              display: inline-block;
              width: 76.65px;
            `}
          >
            More
          </div>
          <div
            className={css`
              position: absolute;
              top: 78.76px;
              left: 0px;
              display: inline-block;
              width: 135.36px;
            `}
          >
            Airline Fees
          </div>
          <div
            className={css`
              position: absolute;
              top: 109.76px;
              left: 0px;
              display: inline-block;
              width: 50.56px;
            `}
          >
            Tips
          </div>
          <div
            className={css`
              position: absolute;
              top: 140.76px;
              left: 0px;
              display: inline-block;
              width: 197.33px;
            `}
          >
            Quarantine Rules
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
