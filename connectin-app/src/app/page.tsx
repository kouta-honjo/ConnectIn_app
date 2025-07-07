import WelcomeSection from '../components/home/WelcomeSection';
import RecommendedCircles from '../components/home/RecommendedCircles';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4 py-8">
        <WelcomeSection />
        <RecommendedCircles />
      </div>
    </main>
  );
}