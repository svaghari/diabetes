import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={() => "Hello" } />
        <Route exact path="/about" component={() => "About" } />
        <Route exact path="/Pages" component={() => "Pages" } />
        <Route exact path="/faq" component={() => "FAQ" } />
        <Route exact path="/contact" component={() => "Contact" } />
        <Route exact path="/Home-1" component={
          () => 'What Are We Building \n In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.\n You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax.\n  We recommend that you check out the tic-tac-toe game before continuing with the tutorial.\n One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.\n This list gives you a history of all of the moves that have occurred in the game, and is updated as the game progresses.\n        You can close the tic-tac-toe game once you’re familiar with it.\n We’ll be starting from a simpler template in this tutorial. Our next step is to set you up so that you can start building the game.' } />
        <Route exact path="/Home-2" component={() => "Chapter-2" } />
        <Route exact path="/Home-3" component={() => "Chapter-3" } />
        <Route exact path="/Page-1" component={() => "Page-1" } />
        <Route exact path="/Page-2" component={() => "Page-2" } />
        <Route exact path="/page-1" component={() => "Section-1" } />
        <Route exact path="/page-2" component={() => "Section-2" } />
        <Route exact path="/page-3" component={() => "Section-3" } />
        <Route exact path="/page-4" component={() => "Section-4" } />                
      </Switch>
    </Container>
)
