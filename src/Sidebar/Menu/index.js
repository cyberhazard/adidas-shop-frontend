import React from 'react';
import Submenu from './Submenu';

const menu = [
  {
    label: 'Sports',
    active: true,
    submenu: [
      {
        label: 'Shoes',
        active: true,
        link: '#'
      },
      {
        label: 'Clothing',
        active: false,
        link: '#'
      },
      {
        label: 'Accesories',
        active: false,
        link: '#'
      },
    ]
  },
  {
    label: 'Brands',
    active: false,
    submenu: [
      {
        label: 'Shoes',
        active: true,
        link: '#'
      },
      {
        label: 'Clothing',
        active: false,
        link: '#'
      },
      {
        label: 'Accesories',
        active: false,
        link: '#'
      },
    ]
  },
  {
    label: 'Micoach',
    active: false,
    submenu: [
      {
        label: 'Shoes',
        active: true,
        link: '#'
      },
      {
        label: 'Clothing',
        active: false,
        link: '#'
      },
      {
        label: 'Accesories',
        active: false,
        link: '#'
      },
    ]
  },
]


class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state = { menu }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(index){
    let menu = this.state.menu.map((item,i)=>(item.active=index===i,item))
    this.setState({menu})
  }
  render(){
    return (
      <nav className="menu">
        {
          this.state.menu.map((item,index)=>(
            <div className={`menu__item ${item.active? 'menu__item_selected' : '' }`}
                 onClick={e=>this.handleClick(index)}
                 key={index} >
              <span>{item.label}</span>
              {
                item.active && item.submenu && <Submenu key={index} menu={item.submenu} />
              }
            </div>
          ))
        }
      </nav>
    )
  }
}



export default Menu
