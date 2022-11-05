import React from "react";
import styled from "styled-components";

function ReactFooter() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <h1 align="center">Green Forest Camping</h1>
          <div className="row justify-content-center">
            {/*Customer Service Column*/}
            <div className="col-md-3 col-sm-6">
              <h4>Customer Service</h4>
              <ul className="list-unstyled">
                <li>
                  <FooterLink href="#">Shipping</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Returns</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Size Charts</FooterLink>
                </li>
              </ul>
            </div>
            {/*Contact Us Column*/}
            <div className="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>
                  <FooterLink href="/">Chat</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Phone</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Email</FooterLink>
                </li>
              </ul>
            </div>
            {/*Follow Us Column*/}
            <div className="col-md-3 col-sm-6">
              <h4>Follow Us</h4>
              <ul className="list-unstyled">
                <li>
                  <FooterLink href="#">
                    <i className="fab fa-facebook-f">
                      <span style={{ marginLeft: "10px" }}>Facebook</span>
                    </i>
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#">
                    <i className="fab fa-instagram">
                      <span style={{ marginLeft: "10px" }}>Instagram</span>
                    </i>
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#">
                    <i className="fab fa-twitter">
                      <span style={{ marginLeft: "10px" }}>Twitter</span>
                    </i>
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default ReactFooter;

const FooterContainer = styled.footer`
  .footer-middle {
    background: #132b0d;
    padding-top: 1rem;
    padding-left: 3rem;
    color: white;
  }
`;

const FooterLink = styled.a`
  color: gray;
  margin-bottom: 5px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;
