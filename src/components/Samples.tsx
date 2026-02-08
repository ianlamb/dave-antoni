import * as React from 'react'

export const Samples: React.FC<{
  title: string
  items: { description: string; spotifySrc: string }[]
}> = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="grid">
        {items.map(({ description, spotifySrc }) => (
          <div>
            {description && <p>{description}</p>}
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src={spotifySrc}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  )
}
