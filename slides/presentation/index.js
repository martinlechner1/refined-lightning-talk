// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Link,
  Slide,
  Text,
  Image,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const images = {
  oneDoes: require('../assets/lt1.jpg'),
  whenIDo: require('../assets/lt2.jpg'),
  girlFriend: require('../assets/lt3.jpg'),
  example1: require('../assets/example1.png'),
  example2: require('../assets/example2.png'),
  circe: require('../assets/circe.png'),
  //markdown: require('../assets/markdown.png'),
  //mobx: require('../assets/mobx.png'),
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#ff7500',
    tertiary: '#003468',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Refinement Types
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3}>
            Martin Lechner - 26.07.2018
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={`
          Strings are evil. <br/>
          You don’t know what’s hidden inside. <br/>
          Maybe an email address, maybe a guid, maybe an url?<br/>
          This leads to a complexity in your program and makes it harder to
          reason about it. <br/>
          Going further: Do you want to express positive number 
          or number between 1 and 100 via type system?<br/>
          There is a solution:
        `}
        >
          <Image src={images.oneDoes} />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={`
          Like this awesome guy states: Use refinement types.<br/>
          For Scala there is eu.timepit.refined
        `}
        >
          <Image src={images.whenIDo} />
        </Slide>
        <Slide
          notes={`
        Here we have three examples.<br/><br/>
        First one Requires the number to be positive.
        The value has to be known at compile time. <br/><br/>

        The Second one is the same as the first one, but other Notation<br/><br/>

        The third one is the most useful, since it works at Runtime and
        returns an Either
        `}
        >
          <Image src={images.example1} />
        </Slide>
        <Slide
          notes={`
        The examples from the intro.<br/><br/>

        This looks a bit weird due to type system constraints of Scala. 
        It will be much better with Scala 3's literal types.<br/><br/>

        The first one states that the number has to big bigger than 41. <br/><br/>

        The second one states that the number must be bigger than 0 and lesser than 100. <br/><br/>

        The third one required the string to be an UUID, the fourth one to be an Url. <br/><br/>

        The last one is email validation with a simple regex, which is semantically not entirely correct though...
        `}
        >
          <Image src={images.example2} />
        </Slide>
        <Slide
          notes={`
          There are several integrations with libraries, for example 
          with Circe, Scanano, Kantan, Play, Slick amongst others.<br/><br/>
          This example uses the Circe integration.
          We use NonEmptyString, which is
          recognized by Circe's value as. <br/><br/>
          This solves the problem
          of handling empty strings like null or no value in json.
          `}
        >
          <Image src={images.circe} />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={`
        Hopefully you will try it out and switch up your coding habits. Thank you!`}
        >
          <Image src={images.girlFriend} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="secondary">
            Links
          </Heading>
          <List size={3}>
            <ListItem>
              <Link href="https://github.com/fthomas/refined" target="_blank">
                Github Repo of Scala Refined
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="http://ucsd-progsys.github.io/intro-refinement-types/120/01-index.html"
                target="_blank"
              >
                Theory
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/martinlechner1/refined-lightning-talk"
                target="_blank"
              >
                Slides
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/FormidableLabs/spectacle"
                target="_blank"
              >
                Slides created with Spectacle!
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
