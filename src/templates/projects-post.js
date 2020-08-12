import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"
import Badge from "react-bootstrap/Badge"
import { Button } from "react-bootstrap"


const SubTitle = ({ tags, github, website }) => {
  const { dark } = useContext(ThemeContext)
  return (
    <div className="mb-5">
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-3 m-1">
          <h5 className="text-white my-0">{tag}</h5>
        </Badge>
      ))}
      <div className="mt-4">
        <Button
          className="mr-4"
          href={github}
          target="_blank"
          variant={`${dark ? "outline-light" : "outline-primary" }`}
        >View on GitHub</Button>
        <Button
          href={website}
          target="_blank"
          variant={`${dark ? "outline-light" : "outline-primary" }`}
        >Visit the Website</Button>
      </div>
    </div>
  )
}

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={<SubTitle tags={post.frontmatter.tags} github={post.frontmatter.githubLink} website={post.frontmatter.websiteLink} />}
      excerpt={post.excerpt}
      html={post.html}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        githubLink
        websiteLink
      }
      excerpt
    }
  }
`
