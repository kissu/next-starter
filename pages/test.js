// This is a test file that I've used to debug Prettier
// You can totally delete it 👍

import React from 'react'
import { Link as PrismicLink } from 'prismic-reactjs'
import { Elements } from 'prismic-richtext'
import { linkResolver } from './linkResolver'
import { Link } from 'gatsby'

const yolo = (type, element, content, children, index) => {
  // Generate links to Prismic Documents as <Link> components
  const array = [
    {
      name: 'bob',
    },
    {
      name: 'patrick',
    },
  ]
  if (type === Elements.hyperlink) {
    let result = ''
    const url = PrismicLink.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = (
        <Link to={url} key={index}>
          {content}
        </Link>
      )
    } else {
      const target = element.data.target
        ? {
            target: element.data.target,
            rel: 'noopener',
          }
        : {}
      result = (
        <a href={url} {...target} key={index}>
          {content}
        </a>
      )
    }
    return result
  }

  // Return null to stick with the default behavior for everything else
  return null
}

export { yolo }
