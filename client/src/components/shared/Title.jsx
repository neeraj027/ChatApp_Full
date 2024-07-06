import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat App",
  description = "Online Chatting platform",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fenix&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Title;
