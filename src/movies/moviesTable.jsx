import React, { Component } from "react";
import Like from "./common/like";
import Tabel from "./common/tabel";
import { Link } from "react-router-dom";
import auth from "../services/authService";

class MoviesTabel extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      contant: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title} </Link>
      ),
    },
    { path: "genre.name", label: " Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      contant: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  deleteColumn = {
    key: "delete",
    contant: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) {
      this.columns.push(this.deleteColumn);
    }
  }
  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Tabel
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTabel;
