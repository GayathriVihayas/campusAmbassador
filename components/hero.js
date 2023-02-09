import Image from 'next/image';
import Container from './container';
import heroImg from '../public/img/hero-girls.png';

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap amb-hero-main-container">
        <div className="flex items-center w-full lg:w-1/2 hero-amb-content">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight main-amb-heading dark:text-white">
              Campus Ambassador
            </h1>
            <p className="py-5 text-base leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300  main-amb-para">
              In addition to the challenges and rewards, the ICA program
              provides a chance for participants to i mprove their professional
              skills and stand out in their careers. Internship and Placement
              offers awaits the top Campus Ambassador
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-orange-700 rounded-md "
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="916"
              height="769"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
