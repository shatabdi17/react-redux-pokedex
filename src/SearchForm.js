import React from 'react';
import { connect } from 'react-redux'; // connect indicates which components that want access to state
import { updateSearchString } from './pokemonReducer';

// if you don't use export default you would import it as { SearchForm}
const SearchForm = ( {searchString, dispatchUpdateSearchString}) => {
    console.log(`Updated ${searchString}`);
    return(
        <form>
            <input
            type='text'
            placeholder='pokemon number'
            value={searchString}
            onChange={dispatchUpdateSearchString}
            />
            
            <br/>
    
            <button>
            search
            </button>
        </form>
    );
}

const mapStateToProps = state => ({
    searchString: state.searchString,
})

const mapDispatchToProps = dispatch => ({
    dispatchUpdateSearchString: (e) => dispatch(updateSearchString(e.target.value))
})

export default connect (mapStateToProps, mapDispatchToProps)(SearchForm);
