import React from "react";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import BoxLayout from "../../components/boxes-layout/boxes-layout";

function Homepage() {
  return (
    <div>
      <Container>
        <Header />
        <BoxLayout />
      </Container>
    </div>
  );
}

export default Homepage;
