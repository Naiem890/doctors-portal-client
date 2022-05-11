import React from "react";
import footerBgImage from "./../../assets/images/footer.png";
import footerBgImage2 from "./../../assets/images/chair.png";

const Footer = () => {
  return (
    <footer
      className="pb-10 pt-20 px-10"
      style={{
        background: `url(${footerBgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div class="footer max-w-[1240px] mx-auto justify-between">
        <div>
          <span class="footer-title">Services</span>
          <a class="link text-base text-accent link-hover">Emergency Checkup</a>
          <a class="link text-base text-accent link-hover">Monthly Checkup</a>
          <a class="link text-base text-accent link-hover">Weekly Checkup</a>
          <a class="link text-base text-accent link-hover">Deep Checkup</a>
        </div>
        <div>
          <span class="footer-title">ORAL HEALTH</span>
          <a class="link text-base text-accent link-hover">
            Fluoride Treatment
          </a>
          <a class="link text-base text-accent link-hover">Cavity Filling</a>
          <a class="link text-base text-accent link-hover">Jobs</a>
          <a class="link text-base text-accent link-hover">Teath Whitening</a>
        </div>
        <div>
          <span class="footer-title">OUR ADDRESS</span>
          <a class="link text-base text-accent link-hover">
            New York - 101010 Hudson
          </a>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto  text-center mt-28 ">
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
