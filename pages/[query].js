import * as React from "react";
import { useRouter } from "next/router";
import transformTitle from "title";

import No from "../components/No";
import Custom from "../components/Custom";

const overrides = {
  "leave": {
    message: "Not really...",
    url: "https://www.theatlantic.com/family/archive/2020/03/coronavirus-what-does-social-distancing-mean/607927/"
  }
};

const asPathToQuery = asPath => asPath.replace(/[^\w\s]/gi, " ").trim();
function QueryPage() {
  const { asPath } = useRouter();
  const query = React.useMemo(() => asPathToQuery(asPath), [asPath]);
  const sentence = React.useMemo(() => `Is it safe to ${query}?`, [query]);
  const title = React.useMemo(() => transformTitle(sentence), [sentence]);

  if (overrides[query]) {
    console.log("override", overrides[query]);
    return Custom(title, sentence, overrides[query]);
  }

  return No(title, sentence);
}

//this sololy exists to force SSR for the <Head> tag at the moment
QueryPage.getInitialProps = async ({ req }) => {
  return {};
};

export default QueryPage;
