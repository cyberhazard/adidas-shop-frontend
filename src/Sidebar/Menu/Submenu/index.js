import React from 'react';

class Submenu extends React.Component {
  constructor(props){
    super(props)
    this.state = { menu: props.menu }
  }
  handleClick(e,index){
    e.stopPropagation();
    let menu = this.state.menu.map((item,i)=>(item.active=index===i,item))
    this.setState({menu})
  }
  render(){
    return (
      <nav className="menu__submenu">
        {
          this.state.menu.map((item,index)=>(
            <div className="menu__subitem"
                 onClick={e=>this.handleClick(e,index)}
                 key={index}
            >
              <a className={`menu__link ${item.active? 'menu__link_active' : '' }`}
                 href={item.link}
              >{item.label}</a>
            </div>
          ))
        }
      </nav>
    )
  }
}


export default Submenu
