import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


// generate array of images
let image_paths = []
for (let i = 0; i < 6; i++) { image_paths[i] = 'http://alxndr.io/clay'+"0"+i+".jpg" }
let xxx = 0; // counter init


class ColorBlock extends React.Component {
  constructor (props) { super(props); }
  render () {
    return (
      <color_block
        id={this.props.color}
        style={{backgroundColor : this.props.color}}
      >

        <img src={image_paths[(xxx++)%6]}></img>
        <h1 className={'title'}>hello</h1>
      </color_block>
    )
  }
}

class ColorGrid extends React.Component {
  constructor (props) { super(props); }

  render ()  {
    // map from color_array (i.e. : ["#05c1ff" , "#4405ff", ...]) to JSX <NavItem /> components, pass in the color
    return (
      <color_grid>
        {this.props.colors.map((color_list) => {
          return color_list.map((color) => {
            return (<ColorBlock color={color} />)
          })
        })}
      </color_grid>
    )
  }
}

class NavElement extends React.Component {
  constructor (props) { super(props); }

  scroll_to_dest (id) {
    window.scrollTo({
      top: document.getElementById(id).offsetTop - (.10 * document.documentElement.clientHeight),
      left:document.getElementById(id).offsetLeft - (.10 * document.documentElement.clientWidth),
      behavior : 'smooth'
    })
  }

  render() {
    let color_nav_item_style = { backgroundColor : this.props.color }
    return (
      <grid_button onClick={() => this.scroll_to_dest(this.props.color)} style={color_nav_item_style}></grid_button>
    )
  }
 }

class Nav extends React.Component {
  constructor (props) { super(props); }

  render () {
    return (
      // map from color_array (i.e. : ["#05c1ff" , "#4405ff", ...]) to JSX <NavItem ... /> components, pass in the color
      <nav>
        {this.props.colors.map((color_list) => {
          return color_list.map((color) => {
            return (<NavElement color={color} />)
          })
        })}
      </nav>
    )
  }
}

class App extends React.Component {
  constructor (props) /* set 'color_array' to copy of 'colors' array */ {
    super(props); this.color_grid = props.colors.slice();
  }

  render () /* wrap <Nav /> and <ColorRows /> componenets in container */ {
    // TODO // return (<ColorRow color={color} />)
    return (
      <container id="container">
        <Nav colors={this.color_grid.slice()} />
        <ColorGrid colors={this.color_grid.slice()} />
      </container>
    )
  }
}
ReactDOM.render(<App
        colors={[
          ["#f8c7aa", "#f19b9c", "#ea708e"]
        , ["#d54d88", "#a73b8f", "#7a2995"]
        , ["#5b1f84", "#451764", "#300f45"]
        ]}
        data={[
          {
            type:null,
            background_image:null,
            symbol:null,
            title:null,
            body:null,
            links:[]
          },
        ]}
               />, document.getElementById("root"));

window.scroll((window.innerWidth*.705),(window.innerHeight*.715))

// ReactDOM.render(< />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
