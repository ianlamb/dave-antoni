import * as React from 'react'
import Markdown from 'react-markdown'
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
        intro
      }
    }
  `)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData
    })
      .then(() => console.log("Form successfully submitted"))
      .catch(error => alert(error));
  };

  return (
    <main style={pageStyles}>
      <Section className="flex items-center text-center px-8">
        <div className="mb-24 lg:mb-0 lg:float-left">
          <h1 className="text-3xl lg:text-4xl leading-[2] my-24 lg:my-36">
            {pageData.title}
          </h1>
          <p className="text-xl">
            <Markdown>{pageData.intro}</Markdown>
          </p>
        </div>
        <StaticImage
          src="../../static/images/dave2.jpg"
          alt="Dave2"
          placeholder="blurred"
          className="w-full max-h-[100vh] lg:float-right lg:w-[50%]"
        />
        <div className="clear-both"></div>
      </Section>
      <Section>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          ﻿ <h2>Contact</h2>
          <p>
            <label>
              Name <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email <input type="email" name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </Section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dave Antoni</title>
