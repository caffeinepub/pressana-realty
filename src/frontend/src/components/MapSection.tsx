import { MapPin } from "lucide-react";

const landmarks = [
  { name: "Airport", dist: "5 km", icon: "✈️" },
  { name: "Railway Station", dist: "4 km", icon: "🚂" },
  { name: "Racecourse", dist: "0.5 km", icon: "🏇" },
  { name: "Colleges", dist: "2 km", icon: "🎓" },
  { name: "IT Parks", dist: "6 km", icon: "💼" },
];

export default function MapSection() {
  return (
    <section
      id="location"
      data-ocid="location.section"
      className="py-24 md:py-32"
      style={{
        background: "linear-gradient(180deg, #0a0f1e 0%, #0d1528 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] font-sans mb-4">
            CONNECTIVITY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream">
            Prime <span className="italic text-gold">Location</span>
          </h2>
          <p className="text-cream/50 font-sans mt-4 max-w-xl mx-auto">
            Strategically located at Racecourse Corridor, Coimbatore, offering
            seamless access to the airport, railway station, and IT hubs.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div
            className="lg:col-span-2 rounded-2xl overflow-hidden"
            style={{ height: "450px" }}
            data-ocid="location.map_marker"
          >
            <iframe
              title="Pressana Infra Location"
              src="https://maps.google.com/maps?q=Pressana+Infra,+Race+Course,+Coimbatore&ll=11.018589,76.9161243&z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Landmarks */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-cream mb-6">
              Nearby Landmarks
            </h3>
            {landmarks.map((l) => (
              <div
                key={l.name}
                className="glass-dark rounded-xl px-5 py-4 flex items-center gap-4 hover:border-gold/30 hover:-translate-x-1 transition-all duration-300"
              >
                <span className="text-2xl">{l.icon}</span>
                <div>
                  <p className="text-cream font-sans text-sm font-medium">
                    {l.name}
                  </p>
                  <p className="text-gold font-sans text-xs">{l.dist}</p>
                </div>
                <MapPin
                  size={14}
                  className="text-gold/50 ml-auto flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
