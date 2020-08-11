import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  // const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="200"
          height="200"
          roundedCircle
          src={`../../icons/stacy-1.jpg`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <div className="mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <b>{occupation}</b> focused on Front-End Development. I used FreeCodeCamp and Udemy Couses to get started, then applied my knowledge to build my own projects.
            <br />
            <p className="mt-4 pt-2">
              <h4>Skills:</h4>
              <div>
                <b>Front-end:</b> JavaScript, HTML5, CSS3
              </div>
              <div>
                <b>Libraries:</b> React, Redux, Material UI, styled-components
              </div>
              <div>
                <b>Version control:</b> Git
              </div>
            </p>
          </div>
          <p>
            In my spare time, I like to read books, think about what I'd like to build next and travel.
          </p>
          <p >
            Check out my personal <Link to="/projects">projects</Link> to see what I've
            been up to!
            {/* Or check out my <Link to="/blog">blog</Link> to see
            what's recently caught my eye! */}
          </p>
        </article>
        <article className="w-75 m-auto pb-4">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed mt-3">
                <small>
                  I am <b>currently looking for new life-changing opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:s.karlinska@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Books I'm reading:
          </h5>
          <ul style={{ fontSize: "1rem", listStyle: "none", textAlign: "left" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of podcasts I enjoy:
          </h5>
          <ul style={{ fontSize: "1rem", listStyle: "none", textAlign: "left" }}>{showLinks}</ul>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
