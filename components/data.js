import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from '@heroicons/react/outline';

import benefitOneImg from '../public/img/benifit-img-2.png';
import benefitTwoImg from '../public/img/responsibility.png';

const benefitOne = {
  image: benefitOneImg,
  bullets: [
    {
      title:
        'Opportunity to develop your leadership, communication, and marketing skills',
      icon: <EmojiHappyIcon />,
    },
    {
      title:
        'Chance to network and build public relations at the national level.',

      icon: <ChartSquareBarIcon />,
    },
    {
      title: 'Internship and Placement offers awaits the top Campus Ambassador',

      icon: <CursorClickIcon />,
    },
    {
      title:
        'Be a part of a network of thousands of students across the country and collaborate with them.',

      icon: <CursorClickIcon />,
    },
    {
      title:
        'chance to provide a valuable opportunity for the technical, managerial, and literary clubs at your college to showcase their skills among 500+ other colleges.',

      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'RESPONSIBILITIES',

  image: benefitTwoImg,
  bullets: [
    {
      title: 'dentifying potential participants for InCTF on your campus.',

      icon: <DeviceMobileIcon />,
    },
    {
      title:
        'Spreading the word in your campus about events and workshops conducted by InCTF.',

      icon: <AdjustmentsIcon />,
    },
    {
      title: 'Displaying posters sent by InCTF on your college noticeboard.',

      icon: <SunIcon />,
    },
    {
      title: 'Displaying posters sent by InCTF on your college noticeboard.',

      icon: <SunIcon />,
    },
    {
      title: 'Displaying posters sent by InCTF on your college noticeboard.',

      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
