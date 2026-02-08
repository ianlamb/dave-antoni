import React from 'react'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer>
        Website by{' '}
        <a href="https://ianlamb.com" target="_blank">
          Ian Lamb
        </a>{' '}
        &mdash; Music icons by{' '}
        <a
          href="https://www.flaticon.com/free-icons/music"
          target="_blank"
          title="asset attribution"
        >
          Freepik
        </a>
      </footer>
    </>
  )
}
