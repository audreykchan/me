import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { getAssetPath } from '../utils/assets';

export default function ProjectGrid() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projectsData.map((project) => (
        <button
          key={project.id}
          onClick={() => navigate(`/project/${project.id}`)}
          className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border border-gray-200 text-left"
        >
          <div className="h-64 overflow-hidden bg-gray-100">
            <img
              src={getAssetPath(project.thumbnail)}
              alt={project.title}
              className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h3
              className="text-xl font-bold mb-3"
              style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}
            >
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded"
                  style={{ backgroundColor: '#f5f5f5', color: '#666' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
