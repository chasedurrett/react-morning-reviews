import React, { Component } from "react";
import ListItem from "./ListItem";
import movieData from "../data/movies.json";

class List extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData,
    };
  }

  render() {
    const moviesMap = this.state.movies.map((element) => {
      return <ListItem key={element.id} movie={element} />;
    });
    return <div>{moviesMap}</div>;
  }
}
export default List;
