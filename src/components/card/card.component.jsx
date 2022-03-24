import React from 'react';
import { Card, Avatar, Row, Col, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';

function CardComponent({ data, children }) {
  const { Title } = Typography;
  const gridStyle = {
    width: '50%',
    textAlign: 'center',
    justifyContent: 'center',
  };
  const gridHeaderStyle = {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
  };
  return (
    <Row
      style={{
        justifyContent: 'center',
        marginTop: 30,
      }}
      gutter={16}
    >
      <Col span={16} style={{ alignContent: 'center' }}>
        <Card>
          <Card.Grid style={gridHeaderStyle}>
            <Meta
              avatar={<Avatar src={data.picture.medium} />}
              title={data.name.title}
              description={data.name.first + ' ' + data.name.last}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Gender
            <Title level={4}>{data.gender}</Title>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Email{' '}
            <Title level={4}>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </Title>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Age <Title level={4}>{data.dob.age}</Title>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Phone <Title level={4}>{data.phone}</Title>
          </Card.Grid>
          <Card.Grid style={gridHeaderStyle}>{children}</Card.Grid>
        </Card>
      </Col>
    </Row>
  );
}

export default CardComponent;
