import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

export interface IconProps {
  title: string
  name:
    | 'music'
    | 'drum'
    | 'guitar'
    | 'mandolin'
    | 'mixing-table'
    | 'piano'
    | 'sitar'
}

export const Icon: React.FC<IconProps> = ({ title, name }) => {
  const url = `/icons/${name}.png`
  return (
    <div className="icon-container">
      <img src={url} alt={name} className="icon-img" />
      <div className="icon-title">{title}</div>
    </div>
  )
}
