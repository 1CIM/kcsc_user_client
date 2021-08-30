import React from "react";
import ServiceSearch from "../components/ServiceSearch";
import ServiceListing from "../components/ServiceListing";
import { Container } from "@material-ui/core";

const DrupalSearchWidget = () => {
  return (
    <Container maxWidth="md">
    <ServiceSearch />
    <ServiceListing />
  </Container>
  )
}

export default DrupalSearchWidget
