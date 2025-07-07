import React from 'react';
import { mockCircles } from '../../data/mockData';
import CircleCard from './CircleCard';

const RecommendedCircles: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">あなたへのおすすめ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCircles.map(circle => (
          <CircleCard key={circle.id} circle={circle} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedCircles;