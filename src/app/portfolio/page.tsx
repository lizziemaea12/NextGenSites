import { ExternalLink } from 'lucide-react';

const mockProjects = [
  {
    id: 1,
    name: "Lilaa Fashion",
    image: "https://wavbbwkrmeeqjmdvllvj.supabase.co/storage/v1/object/public/site-images/lilaacom.png",
    description: "A pink, aesthetic full-stack website for a boutique clothing store. Featured a gallery of outfits and a contact form for custom orders."
  },
  {
    id: 2,
    name: "InfinityC",
    image: "https://wavbbwkrmeeqjmdvllvj.supabase.co/storage/v1/object/public/site-images/infinityc.png",
    description: "Advanced, unique cybersecurity system built and designed by yours truly."
  },
  {
    id: 3,
    name: "Sugar Shack",
    image: "https://wavbbwkrmeeqjmdvllvj.supabase.co/storage/v1/object/public/site-images/sugarshackplaceholder.png", //will be updated with actual image
    description: "Sweet site selling sweets and treats. Featured a gallery of sweets, customer ratings, and a booking form for events."
  }
];

export default function PortfolioPage() {
  return (
    <div className="container" style={{ padding: '80px 24px' }}>
      <div className="text-center" style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>My Portfolio</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          My name is Lizzie, and I'm a 13-year-old software developer with lots of experience. I love building websites for kid-owned businesses. Check out some of my recent builds!
        </p>
      </div>

      <div className="grid-cols-3">
        {mockProjects.map(proj => (
          <div key={proj.id} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '220px', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={proj.image}
                alt={proj.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
              />
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{proj.name}</h3>
              <p style={{ flex: 1, marginBottom: '24px' }}>{proj.description}</p>
              <button className="btn btn-secondary" style={{ width: '100%' }}>
                View Project <ExternalLink size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
