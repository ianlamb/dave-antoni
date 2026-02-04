import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { Section } from '../components/Section'
import { ContactForm } from '../components/ContactForm'
import { Layout } from '../components/Layout'
import { About } from '../components/About'
import { Samples } from '../components/Samples'
import { Intro } from '../components/Intro'

const IndexPage: React.FC<PageProps> = () => {
  const { pagesYaml: pageData } = useStaticQuery(graphql`
    query getPageData {
      pagesYaml(name: { eq: "home" }) {
        name
        title
        intro
        about
      }
    }
  `)

  return (
    <Layout>
      <Section>
        <Intro title={pageData.title} intro={pageData.intro} />
      </Section>
      <Section className="bg-purple">
        <About content={pageData.about} />
      </Section>
      <Section>
        <Samples />
      </Section>
      <Section className="bg-blue">
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dave Antonini</title>
