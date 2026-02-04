import React from 'react'

export const Section: React.FC<
  {
    className?: string
  } & React.PropsWithChildren
> = ({ className, children }) => (
  <section className={className}>
    <div className="container">{children}</div>
  </section>
)
