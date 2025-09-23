import { Row, Col } from "react-bootstrap";

SignIn.route = {
  path: "/signIn",
  menuLabel: "Sign In",
  index: 1,
};

export default function SignIn() {
  return (
    <>
      <Row>
        <Col>
          <h2>Sign In</h2>
        </Col>
      </Row>
    </>
  );
}
