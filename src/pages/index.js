import Navbar from "./Navbar";
import Head from "next/head";

export default function Main() {
  return (
    <div>
      <Head>
        <title>Index - Next.js </title>
        <meta name="description" content="Contacts page" />
      </Head>
      <Navbar />
      <h1>Index Page</h1>
    </div>
  );
}
