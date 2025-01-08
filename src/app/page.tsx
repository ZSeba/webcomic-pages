import React, { Suspense } from "react";
import { fetchPages } from "./lib/data";
import { PageViewer } from "./ui/pageViewer";

const Home = async () => {
  const pages = await fetchPages();
  return (
    <Suspense>
      <PageViewer pages={pages} />
    </Suspense>
  );
}

export default Home;