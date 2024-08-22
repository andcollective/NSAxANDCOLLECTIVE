import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Enhancing NorthStar Anesthesia's Clinical Leadership Conference (CLC)",
    content: [
      "Comprehensive strategy to reshape brand perception",
      "Focus on capturing, editing, and creating impactful media",
      "Opportunity to boost morale and attract new talent",
      "Natural reinforcement of NorthStar's core values"
    ],
    blurb: "Our strategy for enhancing the CLC is designed to not only elevate the event but also to naturally showcase NorthStar's core values in action. Through thoughtful content creation and engagement strategies, we'll bring your organizational principles to life in a way that resonates with both internal and external audiences."
  },
  {
    title: "Key Objectives",
    content: [
      "Create consistent internal and external brand view",
      "Implement phased content strategy",
      "Position NorthStar as forward-thinking and appealing",
      "Ensure core values are reflected in all initiatives"
    ],
    blurb: "By focusing on these key objectives, we'll create opportunities for NorthStar's core values to shine through organically. From fostering a sense of unity to demonstrating patient-centric care and forward-thinking approaches, each aspect of our strategy will reflect the principles that make NorthStar unique."
  },
  {
    title: "Phase 1: Elevate CLC Content",
    content: [
      "Enhanced promotion and branding",
      "Earlier content creation (4-5 months prior)",
      "Professional video intros, award videos, and graphics",
      "Drip content from past CLCs",
      "Capture interviews for success stories"
    ],
    blurb: "In elevating the CLC content, we'll create numerous opportunities to showcase NorthStar's values. Success stories and interviews will naturally highlight how team members listen first, put patients at the center, and focus on providers. The enhanced content will demonstrate NorthStar's ability to anticipate change and work as one team."
  },
  {
    title: "Phase 2: Monthly Content Creation",
    content: [
      "Internal: CEO messages, employee spotlights, success stories",
      "External: Recruitment videos, innovation highlights, impact stories",
      "Video themes: Unity, Innovation, Personal Impact, Leadership, Engagement"
    ],
    blurb: "Our monthly content strategy will consistently reinforce NorthStar's values without explicitly stating them. CEO messages will demonstrate leadership that listens. Employee spotlights will show the 'one team' mentality. Patient impact stories will underscore your commitment to patient-centered care. Each piece of content will be an opportunity to show your values in action."
  },
  {
    title: "Phase 3: Website and Live Streaming Enhancements",
    content: [
      "Enable live streaming for global participation",
      "On-demand content access",
      "Interactive features: Q&A, virtual networking, polls"
    ],
    blurb: "By enhancing digital engagement, we're creating platforms for NorthStar's values to come alive. Live Q&A sessions will showcase the 'listen first' approach. Global participation will reinforce the 'one team' mentality. On-demand access demonstrates your focus on providers, while interactive features show how NorthStar anticipates and adapts to change."
  },
  {
    title: "Implementation Timeline",
    content: [
      "Phase 1: Start 5 months before CLC",
      "Phase 2: Begin post-CLC, ongoing",
      "Phase 3: Full-time content production team (1 year after monthly content)"
    ],
    blurb: "This phased approach allows us to consistently reinforce NorthStar's values over time. As we progress, we'll see more opportunities to showcase how these values guide decision-making, shape patient care, and drive innovation within NorthStar."
  },
  {
    title: "Expected Outcomes",
    content: [
      "Enhanced CLC experience",
      "More engaging and unified brand image",
      "Improved employee morale and engagement",
      "Increased attraction of top talent",
      "Positioning as an industry leader"
    ],
    blurb: "By executing this strategy, we anticipate outcomes that not only achieve business objectives but also reinforce NorthStar's core values. The enhanced CLC experience will embody the 'one team' spirit. Improved engagement will show how 'listening first' and 'assuming positive intent' create a positive work environment. Ultimately, this approach will position NorthStar as a leader that truly puts patients at the center while focusing on providers and anticipating industry changes."
  }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{
      fontFamily: "'Open Sans', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #003b5c 0%, #00a3e0 50%, #f7941e 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}>
        <div style={{
          width: '90%',
          height: '90%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}>
            <div style={{ fontSize: '0.875rem', color: 'white' }}>Slide {currentSlide + 1} of {slides.length}</div>
            <div style={{
              width: '150px',
              height: '40px',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
            }}>
              <span style={{ color: '#003b5c', fontWeight: 'bold' }}>NorthStar Anesthesia</span>
            </div>
            <div>
              <button onClick={prevSlide} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', marginRight: '0.5rem' }}>
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'white',
          }}>
            <div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}>{slides[currentSlide].title}</h2>
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem',
                marginBottom: '1rem',
              }}>
                {slides[currentSlide].content.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>
            <p style={{
              fontSize: '0.875rem',
              fontStyle: 'italic',
            }}>{slides[currentSlide].blurb}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;