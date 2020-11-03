import './App.css'
import Unsplash, { toJson } from 'unsplash-js';
import React from 'react';

import SearchBar from '../search_bar/SearchBar'
import ResultCard from '../result_card/ResultCard'


class App extends React.Component {

    state = {
        unsplash: new Unsplash({ accessKey: 'WvRsb3jIITBvtei5e9anoJwiHZdGaQOHXmmnsoCZ7Kw' }),
        images: []
    }

    onSearchSubmit = (term) => {
        this.state.unsplash.search.photos(term, 1, 20, {orientation: 'landscape'})
            .then(toJson)
            .then(json => {
                this.setState({images: json.results.map(image => {
                    return (
                        <ResultCard
                            key={image.id.toString()}
                            src={image.urls.thumb}
                            imageDownload={image.urls.full}
                            alt={image.alt_description}
                            userHref={image.user.links.html}
                            userName={image.user.first_name}
                            userSurname={image.user.last_name}
                            likes={image.likes}
                        />
                    )
                })})
            });
    }

    render() {
        return (
            <div className="ui container">
                <h1>Simple React Wallpaper app</h1>
                <p>It allows you to download 10 random photos from unsplash.com</p>
                <SearchBar placeholder="Fetch some images" onSubmit={this.onSearchSubmit}/>
                <div className="search-results">
                    {this.state.images}
                </div>
            </div>
        )
    }
}

export default App