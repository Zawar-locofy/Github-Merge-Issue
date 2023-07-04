import { FunctionComponent, useCallback } from "react";
import { css } from "@emotion/css";

const Header: FunctionComponent = () => {
  const onSearchTextClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  const onHotelsTextClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <header
      className={css`
        align-self: stretch;
        background-color: #fff;
        height: 77px;
        display: flex;
        flex-direction: row;
        padding: 22px 80px;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        position: sticky;
        width: 100%;
        top: 0;
        background: #ffffff;
        text-align: left;
        font-size: 14px;
        color: #424242;
        font-family: Roboto;
        @media screen and (max-width: 1200px) {
          padding-left: 40px;
          padding-right: 40px;
          box-sizing: border-box;
        }
        @media screen and (max-width: 960px) {
          padding-left: 24px;
          padding-right: 24px;
          box-sizing: border-box;
        }
      `}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: 0;
            background-color: transparent;
            position: relative;
            width: 174px;
            height: 33px;
            overflow: hidden;
            flex-shrink: 0;
          `}
        >
          <img
            className={css`
              position: absolute;
              height: 96.97%;
              width: 99.82%;
              top: 1.59%;
              right: 0.18%;
              bottom: 1.44%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            alt=""
            src="/symbols.svg"
          />
        </button>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            gap: 36px;
            @media screen and (max-width: 420px) {
              display: flex;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-end;
              gap: 30px;
              @media screen and (max-width: 960px) {
                display: none;
              }
            `}
          >
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 0;
                background-color: transparent;
                position: relative;
                font-size: 14px;
                font-family: Roboto;
                color: #1262af;
                text-align: left;
                display: inline-block;
              `}
            >
              Explore
            </button>
            <div
              className={css`
                position: relative;
                cursor: pointer;
              `}
              onClick={onSearchTextClick}
            >
              Search
            </div>
            <div
              className={css`
                position: relative;
                cursor: pointer;
              `}
              onClick={onHotelsTextClick}
            >
              Hotels
            </div>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 0;
                background-color: transparent;
                position: relative;
                font-size: 14px;
                font-family: Roboto;
                color: #424242;
                text-align: left;
                display: inline-block;
              `}
            >
              Offers
            </button>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 12px;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 24px;
                height: 24px;
                overflow: hidden;
                flex-shrink: 0;
                display: none;
                @media screen and (max-width: 960px) {
                  display: flex;
                }
              `}
              alt=""
              src="/notification.svg"
            />
            <img
              className={css`
                position: relative;
                width: 24px;
                height: 24px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/notification1.svg"
            />
            <img
              className={css`
                border-radius: 38px;
                width: 36px;
                height: 36px;
                object-fit: cover;
              `}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
