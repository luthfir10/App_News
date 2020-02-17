import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import { Col } from "react-bootstrap";
import Media from "react-bootstrap/Media";

class ListNews extends Component {
  state = {
    listBerita: [],
    isLoads: true,
    total: null,
    per_page: null
  };

  componentDidMount() {
    this.fetchData(1);
  }

  fetchData = async pageNumbae => {
    const resBerita = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=id&pageSize=5&page=" +
        pageNumbae +
        "&id=2&apiKey=9773356bbb0447c6a61a5f878d3cbf02"
    );
    const listBerita = resBerita.data.articles;

    this.setState({
      listBerita,
      total: resBerita.data.totalResults,
      per_page: 5,
      current_page: pageNumbae,
      isLoads: false
    });
  };

  clickMe = news => {
    localStorage.setItem("title", news.title);
    localStorage.setItem("description", news.description);
    localStorage.setItem("content", news.content);
    localStorage.setItem("urlToImage", news.urlToImage);
  };

  render() {
    let renderPageNumbers;
    const pageNumbers = [];
    if (this.state.total !== null) {
      for (
        let i = 1;
        i <= Math.ceil(this.state.total / this.state.per_page);
        i++
      ) {
        pageNumbers.push(i);
      }

      renderPageNumbers = pageNumbers.map(number => {
        return (
          <Pagination.Item onClick={() => this.fetchData(number)} aktifs>
            {number}
          </Pagination.Item>
        );
      });
    }

    var { isLoads, listBerita } = this.state;
    if (isLoads) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <ul className="list-unstyled">
            {listBerita.map(news => {
              return (
                <Media as="li">
                  <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={news.urlToImage}
                    alt="Generic placeholder"
                  />
                  <Link to="/detail" onClick={() => this.clickMe(news)}>
                    <Media.Body>
                      <h5>{news.title}</h5>
                      <p>{news.description}</p>
                    </Media.Body>
                  </Link>
                </Media>
              );
            })}
          </ul>
          <Col sm={{ size: "auto" }}>
            <Pagination>
              <Pagination.First onClick={() => this.fetchData(1)} />
              {renderPageNumbers}
              <Pagination.Last onClick={() => this.fetchData(1)} />
            </Pagination>
          </Col>
        </>
      );
    }
  }
}
export default ListNews;
