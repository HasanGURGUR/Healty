import React from 'react';
import NutritionBanner from '../../components/NutritionBanner';
import ItemListSection from '../../components/ItemListSection';
import VerticalItemListSection from '../../components/VerticalItemListSection';

const PsikolojiPage = () => {
  const psikolojiBannerData = {
    siteName: "Healthgrow",
    bannerTitle: "Psikoloji",
    bannerDescription: "Ruh sağlığınız için temel rehberiniz",
    backgroundImage: "/images/psikoloji_banner.png"
  };

  const depressionTreatmentItems = [
    {
      image: '/images/mental-wellbeing.jpg',
      title: 'What Are the Types of Therapy for Depression?',
      description: 'Learn about different therapeutic approaches that can help manage depression symptoms...',
      link: '/articles/depression-therapy-types'
    },
    {
      image: '/images/toxic_work_environment.jpg',
      title: 'How Can I Get Help for Depression?',
      description: 'Discover the steps you can take to seek professional help and support for depression...',
      link: '/articles/getting-help-depression'
    },
    {
      image: '/images/cortisol_levels.jpg',
      title: 'Selective Serotonin Reuptake Inhibitors (SSRIs): What to Know',
      description: 'Understanding SSRIs, their effects, and what to expect when taking these medications...',
      link: '/articles/ssri-information'
    },
    {
      image: '/images/comforting_recipes.jpg',
      title: 'Caring for Yourself Through Depression and Weight Gain',
      description: 'Practical tips for managing your health and well-being while dealing with depression...',
      link: '/articles/depression-weight-gain'
    }
  ];

  const betterSleepItems = [
    {
      image: '/images/sleep.jpg',
      title: 'Top 15 Proven Tips to Sleep Better at Night',
      description: 'This article lists 15 evidence-based tips to sleep better at night. Getting good sleep is very important for optimal health.'
    },
    {
      image: '/images/bedtime_foods.jpg',
      title: 'What Does Melatonin Do, and How Does It Work?',
      description: 'Learn about the effectiveness of melatonin for sleep. Discover whether supplements are safe, melatonin\'s role in pregnancy...'
    },
    {
      image: '/images/insomnia_remedies.avif',
      title: '12 Healthy Sleep Hygiene Tips',
      description: 'Sleep hygiene is about having healthy sleep habits. Learn which behaviors, both during the day and around bedtime, can affect...'
    },
    {
      image: '/images/meditation_sleep.avif',
      title: 'How to Create the Perfect Sleep Environment',
      description: 'Your bedroom environment can make or break your sleep. Find out how to optimize your space for restful nights.'
    }
  ];

  const crisisSupportItems = [
    {
      image: '/images/hearing.jpg',
      title: 'Suicide Prevention Resource Guide',
      description: 'Death by suicide is the 10th-leading cause of death in the United States. If you or...'
    },
    {
      image: '/images/mental-wellbeing.jpg',
      title: 'How to Talk About Suicide with the People You Love',
      description: "It's important to keep in mind the language we use to talk about suicide. Here's how to..."
    },
    {
      image: '/images/skin-care.jpg',
      title: '10 Ways to Reach Out in a Mental Health Crisis',
      description: 'The definitive guide to speaking up about the unspeakable and seeking help during a mental...'
    },
    {
      image: '/images/comforting_recipes.jpg',
      title: 'How to Support Suicide Attempt Survivors',
      description: 'We forget, too often, that some of us are on the other side of a suicide attempt and need...'
    }
  ];

  return (
    <>
      <NutritionBanner 
        siteName={psikolojiBannerData.siteName}
        bannerTitle={psikolojiBannerData.bannerTitle}
        bannerDescription={psikolojiBannerData.bannerDescription}
        backgroundImage={psikolojiBannerData.backgroundImage}
      />
      <ItemListSection title="TREATMENT FOR DEPRESSION" items={depressionTreatmentItems} />
      <VerticalItemListSection title="BETTER SLEEP" items={betterSleepItems} />
      <ItemListSection title="CRISIS SUPPORT" items={crisisSupportItems} />
    </>
  );
};

export default PsikolojiPage; 