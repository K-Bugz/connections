import React, { Component } from 'react'
import { Input, Menu, Image } from 'semantic-ui-react'
// import Dropdownmenu from '../../pages/dropdown'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    // const options = [
    //   { key: 1, text: 'Choice 1', value: 1 },
    //   { key: 2, text: 'Choice 2', value: 2 },
    //   { key: 3, text: 'Choice 3', value: 3 },
    // ]
    return (
      <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='connect'
          active={activeItem === 'connect'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='jobs'
          active={activeItem === 'jobs'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
           {/* <Menu compact>
    <Dropdown text='Dropdown' options={options} simple item />
  </Menu> */}
  {/* <Dropdownmenu/> */}
           <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
    <span>Username</span>
        </Menu.Menu>
        
      </Menu>
    )
  }
}