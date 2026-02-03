import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Markdown from 'react-markdown'

export const Intro: React.FC<{ title: string; intro: string }> = ({
  title,
  intro,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="grid">
        <div>
          <Markdown>{intro}</Markdown>
        </div>
        <StaticImage
          src="../../static/images/dave1.jpg"
          alt="Dave2"
          placeholder="blurred"
          className="w-full max-h-[100vh] lg:float-right lg:w-[50%]"
        />
      </div>
    </div>
  )
}
