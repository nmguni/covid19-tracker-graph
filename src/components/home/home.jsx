import React from "react";
import styles from "./home.module.scss";
import Button from "@material-ui/core/Button";
import headerImg from "../../images/undraw_doctors_hwty.svg";
import cx from "classnames";
import ControlledExpansionPanels from "./expCards";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.textContent}>
          <h6>COVID-19 - SARS-CoV-2</h6>
          <h1>
            COVID-19 information <br /> & tracker
          </h1>
          <p className={styles.headerText}>
            Coronaviruses are a large family of viruses which may cause illness
            in animals or humans. In humans, several coronaviruses are known to
            cause respiratory infections ranging from the common cold to more
            severe diseases such as Middle East Respiratory Syndrome (MERS) and
            Severe Acute Respiratory Syndrome (SARS). The most recently
            discovered coronavirus causes coronavirus disease COVID-19.
          </p>
          <Button className={styles.btn}>
            <Link to="/app">TIME-LINE</Link>
          </Button>
        </div>
        <div className={styles.imgContent}>
          <img src={headerImg} alt="" />
        </div>
      </header>
      {/* ------------ */}

      <div className={styles.topRow}>
        <div className={styles.wrapper}>
          <a href="/#masks">
            <div className={styles.parent}>
              <div className={cx(styles.bgOne, styles.child)}>
                <span className={styles.link}>Masks?</span>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.wrapper}>
          <a href="/#myths">
            <div className={styles.parent}>
              <div className={cx(styles.bgTwo, styles.child)}>
                <span className={styles.link}>myths?</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.midRow}>
        <div className={styles.wrapper}>
          <a href="/#symptoms">
            <div className={styles.parent}>
              <div className={cx(styles.bgThree, styles.child)}>
                <span className={styles.link}>symptoms?</span>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.wrapper}>
          <a href="/#medical">
            <div className={styles.parent}>
              <div className={cx(styles.bgFour, styles.child)}>
                <span className={styles.link}>
                  {" "}
                  older adults & medical conditions
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.midBotRow}>
        <div className={styles.wrapper}>
          <a href="/#childhood">
            <div className={styles.parent}>
              <div className={cx(styles.bgFive, styles.child)}>
                <span className={styles.link}> Childhood Immunizations </span>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.wrapper}>
          <a href="/#spreads">
            <div className={styles.parent}>
              <div className={cx(styles.bgSix, styles.child)}>
                <span className={styles.link}>how it spreads</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.botRow}>
        <div className={styles.wrapper}>
          <a href="/#protect">
            <div className={styles.parent}>
              <div className={cx(styles.bgSeven, styles.child)}>
                <span className={styles.link}> protect?</span>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.wrapper}>
          <a href="/#worry">
            <div className={styles.parent}>
              <div className={cx(styles.bgEight, styles.child)}>
                <span className={styles.link}> worry?</span>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.wrapper}>
          <a href="/#travel">
            <div className={styles.parent}>
              <div className={cx(styles.bgNine, styles.child)}>
                <span className={styles.link}>travel?</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* ---------- */}

      <ControlledExpansionPanels />
    </div>
  );
}
