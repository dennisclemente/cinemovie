import React from 'react';
import ShowCard from './ShowCard';
import preload from './data.json';

class Search extends React.Component {
    state = {
        searchTerm: ''
    };

    handleSearchTermChange = event => {
        this.setState({searchTerm: event.target.value});
    };
    // this.handleSearchTermChange=this.handleSearchTermChange.bind(this);
    
    // constructor (props) {
    //     super(props) 
        
    //     this.state = {
    //         searchTerm: 'this is for checking'
    //     };
    
    render () {
        return (
            <div className = 'search'>
            <header>
            <h1>svideo</h1>
            <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text'
            placeholder='Search' />
            </header>
            <div>
            {preload.shows.map(show => <ShowCard key={show.imdbID} show={show} />)}
            </div>
            </div>       
            );
        }
    }

export default Search;