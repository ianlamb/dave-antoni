import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Markdown from 'react-markdown'

import { Icon, IconProps } from './Icon'

export const Intro: React.FC<{
  title: string
  intro: string
  instruments: { title: string; icon: string }[]
}> = ({ title, intro, instruments }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="grid">
        <div>
          <Markdown>{intro}</Markdown>
        </div>
        <StaticImage
          src="../../static/images/dave1.png"
          alt="Dave"
          placeholder="blurred"
        />
      </div>
      <div className="instruments">
        {instruments.map(({ title, icon }) => (
          <Icon title={title} name={icon as IconProps['name']} />
        ))}
      </div>
    </div>
  )
}
