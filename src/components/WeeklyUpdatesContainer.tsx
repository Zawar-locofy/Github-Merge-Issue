import { FunctionComponent } from "react";
import { css } from "@emotion/css";

const WeeklyUpdatesContainer: FunctionComponent = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        position: relative;
        background-color: #f3f7fb;
        height: 529px;
        overflow: hidden;
        flex-shrink: 0;
        text-align: center;
        font-size: 18px;
        color: #1262ae;
        font-family: Roboto;
      `}
    >
      <img
        className={css`
          position: absolute;
          width: 100%;
          top: 0px;
          right: 0px;
          left: 0px;
          max-width: 100%;
          overflow: hidden;
          height: 530px;
          object-fit: cover;
        `}
        alt=""
        src="/subscribe-section-background@2x.png"
      />
      <div
        className={css`
          position: relative !important;
          top: 52px;
          left: auto !important;
          width: 549px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          box-sizing: border-box;
          align-items: center;
          justify-content: flex-start;
          gap: 30px;
          margin-left: auto;
          margin-right: auto;
          @media screen and (max-width: 960px) {
            padding: 24px 0px;
            box-sizing: border-box;
          }
          @media screen and (max-width: 420px) {
            padding-left: 24px;
            padding-right: 24px;
            box-sizing: border-box;
            margin-left: auto;
            margin-right: auto;
            position: relative !important;
            left: auto !important;
            width: 100%;
          }
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 7px;
          `}
        >
          <b
            className={css`
              align-self: stretch;
              position: relative;
              letter-spacing: 0.04em;
              text-transform: uppercase;
            `}
          >
            subscribe to our newsletter
          </b>
          <b
            className={css`
              align-self: stretch;
              position: relative;
              font-size: 30px;
              color: #434343;
            `}
          >
            Get weekly updates
          </b>
        </div>
        <form
          className={css`
            align-self: stretch;
            border-radius: 12px;
            background-color: #fff;
            box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.03);
            border: 1px solid #eaeaea;
            display: flex;
            flex-direction: column;
            padding: 28px 30px;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 17px;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: 18px;
                line-height: 34px;
                font-family: Roboto;
                color: #576074;
                text-align: left;
              `}
            >
              Fill in your details to join the party!
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 10px;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    padding: 16px 0px;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 8px;
                  `}
                >
                  <div
                    className={css`
                      display: none;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: 8px;
                    `}
                  >
                    <div
                      className={css`
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          border-radius: 16px;
                          background-color: #e0e0e0;
                          display: flex;
                          flex-direction: row;
                          padding: 4px;
                          align-items: center;
                          justify-content: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            border-radius: 64px;
                            background-color: #bdbdbd;
                            width: 24px;
                            height: 24px;
                            overflow: hidden;
                            flex-shrink: 0;
                            display: none;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                          `}
                        >
                          <div
                            className={css`
                              align-self: stretch;
                              flex: 1;
                              position: relative;
                              font-size: 12px;
                              letter-spacing: 0.4px;
                              line-height: 166%;
                              font-family: Roboto;
                              color: #616161;
                              text-align: center;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                            `}
                          >
                            F
                          </div>
                        </div>
                        <div
                          className={css`
                            display: flex;
                            flex-direction: column;
                            padding: 3px 6px;
                            align-items: flex-start;
                            justify-content: flex-start;
                          `}
                        >
                          <div
                            className={css`
                              position: relative;
                              font-size: 13px;
                              letter-spacing: 0.16px;
                              line-height: 18px;
                              font-family: Roboto;
                              color: rgba(0, 0, 0, 0.87);
                              text-align: left;
                            `}
                          >
                            Chip
                          </div>
                        </div>
                        <img
                          className={css`
                            position: relative;
                            width: 24px;
                            height: 24px;
                            overflow: hidden;
                            flex-shrink: 0;
                          `}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          border-radius: 16px;
                          background-color: #e0e0e0;
                          display: flex;
                          flex-direction: row;
                          padding: 4px;
                          align-items: center;
                          justify-content: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            border-radius: 64px;
                            background-color: #bdbdbd;
                            width: 24px;
                            height: 24px;
                            overflow: hidden;
                            flex-shrink: 0;
                            display: none;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                          `}
                        >
                          <div
                            className={css`
                              align-self: stretch;
                              flex: 1;
                              position: relative;
                              font-size: 12px;
                              letter-spacing: 0.4px;
                              line-height: 166%;
                              font-family: Roboto;
                              color: #616161;
                              text-align: center;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                            `}
                          >
                            F
                          </div>
                        </div>
                        <div
                          className={css`
                            display: flex;
                            flex-direction: column;
                            padding: 3px 6px;
                            align-items: flex-start;
                            justify-content: flex-start;
                          `}
                        >
                          <div
                            className={css`
                              position: relative;
                              font-size: 13px;
                              letter-spacing: 0.16px;
                              line-height: 18px;
                              font-family: Roboto;
                              color: rgba(0, 0, 0, 0.87);
                              text-align: left;
                            `}
                          >
                            Chip
                          </div>
                        </div>
                        <img
                          className={css`
                            position: relative;
                            width: 24px;
                            height: 24px;
                            overflow: hidden;
                            flex-shrink: 0;
                          `}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={css`
                      flex: 1;
                      position: relative;
                      font-size: 16px;
                      letter-spacing: 0.15px;
                      line-height: 24px;
                      font-family: Roboto;
                      color: rgba(0, 0, 0, 0.6);
                      text-align: left;
                    `}
                  >
                    Your name
                  </div>
                  <div
                    className={css`
                      position: relative;
                      width: 28px;
                      height: 28px;
                      display: none;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          border-radius: 48px;
                          display: flex;
                          flex-direction: row;
                          padding: 4px;
                          align-items: center;
                          justify-content: flex-start;
                        `}
                      >
                        <img
                          className={css`
                            position: relative;
                            width: 20px;
                            height: 20px;
                            overflow: hidden;
                            flex-shrink: 0;
                          `}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                    `}
                  >
                    <img
                      className={css`
                        position: relative;
                        width: 24px;
                        height: 24px;
                        overflow: hidden;
                        flex-shrink: 0;
                      `}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    padding: 16px 0px;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 8px;
                  `}
                >
                  <div
                    className={css`
                      display: none;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: 8px;
                    `}
                  >
                    <div
                      className={css`
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          border-radius: 16px;
                          background-color: #e0e0e0;
                          display: flex;
                          flex-direction: row;
                          padding: 4px;
                          align-items: center;
                          justify-content: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            border-radius: 64px;
                            background-color: #bdbdbd;
                            width: 24px;
                            height: 24px;
                            overflow: hidden;
                            flex-shrink: 0;
                            display: none;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                          `}
                        >
                          <div
                            className={css`
                              align-self: stretch;
                              flex: 1;
                              position: relative;
                              font-size: 12px;
                              letter-spacing: 0.4px;
                              line-height: 166%;
                              font-family: Roboto;
                              color: #616161;
                              text-align: center;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                            `}
                          >
                            F
                          </div>
                        </div>
                        <div
                          className={css`
                            display: flex;
                            flex-direction: column;
                            padding: 3px 6px;
                            align-items: flex-start;
                            justify-content: flex-start;
                          `}
                        >
                          <div
                            className={css`
                              position: relative;
                              font-size: 13px;
                              letter-spacing: 0.16px;
                              line-height: 18px;
                              font-family: Roboto;
                              color: rgba(0, 0, 0, 0.87);
                              text-align: left;
                            `}
                          >
                            Chip
                          </div>
                        </div>
                        <img
                          className={css`
                            position: relative;
                            width: 24px;
                            height: 24px;
                            overflow: hidden;
                            flex-shrink: 0;
                          `}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          border-radius: 16px;
                          background-color: #e0e0e0;
                          display: flex;
                          flex-direction: row;
                          padding: 4px;
                          align-items: center;
                          justify-content: flex-start;
                        `}
                      >
                        <div
                          className={css`
                            border-radius: 64px;
                            background-color: #bdbdbd;
                            width: 24px;
                            height: 24px;
                            overflow: hidden;
                            flex-shrink: 0;
                            display: none;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                          `}
                        >
                          <div
                            className={css`
                              align-self: stretch;
                              flex: 1;
                              position: relative;
                              font-size: 12px;
                              letter-spacing: 0.4px;
                              line-height: 166%;
                              font-family: Roboto;
                              color: #616161;
                              text-align: center;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                            `}
                          >
                            F
                          </div>
                        </div>
                        <div
                          className={css`
                            display: flex;
                            flex-direction: column;
                            padding: 3px 6px;
                            align-items: flex-start;
                            justify-content: flex-start;
                          `}
                        >
                          <div
                            className={css`
                              position: relative;
                              font-size: 13px;
                              letter-spacing: 0.16px;
                              line-height: 18px;
                              font-family: Roboto;
                              color: rgba(0, 0, 0, 0.87);
                              text-align: left;
                            `}
                          >
                            Chip
                          </div>
                        </div>
                        <img
                          className={css`
                            position: relative;
                            width: 24px;
                            height: 24px;
                            overflow: hidden;
                            flex-shrink: 0;
                          `}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={css`
                      flex: 1;
                      position: relative;
                      font-size: 16px;
                      letter-spacing: 0.15px;
                      line-height: 24px;
                      font-family: Roboto;
                      color: rgba(0, 0, 0, 0.6);
                      text-align: left;
                    `}
                  >
                    Email address
                  </div>
                  <div
                    className={css`
                      position: relative;
                      width: 28px;
                      height: 28px;
                      display: none;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          border-radius: 48px;
                          display: flex;
                          flex-direction: row;
                          padding: 4px;
                          align-items: center;
                          justify-content: flex-start;
                        `}
                      >
                        <img
                          className={css`
                            position: relative;
                            width: 20px;
                            height: 20px;
                            overflow: hidden;
                            flex-shrink: 0;
                          `}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                    `}
                  >
                    <img
                      className={css`
                        position: relative;
                        width: 24px;
                        height: 24px;
                        overflow: hidden;
                        flex-shrink: 0;
                      `}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className={css`
              cursor: pointer;
              border: none;
              padding: 0;
              background-color: #f99a0e;
              border-radius: 4px;
              width: 164px;
              height: 56px;
              overflow: hidden;
              flex-shrink: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              &:hover {
                background-color: #dc880b;
              }
              @media screen and (max-width: 420px) {
                width: 100%;
                &:hover {
                  background-color: #9e6104;
                }
              }
            `}
          >
            <div
              className={css`
                overflow: hidden;
                display: flex;
                flex-direction: column;
                padding: 8px 22px;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  position: relative;
                  font-size: 15px;
                  letter-spacing: 0.46px;
                  line-height: 26px;
                  text-transform: uppercase;
                  font-weight: 500;
                  font-family: Roboto;
                  color: #fff;
                  text-align: left;
                `}
              >
                submit
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default WeeklyUpdatesContainer;
