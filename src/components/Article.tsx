import React from 'react'
import { Image } from 'react-bootstrap'

import { IArticle } from '../utils/types'
import { StyledLink, HeadlineText, AbstractText } from '../components/shared'
import { generateSlug, IMAGE_URL } from '../utils/helperFunctions'

interface IArticleProps {
  article: IArticle
  includeAbstract?: boolean
  isCenter?: boolean
}

const Article : React.FC<IArticleProps> = ({ article, includeAbstract, isCenter }) => {
  const {
    dominantMedia: {
      attachment_uuid: center_uuid,
      extension: center_extension
    },
    headline: center_headline,
    abstract: center_abstract,
    slug: center_slug,
    created_at: center_created
  } = article

  return (
    <StyledLink to={`/article/${generateSlug(center_slug, center_created)}`}>
      <Image fluid src={IMAGE_URL(center_uuid, center_extension)} />
      <HeadlineText fontSize={isCenter ? '150%' : '100%'}> {center_headline} </HeadlineText>
      {includeAbstract && <AbstractText dangerouslySetInnerHTML={{ __html: center_abstract }} />}
    </StyledLink>
  )
}

export default Article