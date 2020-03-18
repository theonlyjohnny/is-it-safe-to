import * as React from "react";
import Head from "next/head";

function Custom(title, sentence, { message, url }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex"
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={sentence}></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 style={{ margin: "auto" }}>
        {
          url ?
          (<a href={url}>
            {message}
          </a>)
          :
          message
        }
      </h1>
    </div>
  );
}

export default Custom;
