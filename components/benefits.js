import Image from 'next/image';
import React from 'react';
import Container from './container';
import benifitImg from '../public/img/benifit-img.png';

export default function Benefits(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap amb-rep-adv-cont ">
        <div
          className={`flex items-center justify-center text-gray-600 w-full lg:w-1/2 ${
            props.imgPos === 'right' ? 'lg:order-1' : ''
          }`}
        >
          <div>
            <Image
              src={data.image}
              width="547"
              height="477"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 mr-4 ${
            props.imgPos === 'right' ? 'lg:justify-end' : ''
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4 ml-8">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-100 lg:text-xl xl:text-xl ">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5 ">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div
          className="flex items-center justify-center flex-shrink-0 mt-1 bg-orange-700  rounded-md w-11 h-11 "
          style={{ color: 'white' }}
        >
          {React.cloneElement(props.icon, {
            className: 'w-7 h-7 text-grey-600',
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 ">{props.title}</h4>
          <p className="mt-1 text-gray-500 ">{props.children}</p>
        </div>
      </div>
    </>
  );
}
