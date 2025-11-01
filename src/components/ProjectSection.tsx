import { Maximize2 } from 'lucide-react';

interface Media {
  type: 'image' | 'video';
  src: string;
  caption: string;
}

interface ProjectSectionProps {
  section: {
    title: string;
    content: string[];
    media?: Media[];
    buttons?: { label: string; url: string }[];
  };
  onMediaClick: (media: { type: 'image' | 'video'; src: string }) => void;
}

export default function ProjectSection({ section, onMediaClick }: ProjectSectionProps) {
  return (
    <div className="mb-16">
      <h2
        className="text-2xl font-bold mb-6"
        style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}
      >
        {section.title}
      </h2>

      {section.media && section.media.length > 0 && (
        <div className="space-y-6 mb-6">
          {section.media.map((item, idx) => (
            <div key={idx} className="relative">
              {item.type === 'image' ? (
                <div className="relative group">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full rounded-lg"
                  />
                  <button
                    onClick={() => onMediaClick({ type: 'image', src: item.src })}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Maximize2 size={20} className="text-white" />
                  </button>
                </div>
              ) : item.src.includes('youtube.com/embed') ? (
                <div className="relative group">
                  <iframe
                    src={item.src}
                    title={item.caption}
                    className="w-full rounded-lg aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <button
                    onClick={() => onMediaClick({ type: 'video', src: item.src })}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Maximize2 size={20} className="text-white" />
                  </button>
                </div>
              ) : (
                <div className="relative group">
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg"
                  />
                  <button
                    onClick={() => onMediaClick({ type: 'video', src: item.src })}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Maximize2 size={20} className="text-white" />
                  </button>
                </div>
              )}
              <p className="text-sm italic mt-2" style={{ color: '#666' }}>
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {section.content.map((item, idx) => (
          <div key={idx}>
            {item.startsWith('*') ? (
              <li className="ml-5" style={{ color: '#333', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                {item.substring(1).trim()}
              </li>
            ) : (
              <p style={{ color: '#333', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                {item}
              </p>
            )}
          </div>
        ))}
      </div>

      {section.buttons && section.buttons.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-6">
          {section.buttons.map((button, idx) => (
            <a
              key={idx}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline transition-opacity hover:opacity-60 border border-gray-300 rounded px-3 py-2"
              style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}
            >
              {button.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
