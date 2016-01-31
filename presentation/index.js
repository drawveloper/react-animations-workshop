// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CSSTransitionGroup from "react-addons-css-transition-group";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

class TransitionExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }

  render() {
    return (
      <CSSTransitionGroup
        component="div"
        style={{width:"100%", height: 120, cursor: "pointer"}}
        onClick={() => this.setState({visible: !this.state.visible})}
        transitionName="example"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}>
        {this.state.visible &&
          <Heading size={1} key="content">
            Hello, world!
          </Heading>
        }
      </CSSTransitionGroup>
    );
  }
}

let index = 0;

class TransitionListExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  handleAdd() {
    this.setState({
      items: this.state.items.concat(["List Item " + this.state.items.length])
    });
  }

  handleRemove() {
    this.setState({
      items: this.state.items.slice(0, this.state.items.length - 1)
    });
  }

  renderItems() {
    return (
      this.state.items.map((i) => {
        return <p key={i} className="list-item">{i}</p>
      })
    );
  }

  render() {
    return (
      <div className={"list-container " + this.props.className}>
        <button onClick={this.handleAdd.bind(this)}>Add</button>
        <button onClick={this.handleRemove.bind(this)}>Remove</button>
        <CSSTransitionGroup
          className="list"
          component="div"
          transitionName="list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.renderItems()}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide>
            <Appear fid="1">
              <Heading size={1} caps lineHeight={1.2}>
                Head Start
              </Heading>
            </Appear>
            <Heading size={3} fit>
              CSS Animations
            </Heading>
            <Appear fid="2">
              <Heading size={3}>
                with React
              </Heading>
            </Appear>
            <Appear fid="3">
              <Text>Guilherme Rodrigues - firstdoit.com</Text>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={1} fit>
              What we"re doing today
            </Heading>
            <Appear fid="1">
              <Heading size={4}>
                1. Why animate?
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4}>
                2. CSS Animations
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={4}>
                3. CSSTransitionGroup
              </Heading>
            </Appear>
            <Appear fid="4">
              <Heading size={4}>
                4. Animation Components
              </Heading>
            </Appear>
          </Slide>

          {
          // Part 1 - Why Animate?
          }

          <Slide>
            <Heading size={1} fit caps lineHeight={1.2}>
              Why Animate?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4}>
              1. Create authenticity.
            </Heading>
          </Slide>

          <Slide>
            <BlockQuote>
              "Watching an object move demonstrates whether it’s light, heavy, flexible, rigid, small or large."
            </BlockQuote>
          </Slide>

          <Slide>
            <BlockQuote>
              "Motion in material design should embrace the familiarity and real-world behavior of physical objects"
            </BlockQuote>
          </Slide>

          <Slide>
            <video id="1-None_0B3T7oTWa3HiFOWhhS1d1d1FGcEk" crossorigin="anonymous" preload="metadata" autoPlay controls loop
              style={{maxHeight: "300px"}}>
              <source src="//material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0B3T7oTWa3HiFS2hrd3dPVVFfdHM/animation-authenticmotion-massandweight-do.webm" type="video/webm" />
              <source src="//material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0B3T7oTWa3HiFOWhhS1d1d1FGcEk/animation-authenticmotion-massandweight-do.mp4" type="video/mp4" />
            </video>
          </Slide>

          <Slide>
            <Heading size={4}>
              2. Respond to user input.
            </Heading>
          </Slide>

          <Slide>
            <BlockQuote>
              "Responsive interaction encourages deeper exploration of an app by creating timely, logical, and delightful screen reactions to user input."
            </BlockQuote>
          </Slide>

          <Slide>
            <video id="1-None_0B3T7oTWa3HiFcDFYVWp0QUVGSEE" crossorigin="anonymous" preload="metadata" autoPlay controls loop
              style={{maxHeight:"600px"}}>
              <source src="//material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0B3T7oTWa3HiFOFFrMHpqN3NMQkU/animation_responsiveinteraction_userinput_materialresponse.webm" type="video/webm" />
              <source src="//material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0B3T7oTWa3HiFcDFYVWp0QUVGSEE/animation_responsiveinteraction_userinput_materialresponse.mp4" type="video/mp4" />
            </video>
          </Slide>

          <Slide>
            <Heading size={4}>
              3. Focus user attention.
            </Heading>
          </Slide>

          <Slide>
            <BlockQuote>
              "Motion design can effectively guide the user’s attention in ways that both inform and delight."
            </BlockQuote>
          </Slide>

          <Slide>
            <BlockQuote>
              "A well-designed transition tells the user where to focus their attention."
            </BlockQuote>
          </Slide>

          <Slide>
            <video id="1-None_0Bzhp5Z4wHba3UHQzVFRTeEJHRkE" crossorigin="anonymous" preload="metadata" autoPlay controls loop tabindex="0"
              style={{maxHeight:"650px"}}>
              <source src="//material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bzhp5Z4wHba3RXRFb0tRZEZDUUU/animation_meaninfultransitions_considerations_do.webm" type="video/webm" />
              <source src="//material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bzhp5Z4wHba3UHQzVFRTeEJHRkE/animation_meaninfultransitions_considerations_do.mp4" type="video/mp4" />
            </video>
          </Slide>

          <Slide>
            <Heading size={1}>
              Why animate?
            </Heading>
            <Appear fid="1">
              <Heading size={4}>
                1. Create authenticity.
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4}>
                2. Respond to user input.
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={4}>
                3. Focus user attention.
              </Heading>
            </Appear>
          </Slide>

          {
          // Part 2 - CSS Animations
          }

          <Slide>
            <Heading size={1} fit caps lineHeight={1.2}>
              CSS Animations
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1.2}>
              <code>animation</code> vs <code>transition</code>
            </Heading>
          </Slide>

          <Slide>
            <CodePane
              lang="css"
              source={require("raw!./animation.css.example")}
              margin="20px auto"
            />
            <div className="pulse-example" style={{
              width: 250,
              height: 250,
              position: "absolute",
              top: 80,
              right: 60
            }}>
            </div>
          </Slide>

          <Slide>
            <Heading size={1}>Question</Heading>
            <Heading size={3}>Can we improve this loop?</Heading>
          </Slide>

          <Slide>
            <CodePane
              lang="css"
              source={require("raw!./animation2.css.example")}
              margin="20px auto"
            />
            <div className="pulse-example-2" style={{
              width: 250,
              height: 250,
              position: "absolute",
              top: 80,
              right: 60
            }}>
            </div>
          </Slide>

          <Slide>
            <CodePane
              lang="css"
              source={require("raw!./transition.css.example")}
              margin="20px auto"
            />
            <div className="transition-example" style={{
              width: 210,
              height: 210,
              position: "absolute",
              top: 80,
              right: 60
            }}>
            </div>
          </Slide>

          <Slide>
            <Heading size={1}>Question</Heading>
            <Heading size={3}>What happens if we move the transition property?</Heading>
          </Slide>

          <Slide>
            <CodePane
              lang="css"
              source={require("raw!./transition2.css.example")}
              margin="20px auto"
            />
            <div className="transition-example-2" style={{
              width: 210,
              height: 210,
              position: "absolute",
              top: 80,
              right: 60
            }}>
            </div>
          </Slide>

          <Slide>
            <Heading size={1}>
              CSS Animations
            </Heading>
            <Appear fid="1">
              <Heading size={4}>
                <code>animation</code>
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4}>
                for complex tasks
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={4}>
                <code>transition</code>
              </Heading>
            </Appear>
            <Appear fid="4">
              <Heading size={4}>
                for everything else
              </Heading>
            </Appear>
          </Slide>

          {
          // Part 3 - CSSTransitionGroup
          }

          <Slide>
            <Heading size={1} fit lineHeight={1.2}>
              {"<CSSTransitionGroup/>"}
            </Heading>
          </Slide>

          <Slide>
            <BlockQuote>
              "React provides a (...) ReactCSSTransitionGroup for easily implementing basic CSS animations and transitions."
            </BlockQuote>
          </Slide>

          <Slide>
            <CodePane
              lang="js"
              source={require("raw!./react.jsx.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <CodePane
              lang="js"
              source={require("raw!./react.css.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <TransitionExample/>
          </Slide>

          <Slide>
            <CodePane
              lang="js"
              source={require("raw!./react2.jsx.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <CodePane
              lang="js"
              source={require("raw!./react2.css.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <TransitionListExample className="example-1"/>
          </Slide>

          <Slide>
            <TransitionListExample className="example-2"/>
          </Slide>

          {
          // Part 4 - Animation components
          }

          <Slide>
            <Heading size={1} fit lineHeight={1.2}>
              {"Animation components"}
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1.2}>
              {"<FadeAnimation/>"}
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4}>
              <Link href="http://codepen.io/gadr90/pen/Gpwdbq?editors=011">Codepen</Link>
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4}>
              <Link href="https://www.google.com/design/spec/material-design/introduction.html">Google Material Design</Link>
            </Heading>
            <Heading size={4}>
              <Link href="https://css-tricks.com/almanac/properties/a/animation/">CSS Tricks - Animation</Link>
            </Heading>
            <Heading size={4}>
              <Link href="https://css-tricks.com/almanac/properties/t/transition/">CSS Tricks - Transition</Link>
            </Heading>
          </Slide>

          <Slide>
            <Heading>
              Thanks!
            </Heading>
            <br/>
            <Heading size={1}>
              <Link textColor="secondary" href="http://firstdoit.com">firstdoit.com</Link>
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
