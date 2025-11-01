import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-24 py-16">
        <Hero />
        <ProjectGrid />
      </div>
    </div>
  );
}
