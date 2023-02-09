import Head from 'next/head';
import Hero from '../components/hero';

import SectionTitle from '../components/sectionTitle';
import About from '../components/about';
import { benefitOne, benefitTwo } from '../components/data';

import Benefits from '../components/benefits';

import Faq from '../components/faq';

import Note from '../components/note';

export default function Home() {
  return (
    <>
      <Head>
        <title>Campus Ambassador</title>
        <meta name="description" content="campus Ambassador" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <SectionTitle
        style={{ color: '#CF2A10' }}
        pretitle="Benefits"
        title=" Enhance your abilities as an Amrita InCTF  Campus Ambassador"
      ></SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Incentives"
        title="Learn how to fullfil your needs"
      ></SectionTitle>

      <Note />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
    </>
  );
}
