import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main(state) {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
  };

  const HomePage = () =>{
      return(
          <Home dish={state.dishes.filter((dish) => dish.featured)[0]}
                promotion={state.promotions.filter((promo) => promo.featured)[0]}
                leader={state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
  }

  const DishWithId = ({match}) => {
      return(
          <DishDetail dish={state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          />
      );    
  }

  return (
    <div>
        <Header/>
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={() => <Menu dishes={state.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact}/>
            <Route exact path="/aboutus" component={() => <About leaders={state.leaders}/>}/>
            <Redirect to="/home" />
        </Switch>
        <Footer />
    </div>
  );
}

export default Main;
