export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-12 mb-24">
      <div className="flex-shrink-0">
        <img
          src="/images/IMG_5941.jpg"
          alt="Audrey"
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>

      <div className="flex-1 pt-4">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}
        >
          Hi, I'm Audrey!
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{ color: '#333', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}
        >
          I am a <span style={{ backgroundColor: '#828aa3', color: 'white', padding: '0 4px', borderRadius: '3px' }}>systems-minded operator</span> who excels at building <span style={{ backgroundColor: '#828aa3', color: 'white', padding: '0 4px', borderRadius: '3px' }}>efficient</span> systems and products that reduce cost, accelerate timelines, and drive cross-functional alignment.
        </p>
      </div>
    </div>
  );
}
