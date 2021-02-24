import React, { useState } from "react";
import "flexboxgrid";
import "./styles/flexboxgrid.scss";
import Logo from "./images/Union.svg";
import LogoText from "./images/pineapple..svg";
import Summer from "./images/image_summer.png";
import Facebook from "./images/ic_facebook.svg";
import Insta from "./images/ic instagram.svg";
import Twitter from "./images/ic_twitter.svg";
import YouTube from "./images/ic youtube.svg";
import Arrow from "./images/ic_arrow.svg";
import Checkmark from "./images/ic_checkmark.svg";
import styles from "./styles/App.module.scss";
import { Input } from "./components/inputs/inputField/input";
import { Checkbox } from "./components/inputs/checkbox/checkbox";

const WebDevTest = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
    console.log(inputEmail);
  };

  const isCheckedChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-4">
          <div className={styles.contentWrapper}>
            <div className={styles.header}>
              <div className="row middle-xs between-xs">
                <div className="col-xs-4 start-xs">
                  <div className={styles.logoWrapper}>
                    <img
                      src={Logo}
                      height="40px"
                      className={styles.logo}
                      alt="logo"
                    />
                    <img
                      src={LogoText}
                      height="16px"
                      className={styles.logoText}
                      alt="logo_text"
                    />
                  </div>
                </div>
                <div className="col-xs-7 end-xs">
                  <div className={styles.navigation}>
                    <a
                      href="https://www.figma.com"
                      className={styles.navElement}
                    >
                      About
                    </a>
                    <a
                      href="https://www.figma.com"
                      className={styles.navElement}
                    >
                      How it works
                    </a>
                    <a
                      href="https://www.figma.com"
                      className={styles.navElement}
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="row">
                <div className="col-xs-12">
                  <h1 className={styles.mainHeading}>
                    Subscribe to newsletter
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <p className={styles.paragraph}>
                    Subscribe to our newsletter and get 10% discount on
                    pineapple glasses.
                  </p>
                </div>
              </div>
              <div className="row">
                <Input
                  inputValue={inputEmail}
                  placeholderText={"Type your email address here… "}
                  inputHandler={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="row">
                <Checkbox
                  isChecked={isChecked}
                  checkHandler={() => isCheckedChangeHandler()}
                />
              </div>
            </div>
            <hr />
            <div className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-xs-4">facebook Insta Twitter Youtube</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-8">
          <img
            src={Summer}
            className={styles.background}
            alt="summer_background"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevTest;
