import * as React from 'react'

export const Samples: React.FC = () => {
  return (
    <div>
      <h2>Music Samples</h2>
      <div className="grid">
        <div>
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/artist/51BvEs1LeuH6swKuAaGZ9W?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/artist/5qKquO0aTpbwwEaQCvvAQJ?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
