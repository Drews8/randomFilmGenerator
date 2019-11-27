import React from "react";

import GetBtn from "./components/getbtn";
import DelBtn from "./components/delbtn"
import Description from "./components/details";
//import { getConsoleOutput } from "@jest/console";

const API_KEY = "82b270dc96b69476d16ea855c6387d3b";

class App extends React.Component {

	state = {
		id: undefined,
		title: undefined,
		release: undefined,
		poster: undefined,
		error: undefined,
	}
	getRandomNumber = (num, from) => {
		return Math.floor(Math.random()*num + from);
	}
	getMovie = async (e) => {
		e.preventDefault();
		let filmPage = this.getRandomNumber(1, 1);
		let filmNumber = this.getRandomNumber(5, 0);
		

		const api_url = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${filmPage}`);
		const data = await api_url.json();
		
		console.log(data);

		this.setState({
			id: data.results[filmNumber].id,
			title: data.results[filmNumber].title,
			release: data.results[filmNumber].release_date,
			poster: data.results[filmNumber].poster_path,
			error: ""
		});
	}
	delMovie = (e) =>{
		e.preventDefault();

		
		localStorage.setItem(this.state.id, "deleted");
		console.log(localStorage);

	}	
	render() {
		return (
			<div>
				
				<Description
					id={this.state.id}
					title={this.state.title}
					release={this.state.release}
					poster={this.state.poster}
				/>
				<GetBtn getMovie={this.getMovie} />
				<DelBtn delMovie={this.delMovie}/>
			</div>
		);
	}
}

export default App;