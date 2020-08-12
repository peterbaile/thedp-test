import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import { Filler } from '../components/shared'
import RightCol from '../components/home/RightCol'
import { IArticle, IAuthor, IMostReadArticle } from '../utils/types'

interface ISubHeaderProps {
  color: string
}

const SubHeader = s.h3<ISubHeaderProps>`
  color: #aa1e22;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.0;
  margin: 0.5em 0;
  color: ${({ color }): string => color};
`

interface IAuthorProps {
  pageContext: {
    filteredArticles: IArticle[]
    author: IAuthor
    mostReadDP: IMostReadArticle[]
  }
}

const Author = ({ pageContext: context }: IAuthorProps): React.ReactElement => {
  const { filteredArticles, author, mostReadDP } = context

  return (
    <Layout>
      <SEO title="Author"/>
      <Container style={{ marginTop: '1.5em' }}>
        <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
          <Col xs={9}>
            <Row><SubHeader color={'black'}>{author.name}</SubHeader></Row>
            <Row style={{ borderBottom: '1px solid #EBEBEB', paddingBottom: '1em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Row>
            <Filler color="#DFF3DB"/>
            <Row>
              <SubHeader color={'black'}>Most Recent</SubHeader>
            </Row>
              {filteredArticles.map(article => {
                  const { dominantMedia, headline, abstract, uuid } = article
                  const { attachment_uuid } = dominantMedia
                  return (
                    <Row key={uuid} style = {{borderBottom: '1px solid #EBEBEB'}}>
                      <Col xs={4} style={{padding: '1em', margin: '1em'}}>
                        <Row>
                        <Image fluid src={`https://snworksceo.imgix.net/dpn/${attachment_uuid}.sized-1000x1000.jpg?w=1000`} />
                        </Row>
                      </Col>
                      <Col style={{padding: '1em', margin: '1em'}}>
                        <Row>
                          <h5>{headline}</h5>
                          <p dangerouslySetInnerHTML={{ __html:  abstract}}/>
                        </Row>
                      </Col>
                    </Row>
                  )
              })}
              <Filler color="#DFF3DB"/>
          </Col>
          <RightCol mostReadDP={mostReadDP} />
        </Row>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Author
