import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Event from "../components/event";

const EventTemplate = ({ data: { event } }) => (
  <Layout>
    <Event {...event} />
  </Layout>
);

export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      startDate(formatString: "MMMM DD YYYY")
      endDate(formatString: "MMMM DD YYYY")
      location
      slug
    }
  }
`;

export default EventTemplate;
