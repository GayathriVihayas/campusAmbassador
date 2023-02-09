import Image from 'next/image';
import Container from './container';
import heroImg from '../public/img/about-img.png';

export default function about() {
  return (
    <>
      <Container className="flex flex-wrap amb-hero-main-container">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="640"
              height="426"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2 about-amb-content">
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-white-800 lg:leading-tight lg:text-4xl dark:text-white">
              About inCTF Campus Ambassador
            </h3>
            <p className="max-w-2xl py-4 text-lg leading-normal text-white-500 lg:text-xl xl:text-xl dark:text-gray-300">
              The ICA (InCTF Campus Ambassador) Programme is designed to help
              participants develop their interpersonal skills and compete on a
              leaderboard through a series of challenges. As they progress
              through the Programme, ICA’s will have the opportunity to earn
              points and unlock rewards along the way
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
