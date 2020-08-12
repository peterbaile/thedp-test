import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

import { IArticle, IMostReadArticle } from '../utils/types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import s from 'styled-components'
import RightCol from '../components/home/RightCol'
import { generateSlug, IMAGE_URL } from '../utils/helperFunctions'
import { StyledLink, Filler } from '../components/shared'


const SubHeader = s.h3`
  color: #aa1e22;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.0;
  margin: 0.5em 0;
  color: ${({ color }) => color};
`

interface ISectionProps {
  pageContext: {
    filteredArticles: IArticle[]
    mostReadDP: IMostReadArticle[]
    section: string
    topArticles: IArticle[]
    centerpiece: IArticle
  }
}

const Section:React.FC<ISectionProps> = ({ pageContext: context }) => {  
  const { filteredArticles, mostReadDP, section } = context
  const { dominantMedia, headline, abstract, slug, created_at } = filteredArticles[0]
  const { attachment_uuid, extension } = dominantMedia
  return (
    <Layout>
      <SEO title="Section"/>
      <Container style={{ marginTop: '1.5em' }}>
        <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
          <Col xs={9}>
            <Row><SubHeader color='black'>{section.toUpperCase()}</SubHeader></Row>
            <Row style={{ borderBottom: '1px solid #EBEBEB', paddingBottom: '1em' }}>
            <Col xs={4} style={{ borderRight: '1px solid #EBEBEB' }}>
                {filteredArticles.slice(1, 3).map(article => {
                  const {
                    dominantMedia: { attachment_uuid, extension },
                    headline,
                    slug,
                    created_at
                  } = article
                  return (
                    <StyledLink to={`/article/${generateSlug(slug, created_at)}`}>
                      <Row style={{ borderBottom: '1px solid #EBEBEB', paddingBottom: '1em', marginBottom: '1em', marginRight: '0.5em' }}>
                        <Image fluid src={IMAGE_URL(attachment_uuid, extension)} />
                        <strong>{headline}</strong>
                      </Row>
                    </StyledLink>
                  )
                })}
              </Col>
              <Col xs={8}>
                <StyledLink to={`/article/${generateSlug(slug, created_at)}`}>
                  <Image fluid src={IMAGE_URL(attachment_uuid, extension)} />
                  <h4> {headline} </h4>
                  <p dangerouslySetInnerHTML={{ __html: abstract }} />
                </StyledLink>
              </Col>
            </Row>
            <Filler color={'#DFF3DB'}/>
            <Row>
              <SubHeader color={'black'}>MOST RECENT</SubHeader>
            </Row>
              {filteredArticles.slice(3).map(article => {
                  const { abstract, uuid, headline, dominantMedia } = article
                  const { attachment_uuid, extension } = dominantMedia
                  return (
                    <Row key={uuid} style = {{borderBottom: '1px solid #EBEBEB'}}>
                      <Col xs={4} style={{padding: '1em', margin: '1em'}}>
                        <Row>
                        <Image fluid src={IMAGE_URL(attachment_uuid, extension)} />
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
              <Filler color={'#DFF3DB'}/>
          </Col>
          <RightCol mostReadDP={mostReadDP} />
        </Row>
      </Container>
     <Footer/>
    </Layout>
  )
}


export default Section
