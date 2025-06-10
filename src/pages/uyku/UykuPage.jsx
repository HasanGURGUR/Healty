import React from 'react';
import ItemListSection from '../../components/ItemListSection.jsx';
import NutritionBanner from '../../components/NutritionBanner';
import HorizontalItemListSection from '../../components/HorizontalItemListSection';

const UykuPage = () => {
  const uykuBannerData = {
    siteName: "Healthgrow",
    bannerTitle: "Uyku",
    bannerDescription: "Kaliteli uyku için temel rehberiniz",
    backgroundImage: "/images/uyku_banner.png"
  };

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

  const insomniaRemediesItems = [
    {
      image: '/images/insomnia_remedies.avif',
      title: 'Home Remedies for Insomnia',
      description: 'Discover natural ways to improve your sleep quality and overcome insomnia...',
      link: '/articles/insomnia-remedies'
    },
    {
      image: '/images/natural_sleep_aids.webp',
      title: '10 Natural Sleep Aids for Better Sleep in 2025',
      description: 'Explore the most effective natural sleep aids that can help you achieve better sleep...',
      link: '/articles/natural-sleep-aids'
    },
    {
      image: '/images/meditation_sleep.avif',
      title: '3 Ways to Meditate for Better Sleep',
      description: 'Learn meditation techniques specifically designed to improve your sleep quality...',
      link: '/articles/meditation-for-sleep'
    },
    {
      image: '/images/bedtime_foods.jpg',
      title: 'The 9 Best Foods and Drinks to Have Before Bed',
      description: 'Find out which foods and drinks can help you sleep better and which ones to avoid...',
      link: '/articles/bedtime-foods'
    }
  ];

  return (
    <>
      <NutritionBanner 
        siteName={uykuBannerData.siteName}
        bannerTitle={uykuBannerData.bannerTitle}
        bannerDescription={uykuBannerData.bannerDescription}
        backgroundImage={uykuBannerData.backgroundImage}
      />
      <ItemListSection title="EXCESSIVE DAYTIME SLEEPINESS" items={excessiveDaytimeSleepinessItems} />
      <HorizontalItemListSection title="SLEEP BETTER" items={insomniaRemediesItems} />
      {/* Bu sayfaya özgü içerik buraya gelecek */}
    </>
  );
};

export default UykuPage; 