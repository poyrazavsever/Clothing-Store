import "@/styles/globals.css";
import Layout from "@/Layout/layout";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Luxe Threads Clothing Store</title>
      </Head>

      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </div>
  );
}
