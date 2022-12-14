import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "-70px",
          marginBottom: "20px",
        }}
      >
        Green Forest Camping
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Customer Service</Heading>
            <FooterLink href="#">Shipping</FooterLink>
            <FooterLink href="#">Returns</FooterLink>
            <FooterLink href="#">Size Charts</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Chat</FooterLink>
            <FooterLink href="#">Phone</FooterLink>
            <FooterLink href="#">Email</FooterLink>
          </Column>
          <Column>
            <Heading>Follow us</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
