import Head from "next/head";
export default function Index() {
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
        <title>Is it safe?</title>
        <meta name="description" content="It probably is not safe."></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 style={{ margin: "auto" }}>Probably not</h1>
    </div>
  );
}
