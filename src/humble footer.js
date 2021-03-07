import React from "react";
import { HumbleCol, HumbleContainer, HumbleRow, HumbleFooter } from "Humblereact";

const HumbleFooter = () => {
  return (
    <HumbleFooter color="indigo" className="font-small pt-0">
      <HumbleContainer>
        <HumbleRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <HumbleCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">About us</a>
            </h6>
          </HumbleCol>
          <HumbleCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Products</a>
            </h6>
          </HumbleCol>
          <HumbleCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Our Team</a>
            </h6>
          </HumbleCol>
          <HumbleCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Help</a>
            </h6>
          </HumbleCol>
          <HumbleCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Contact</a>
            </h6>
          </HumbleCol>
        </HumbleRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <HumbleRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <HumbleCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur.
            </p>
          </HumbleCol>
        </HumbleRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <HumbleRow className="pb-3">
          <HumbleCol md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-4">

                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text"> </i>
              </a>
            </div>
          </HumbleCol>
        </HumbleRow>
      </HumbleContainer>
      <div className="footer-copyright text-center py-3">
        <HumbleContainer fluid>
          &copy; {new Date().getFullYear()} 
        </HumbleContainer>
      </div>
    </HumbleFooter>
  );
}

export default HumbleFooter;