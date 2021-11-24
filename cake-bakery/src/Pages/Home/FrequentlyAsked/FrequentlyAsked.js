import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import faqimage from "../../../images/faq.jpg";

const FrequentlyAsked = () => {
  return (
    <div className="pb-5">
      <h2
        className="mt-5 mb-5 text-white bg-info pt-2 pb-2"
        style={{ textAlign: "center" }}
      >
        {" "}
        Frequently Asked question{" "}
      </h2>
      <Container>
        <Row>
          <Col>
            <img style={{ width: "100%", height: "100%" }} src={faqimage} />
          </Col>
          <Col>
            <div className="">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header> Where is Our Shop ? </Accordion.Header>
                  <Accordion.Body>
                    Our Main Branch is located in Dhaka. However we have
                    branches all abound the country.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    Where can I see the Baking ovens ?
                  </Accordion.Header>
                  <Accordion.Body>
                    We Update Oven lists every week, If you are a member in our
                    website you get notifications.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {" "}
                    What payment method do you accept ?
                  </Accordion.Header>
                  <Accordion.Body>
                    We accept all payment in cluding cash to credit cards, debit
                    cards.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    Whats your Warrently measurement ?
                  </Accordion.Header>
                  <Accordion.Body>
                    We provide replace warrently for a certain period of time,
                    after that we provide repair servies.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrequentlyAsked;
