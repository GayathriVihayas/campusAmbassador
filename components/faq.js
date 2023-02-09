import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 ">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 main-amb-heading `}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 ">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: 'Who is eligible for the IAC Programme?',
    answer: 'Any student studying in the college is eligible for registration',
  },
  {
    question: 'How can I refer to my friends ?',
    answer:
      'Upon registration, you will receive an email with a referral code which can be shared with your friends during registration',
  },
  {
    question: 'How can I know my points',
    answer:
      'You can visit our website and search for you referral code to see the number of referrals you have',
  },
  {
    question: 'When will I get the rewards',
    answer: 'The reward details will be published in our website on June 30',
  },
  {
    question: 'What should I do to clear my other queries?',
    answer: 'Email your queries to inctf@am.amrita.edu',
  },
];
