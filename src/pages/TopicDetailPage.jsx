import React from 'react';
import { useParams } from 'react-router-dom';

const TopicDetailPage = () => {
  const { topicSlug } = useParams();

  // Gerçek bir senaryoda, topicSlug'a göre bir API çağrısı yapıp
  // ilgili konu detaylarını buradan çekersiniz.
  // Şimdilik sadece topicSlug'u gösterelim.
  return (
    <div>
      <h1 className="page-title">{topicSlug.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
      <p>Bu konunun detay içeriği yakında burada olacak.</p>
      <p>Konu Slug: {topicSlug}</p>
    </div>
  );
};

export default TopicDetailPage; 