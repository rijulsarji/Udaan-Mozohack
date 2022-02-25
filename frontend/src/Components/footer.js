import React from "react";
import "../CSS/Components/footer.css"

function Footer() {
  
  return (
    <div className="footerBody">
      <div className="footerSubBody">
        <div className="footerBox">
          <h1>Let's Connect!</h1>
          <div className="footerLinks">
            <a href="mailto:rijulsarji@gmail.com">Share your story</a> |{" "}
            <a href="mailto:kescotak@gmail.com">Contact Us</a> |{" "}
            <a href="mailto:19stutigupta@gmail.com">Add on information</a>
          </div>
          <p>Made with ❤️ by THE GLITCHERS</p>
        </div>
        <div className="footerImg"></div>
      </div>
    </div>
  );
}

export default Footer;