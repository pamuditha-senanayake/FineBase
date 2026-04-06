import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import SlackCTA from "@/components/SlackCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Hero />
        <Packages />
        <SlackCTA />
        
        {/* Why Finebase Section */}
        <section className="section" style={{ background: 'white', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '6rem',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem' }}>Strategic <br /> <span style={{ fontStyle: 'italic' }}>Precision</span>.</h2>
                <p style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.8',
                  color: 'var(--foreground)',
                  marginBottom: '2rem'
                }}>
                  At Finebase Labs, we believe that greatness is found in the details. 
                  Every line of code and every technical architecture is meticulously 
                  crafted to ensure your product resonates with performance and distinction.
                </p>
                <div style={{ padding: '2rem', background: '#fcfcfc', border: '1px solid #eee' }}>
                  <blockquote style={{ fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--muted-foreground)' }}>
                    "Technological innovation is not just about complexity, but about the elegant 
                    integration of systems that serve human needs."
                  </blockquote>
                  <cite style={{ display: 'block', marginTop: '1rem', fontSize: '0.875rem', fontWeight: '600', fontStyle: 'normal' }}>
                    — Finebase Labs Philosophy
                  </cite>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{
                  aspectRatio: '1',
                  background: '#f4f4f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  letterSpacing: '0.5em',
                  textTransform: 'uppercase',
                  color: '#ccc',
                  border: '1px solid #efefef'
                }}>
                  R&D Laboratory
                </div>
                <div style={{
                  position: 'absolute',
                  top: '-2rem',
                  right: '-2rem',
                  width: '10rem',
                  height: '10rem',
                  background: 'var(--accent)',
                  opacity: 0.05,
                  zIndex: -1
                }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
