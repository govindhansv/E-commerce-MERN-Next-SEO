// pages/about.js
import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us - My Ecommerce</title>
        <meta name="description" content="Learn more about our ecommerce business" />
      </Head>
      <h1>About Us</h1>
      <p>We are a leading ecommerce platform offering high-quality products.</p>
    </Layout>
  );
}
