import * as React from 'react'
import Obfuscate from 'react-obfuscate'
import type { HeadFC, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Section } from '../components/Section'

const pageStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const IndexPage: React.FC<PageProps> = () => {
  const { pagesYaml: pageData } = useStaticQuery(graphql`
        query getPageData {
            pagesYaml(name: { eq: "home" }) {
                name
                title
                bio
            }
        }
    `)

  return (
    <main style={pageStyles}>
      <Section className="flex items-center text-center text-gold px-8">
        <div className="mb-24 lg:mb-0 lg:float-left">
          <h1 className="text-3xl lg:text-4xl font-fancy leading-[2] my-24 lg:my-36">
            {pageData.title}
          </h1>
          <p className="text-xl">
            {pageData.bio}
          </p>
        </div>
        <StaticImage
          src="../images/headshots_2.jpg"
          alt="Headshots"
          placeholder="blurred"
          className="w-full max-h-[100vh] lg:float-right lg:w-[50%]"
        />
        <div className="clear-both"></div>
      </Section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dave Antoni</title>
