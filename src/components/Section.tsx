import React from 'react'

export const Section: React.FC<{
  className?: string
} & React.PropsWithChildren> = ({ className, children }) => (
  <section
    className={className}
  >
    <div className="container" style={{ padding: '2rem 0 1rem' }}>{children}</div>
  </section>
)
