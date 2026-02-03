import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Markdown from 'react-markdown'

export const About: React.FC<{ content: string }> = ({ content }) => {
  return (
    <article>
      <div className="grid">
        <StaticImage
          src="../../static/images/dave2.jpg"
          alt="Dave2"
          placeholder="blurred"
          style={{ transform: 'scaleX(-1)' }}
        />
        <div>
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </article>
  )
}
