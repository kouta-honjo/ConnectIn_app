import React from 'react';
import Card from '../ui/Card';

interface CircleCardProps {
  circle: {
    id: number;
    name: string;
    description: string;
    category: string;
    tags: string[];
    members: number;
    location: string;
    schedule: string;
    isRecruiting: boolean;
    matchScore: number;
  };
}

const CircleCard: React.FC<CircleCardProps> = ({ circle }) => {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold mb-2">{circle.name}</h3>
        <div className="text-sm font-bold text-blue-500">マッチ度: {circle.matchScore}%</div>
      </div>
      <p className="text-gray-600 mb-4">{circle.description}</p>
      <div className="mb-4">
        {circle.tags.map(tag => (
          <span key={tag} className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button 
          onClick={() => console.log(`詳細を見る: ${circle.name}`)} 
          className="text-blue-500 hover:underline"
        >
          詳細を見る
        </button>
        <button 
          onClick={() => console.log(`お気に入りに追加: ${circle.name}`)} 
          className="text-red-500 hover:text-red-700"
        >
          ❤️
        </button>
      </div>
    </Card>
  );
};

export default CircleCard;