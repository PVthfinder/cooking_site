import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import RecipeStepsList from '../components/RecipeStepsList.jsx'

import { Container } from '@material-ui/core'
import { fetchRecipe } from "../actions/recipeActions.js";

const Recipe = ({ recipeId, recipe, users, reviewsList, fetchRecipe }) => {

    useEffect(() => {
        fetchRecipe(Number(location.href.slice(location.href.lastIndexOf('/')+1)));
    }, [])
    
    const { reviews } = reviewsList;

    if (recipe.recipe.name) {
        return (
            <Container maxWidth='lg'>
                <RecipeStepsList recipe={recipe.recipe} ingredients= {recipe.ingredients} reviews={reviews} />
            </Container>
        );
    } else {
        return <div></div>
    }

};

const mapStateToProps = (state, ownProps) => ({
    recipeId: ownProps.id,
    recipe: state.recipe,
    // recipe: state.recipes.find((recipe) => recipe.id === ownProps.id),
    users: state.users,
    reviewsList: state.reviews,
});

export default connect(mapStateToProps, { fetchRecipe })(Recipe);
