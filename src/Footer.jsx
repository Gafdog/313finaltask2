import React from "react"
import './Footer.css'
import {Button, Icon, Menu, Table } from 'semantic-ui-react'



function Footer ()
{
    return (

    <div className="borderless-table">
  <Table celled >
    <Table.Header >
      <Table.Row>
        <Table.HeaderCell >For Dev</Table.HeaderCell>
        <Table.HeaderCell >For Clients</Table.HeaderCell>
        <Table.HeaderCell >Stay Connected</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
        <a href="" className='linksfooter'>How it Works</a>
        </Table.Cell>
        <Table.Cell><a href="" className='linksfooter'>How it Works</a></Table.Cell>
        <Table.Cell><Button color='facebook'><Icon name='facebook' />Facebook</Button><Button color='twitter'><Icon name='twitter' />Twitter</Button><Button color='instagram'><Icon name='instagram' />Instagram</Button></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><a href="" className='linksfooter'>How to create a profile</a></Table.Cell>
        <Table.Cell><a href="" className='linksfooter'>How to post a job</a></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><a href="" className='linksfooter'>Find Jobs</a></Table.Cell>
        <Table.Cell><a href="" className='linksfooter'>How it Works</a></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      </Table.Body>
   

    
  
    <Table.Header >
      <Table.Row>
        <Table.HeaderCell ></Table.HeaderCell>
        <Table.HeaderCell >DEVLink</Table.HeaderCell>
        <Table.HeaderCell ></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
      <Table.Cell><a href="" className='linksfooter'>Privacy Policy</a></Table.Cell>
        <Table.Cell><a href="" className='linksfooter'>Terms</a></Table.Cell>
        <Table.Cell><a href="" className='linksfooter'>Code of Conduct</a></Table.Cell>
      </Table.Row>
  
    </Table.Body>
    </Table>

  </div>   
)

}

export default Footer