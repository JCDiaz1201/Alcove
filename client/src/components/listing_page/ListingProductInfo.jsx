import React from "react";
import ListingProductBullets from "./ListingProductBullets.jsx";
import ListingMap from "./ListingMap.jsx";
import { Container, Row, Col } from "react-bootstrap";

import ListingProductDescription from "./ListingProductDescription.jsx";

const ListingProductInfo = props => {

  return (
    <Container>
      <Row>
        <Col md={2}>
        </Col>
        <Col>
          <h4>{props.listing.title}</h4>
          <h6 id="listingZipCode">Zip Code: {props.listing.zip}</h6>
        </Col>
        <Col md={1}>
        </Col>
        <Col>
          <div id="listingPriceContainer">
            <span id="listingPriceHeader">${props.listing.filters.price.toFixed(2)}</span>/ day
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
        </Col>
        <Col>
          <ListingProductBullets bullets={props.listing.filters} />
        </Col>
        <Col md={1}>
          <div className="listingDivider"></div>
        </Col>
        <Col id="listingDescriptionText">
          <ListingProductDescription description={props.listing.description} />
        </Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col>
          <ListingMap lat={props.listing.geoLocation[0]} lng={props.listing.geoLocation[1]} />
        </Col>
      </Row>
    </Container>
  );
};

export default ListingProductInfo;


/*

Sample description text

It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of
using Lorem Ipsum is that it has a more-or-less normal distribution of
letters, as opposed to using 'Content here, content here', making it
look like readable English. Many desktop publishing packages and web
page editors now use Lorem Ipsum as their default model text, and a
search for 'lorem ipsum' will uncover many web sites still in their
infancy. Various versions have evolved over the years, sometimes by
accident, sometimes on purpose (injected humour and the like).


*/
