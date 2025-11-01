import { X } from 'lucide-react';
import { useEffect } from 'react';
import { getAssetPath } from '../utils/assets';

interface MediaViewerProps {
  media: {
    type: 'image' | 'video';
    src: string;
  };
  onClose: () => void;
}

export default function MediaViewer({ media, onClose }: MediaViewerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
      >
        <X size={24} className="text-white" />
      </button>

      <div
        className="max-w-7xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {media.type === 'image' ? (
          <img
            src={getAssetPath(media.src)}
            alt="Full screen"
            className="w-full h-full object-contain"
          />
        ) : media.src.includes('youtube.com/embed') ? (
          <iframe
            src={media.src}
            title="Full screen video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <video
            src={getAssetPath(media.src)}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
}
