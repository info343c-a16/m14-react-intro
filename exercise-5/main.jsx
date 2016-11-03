// Main.jsx file

// API Key: please get your own if you want to continue using the API after class
// Create an account at https://www.themoviedb.org, then request an api key
const apiKey = 'api_key=00d4ef959a8900e90ba9053403bb537e';
const baseUrl = 'https://api.themoviedb.org/3/discover/movie?';

// Set image size, url (more info at https://developers.themoviedb.org/3/getting-started/images)
const imageSize = 'w300'
const imageUrl = 'https://image.tmdb.org/t/p/' + imageSize

// Some controls for the movie list
var MovieControls = React.createClass({
    render:function() {
        return(
            <div>
                <h5>Sort By:</h5>
                <p>
                    <input onClick={this.props.clickEvent} name="group1" type="radio" id="popularity" defaultChecked/>
                    <label htmlFor="popularity">Popularity</label>
                </p>
                <p>
                    <input onClick={this.props.clickEvent} name="group1" type="radio" id="vote_count" />
                    <label htmlFor="vote_count">Vote Count</label>
                </p>
                <p>
                    <input onClick={this.props.clickEvent} name="group1" type="radio" id="vote_average"  />
                    <label htmlFor="vote_average">Vote Average</label>
                </p>
            </div>

        )
    }
})

// MovieItem element for showing a movie card
var MovieItem = React.createClass({
    render:function() {
        // Return image card
        // Taken from: http://materializecss.com/cards.html
        return(
                <div className="col s3">
                    <div className="card">
                        <div className="card-image">
                            <img src={imageUrl + this.props.data.poster_path + '?' + apiKey} />
                        </div>
                        <div className="card-content">
                            <p>{this.props.data.title}</p>
                        </div>
                    </div>
                </div>
        )
    }
});

// Movie App
var MovieApp = React.createClass({
    // Set initlal state: empty array for movies, order:'popularity'
    getInitialState:function() {
        return {movies:[], order:'popularity'}
    },

    // Function to get movies from the API
    getMovies:function() {
        // Searh most popular movies
        // See: https://www.themoviedb.org/documentation/api/discover
        let url = baseUrl + apiKey + '&sort_by=popularity.desc'
        $.get(url).then(function(data){
            this.setState({movies: data.results});
        }.bind(this)) // bind component to "this" to use inside callback
    },

    // Function to sort an array by an object key
    sortMovies:function(movies, order) {
        return movies.sort(function(a,b){
            return a[order] - b[order]
        })
    },

    // Function to set the "order" of state
    setOrder:function(element) {
        this.setState({order:element.target.id})
    },

    // When the component mounts, get the movies from the API
    componentDidMount:function() {
        this.getMovies();
    },

    // Render function
    render:function() {
        // Sort your movies
        let sortedMovies = this.sortMovies(this.state.movies, this.state.order)

        // Return a MovieItem for each element in your sorted array
        return(
            <div className="container">
                <MovieControls clickEvent={this.setOrder}/>
                <div className="row">
                    {sortedMovies.map(function(d, i){
                        return <MovieItem key={'movie' + i} data={d} />
                    })}
                </div>
            </div>
        );
    }
});


// Render your MovieApp component in the `main` section
ReactDOM.render(<MovieApp />,
    document.querySelector('main')
);
