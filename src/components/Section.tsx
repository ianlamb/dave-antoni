import React from 'react'
import classnames from 'classnames'

export const Section: React.FC<{
  alternateBackground?: boolean
} & React.PropsWithChildren> = ({ alternateBackground, children }) => (
  <section
    className={classnames({ 'pico-background-azure-850': alternateBackground })}
  >
    <div className="container" style={{ padding: '2rem 0 1rem' }}>{children}</div>
  </section>
)
