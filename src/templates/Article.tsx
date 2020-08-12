import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import s from 'styled-components'
import datetime from 'node-datetime'
import { graphql } from 'gatsby'

import RightCol from '../components/home/RightCol'
import Layout from '../components/layout'
import Footer from '../components/Footer'
import { IArticle, IMostReadArticle } from '../utils/types'
import { IMAGE_URL, AUTHORS_STRING } from '../utils/helperFunctions'
import {
  Filler,
  ArticleContent,
  CaptionText,
  HeadlineText,
  AbstractText_HEEBO,
  SectionHeader,
  Circle,
  MailIcon
} from '../components/shared'

const SubHeader = s.h3`
  color: #black;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.0;
  margin: 0.5em 0;
`

const AuthorWrapper = s.div`
  display: flex;
  margin-bottom: 1rem;
`

const AuthorName = s.div`
  color: #4B4B4B;
  font-size: 16px;
  font-weight: 400;
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  align-self: center;
  margin-right: 0.5rem;
`

const Line = s(Row)`
  margin-right: 1em;
  border-bottom: 1px solid #EBEBEB;
`

const CommentWrapper = s.div`
  iframe {
    width: 100% !important;
  }
`

interface IArticleProps {
  data: {
    allArticle: {
      edges: [{ node: IArticle }]
    }
    // mostReadDP: IMostReadArticle[]
  }
}

const Article: React.FC<IArticleProps> = ({
  data: {
    allArticle: {
      edges: [
        {
          node: {
            abstract,
            authors,
            dominantMedia: {
              attachment_uuid,
              created_at,
              extension,
              content: imageContent
            },
            headline,
            content
          }
        }
      ]
    }
  }
}) => (
    <Layout>
      <Container style={{ marginTop: '1.5em' }}>
        <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
          <Col xs={9}>
            <HeadlineText fontSize='200%'> { headline } </HeadlineText>
            <AbstractText_HEEBO dangerouslySetInnerHTML={{ __html: abstract }} />
            <AuthorWrapper>
              <Circle />
              <AuthorName> By {AUTHORS_STRING(authors)} </AuthorName>
              <MailIcon style={{ alignSelf: 'center', transform: 'scale(0.8)' }} />
            </AuthorWrapper>
            <div>{datetime.create(created_at).format(`f D, Y · I:M p`)}</div>
            <Filler color="#DFF3DB" />
            <Image fluid src={IMAGE_URL(attachment_uuid, extension)} />
            <CaptionText dangerouslySetInnerHTML={{ __html: imageContent }} />
            <ArticleContent dangerouslySetInnerHTML={{ __html: content }} />

            <CommentWrapper className="fb-comments" data-href={typeof window !== 'undefined' && window.location.href} data-numposts="15" data-width="" />

            <SectionHeader> READ MORE </SectionHeader>
            <Line />
            <Row style={{ marginTop: '1em' }}>
              <Col xs={4} style={{ fontSize: '90%', padding: '0 .6em', borderRight: '1px solid #EBEBEB' }}>
                <Filler color={'rgba(170, 30, 34, 0.25)'}/>
                <SubHeader style={{fontSize: '25px'}}> Suggestion Article Title 1 </SubHeader>
              </Col>
              <Col xs={4} style={{ fontSize: '90%', padding: '0 .6em', borderRight: '1px solid #EBEBEB' }}>
                <Filler color={'rgba(170, 30, 34, 0.25)'}/>
                <SubHeader style={{fontSize: '25px'}}> Suggestion Article Title 2 </SubHeader>
              </Col>
              <Col xs={4} style={{ fontSize: '90%', padding: '0 .6em' }}>
                <Filler color={'rgba(170, 30, 34, 0.25)'}/>
                <SubHeader style={{fontSize: '25px'}} > Suggestion Article Title 3 </SubHeader>
              </Col>
            </Row>
          </Col>
          {/* <RightCol mostReadDP={mostReadDP} /> */}
        </Row>
      </Container>
      <Footer />
    </Layout>
)


export const query = graphql`
  query($uuid: String!) {
    allArticle(filter: {uuid: {eq: $uuid}}) {
      edges {
        node {
          abstract
          authors {
            name
          }
          dominantMedia {
            attachment_uuid
            created_at
            extension
            content
          }
          headline
          content
        }
      }
    }
  }
`

export default Article
