import Head from "next/head";

import Albums from "../src/components/Album/Albums";
import Layout from "../src/components/App/Layout";
import Container from "../src/components/container";
import "../styles/Home.css";
import "../styles/style.less";

export default function Home() {
  return (
    <div>
      <Layout>
        <Container>
          <Albums />
        </Container>
      </Layout>
    </div>
  );
}
