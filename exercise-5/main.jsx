// Main.jsx file

// API Key: please get your own if you want to continue using the API
// Create an account at https://www.themoviedb.org, then request an api key
const apiKey = 'api_key=00d4ef959a8900e90ba9053403bb537e';
const baseUrl = 'https://api.themoviedb.org/3/discover/movie?';

// More info at https://developers.themoviedb.org/3/getting-started/images
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
// Simple ListItem component for showing an <li>
var MovieItem = React.createClass({
    render:function() {
        console.log(this.props.data)
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

// Movie List
var MovieList = React.createClass({
    getInitialState:function() {
        return {movies:[], order:'popularity'}
    },
    getMovies:function() {
        // Searh most popular movies
        // See: https://www.themoviedb.org/documentation/api/discover
        let url = baseUrl + apiKey + '&sort_by=popularity.desc'
        $.get(url).then(function(data){
            this.setState({movies: data.results});
        }.bind(this)) // bind component to "this" to use inside callback
    },
    sortMovies:function(movies, order) {
        console.log('order ', order)
        return movies.sort(function(a,b){
            return a[order] - b[order]
        })
    },
    setOrder:function(element) {
        console.log(element.target.id)
        this.setState({order:element.target.id})
    },
    filterMovies:function(movies, filter) {
        if(filter == 'adult') {
            return
        }
    },
    componentDidMount:function() {
        this.getMovies();
    },
    render:function() {
        let sortedMovies = this.sortMovies(this.state.movies, this.state.order)
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


// Render your component in the `main` section
ReactDOM.render(<MovieList />,
    document.querySelector('main')
);
