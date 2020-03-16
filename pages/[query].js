import Head from "next/head";
import { useRouter } from "next/router";
import transformTitle from "title";

import No from "../components/No";
import Yes from "../components/Yes";

const overrides = {
  "test_yes": true,
  "test_no": false
};

const yesChoices = ["Sure", "Always", "I guess", "Barely"];

const asPathToQuery = asPath => asPath.replace(/[^\w\s]/gi, " ").trim();
function QueryPage() {
  const { asPath } = useRouter();
  const query = React.useMemo(() => asPathToQuery(asPath), [asPath]);
  const sentence = React.useMemo(() => `Is it safe to ${query}?`, [query]);
  const title = React.useMemo(() => transformTitle(sentence), [sentence]);

  if (overrides[query]) {
    return Yes(title, sentence);
  }

  return No(title, sentence);
}

//this sololy exists to force SSR for the <Head> tag at the moment
QueryPage.getInitialProps = async ({ req }) => {
  return {};
};

export default QueryPage;
