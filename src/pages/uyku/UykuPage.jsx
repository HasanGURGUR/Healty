import React from 'react';
import ItemListSection from '../../components/ItemListSection.jsx';

const UykuPage = () => {
  const excessiveDaytimeSleepinessItems = [
    {
      image: '/images/why_sleepy.jpg',
      title: 'Why Do I Feel Excessively Sleepy?',
      description: 'Excessive sleepiness may be a symptom of a health condition. Here are the common causes...',
      link: '/articles/why-excessively-sleepy'
    },
    {
      image: '/images/do_i_have_sleepiness.jpg',
      title: 'Do I Have Excessive Daytime Sleepiness?',
      description: 'Excessive daytime sleepiness happens when you frequently feel very sleepy during the day...',
      link: '/articles/do-i-have-excessive-sleepiness'
    },
    {
      image: '/images/talk_to_doctor.jpg',
      title: 'Excessive Daytime Sleepiness: When to Talk with Your Doctor',
      description: 'Everyone has days when they feel tired. A little sleepiness isn\'t usually a cause for...',
      link: '/articles/talk-to-doctor-sleepiness'
    },
    {
      image: '/images/questions_to_ask_doctor.jpg',
      title: '7 Questions to Ask Your Doctor About Excessive Daytime Sleepiness',
      description: 'If you have excessive daytime sleepiness, knowing the right questions to ask can help...',
      link: '/articles/questions-about-sleepiness'
    },
    {
      image: '/images/faqs_testing.jpg',
      title: 'Your FAQs Answered: Testing for Excessive Daytime Sleepiness',
      description: 'If you feel sleepy during the day, no matter how much sleep you\'ve gotten the night before,',
      link: '/articles/testing-for-sleepiness'
    },
    {
      image: '/images/managing_sleepiness.avif',
      title: '7 Tips for Managing Excessive Daytime Sleepiness',
      description: 'Excessive daytime sleepiness can make it difficult to get through the day difficult. Read...',
      link: '/articles/managing-sleepiness'
    },
  ];

  return (
    <div>
      {/* <h1>Uyku Sayfası</h1> */}
      <ItemListSection title="EXCESSIVE DAYTIME SLEEPINESS" items={excessiveDaytimeSleepinessItems} />
      {/* Bu sayfaya özgü içerik buraya gelecek */}
    </div>
  );
};

export default UykuPage; 