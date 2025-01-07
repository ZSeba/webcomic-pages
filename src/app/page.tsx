import Image from "next/image";

import { fetchPages } from "./lib/data";

export default async function Home() {
  const pages = await fetchPages();
  return (
    <div>
      <Image
        aria-hidden
        src="https://drive.google.com/uc?export=view&id=17YoKgyaBifcxtXE4xGRfm_ztDgLSavbz"
        alt="Window icon"
        width={900}
        height={1400}
      />
    </div>
  );
}