import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectSection from '../components/ProjectSection';
import MediaViewer from '../components/MediaViewer';
import { useState } from 'react';

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fullscreenMedia, setFullscreenMedia] = useState<{ type: 'image' | 'video'; src: string } | null>(null);

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4" style={{ color: '#333' }}>Project not found</p>
          <button
            onClick={() => navigate('/')}
            className="text-sm hover:underline"
            style={{ color: '#333' }}
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-24 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-12 transition-opacity hover:opacity-60"
          style={{ color: '#333' }}
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Back</span>
        </button>

        <h1 className="text-4xl font-bold mb-4" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-12">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full"
              style={{ backgroundColor: '#f5f5f5', color: '#666' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.sections.map((section, idx) => (
          <ProjectSection
            key={idx}
            section={section}
            onMediaClick={setFullscreenMedia}
          />
        ))}
      </div>

      {fullscreenMedia && (
        <MediaViewer
          media={fullscreenMedia}
          onClose={() => setFullscreenMedia(null)}
        />
      )}
    </div>
  );
}
