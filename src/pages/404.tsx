import * as React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="container">
        <h1>Page not found</h1>
        <p>
          Sorry, we couldn't find what you were looking for
          <br />
          <Link to="/">Go home</Link>
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
