import * as React from 'react'
import Markdown from 'react-markdown'
import type { HeadFC, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Section } from '../components/Section'
import { ContactForm } from '../components/ContactForm'
import { Layout } from '../components/Layout'

const pageStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const IndexPage: React.FC<PageProps> = () => {
  const { pagesYaml: pageData } = useStaticQuery(graphql`
    query getPageData {
      pagesYaml(name: { eq: "home" }) {
        name
        title
        intro
      }
    }
  `)

  return (
    <Layout>
      <Section>
        <h1>{pageData.title}</h1>
        <div>
          <Markdown>{pageData.intro}</Markdown>
        </div>
        <StaticImage
          src="../../static/images/dave2.jpg"
          alt="Dave2"
          placeholder="blurred"
          className="w-full max-h-[100vh] lg:float-right lg:w-[50%]"
        />
        <div className="clear-both"></div>
      </Section>
      <Section alternateBackground>
        <article>Test</article>
      </Section>
      <Section>
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dave Antoni</title>
