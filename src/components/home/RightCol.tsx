import React from 'react'
import { Col, Card, ListGroup } from 'react-bootstrap'
import s from 'styled-components'

import { IMostReadArticle } from '../../utils/types'
import { MostReadCard, StyledLink } from '../shared'

const SubHeader = s.h3`
  color: #aa1e22;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.0;
  margin: 0.5em 0;
`

interface IRightColProps {
  mostReadDP: IMostReadArticle[]
}

const RightCol: React.FC<IRightColProps> = ({ mostReadDP }) => (
  <Col style={{ borderLeft: '1px solid #EBEBEB' }}>
    <SubHeader style={{ color: '#AA1E22' }}> MOST READ </SubHeader>
    <Card>
      <ListGroup>
        {mostReadDP.map(({ ogTitle, path }, idx) => (
          <StyledLink key={path} to={path}>
            <ListGroup.Item key={ogTitle} >
              <MostReadCard idx={idx + 1} content={ogTitle} />
            </ListGroup.Item>
          </StyledLink>
          ))}
      </ListGroup>
    </Card>
    <SubHeader> PODCASTS </SubHeader>
    <SubHeader> PRINT ISSUES </SubHeader>
  </Col>
)

export default RightCol
