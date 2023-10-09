import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './card.css'


const CardItem = (props)=>{
    return <div className="column">
    <Card >
        <Image src={props.pic} wrapped ui={false} />
             
      <Card.Content>
        <Card.Header>{props.devName}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.devDesc}</span>
          <hr />
        </Card.Meta>
    </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='star' color='yellow' />
          {props.stars}
        </a>
      </Card.Content>
    </Card>
    </div>
}
  export default CardItem