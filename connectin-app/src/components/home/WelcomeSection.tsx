import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-8">
      <h1 className="text-3xl font-bold mb-2">こんにちは、田中さん！</h1>
      <p className="text-lg">あなたにぴったりのサークルを見つけましょう</p>
      <div className="mt-6">
        <button 
          onClick={() => console.log('おすすめを見る clicked')} 
          className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full mr-4 hover:bg-gray-200 transition duration-300"
        >
          おすすめを見る
        </button>
        <button 
          onClick={() => console.log('サークル検索 clicked')} 
          className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-blue-500 transition duration-300"
        >
          サークル検索
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;