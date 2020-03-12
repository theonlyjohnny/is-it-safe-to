import Head from "next/head";
import { useRouter } from "next/router";
import transformTitle from "title";

const asPathToQuery = asPath => asPath.replace(/[^\w\s]/gi, " ").trim();
function QueryPage() {
  const { asPath } = useRouter();
  const query = React.useMemo(() => asPathToQuery(asPath), [asPath]);
  const sentence = React.useMemo(() => `Is it safe to ${query}?`, [query]);
  const title = React.useMemo(() => transformTitle(sentence), [sentence]);
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
      <h1 style={{ margin: "auto" }}>No</h1>
    </div>
  );
}

//this sololy exists to force SSR for the <Head> tag at the moment
QueryPage.getInitialProps = async ({ req }) => {
  return {};
};

export default QueryPage;
