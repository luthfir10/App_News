import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { Carousel, Col } from "react-bootstrap";

class Home extends Component {
  state = {
    listBerita: [],
    isLoads: true
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const resBerita = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=id&pageSize=5&id=2&apiKey=9773356bbb0447c6a61a5f878d3cbf02"
    );
    const listBerita = resBerita.data.articles;
    console.log(resBerita);
    

    this.setState({
      listBerita,
      isLoads: false
    });
  };

  clickMe = (news) => {
    localStorage.setItem('title', news.title)
    localStorage.setItem('description', news.description)
    localStorage.setItem('content', news.content)
    localStorage.setItem('urlToImage', news.urlToImage)
  };

  render() {
    var { isLoads, listBerita } = this.state;
    if (isLoads) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <Col sm={{ size: "auto" }}>
            <Carousel>
              {listBerita.map(news => {
                return (
                  <Carousel.Item>
                    
                    <Link to='/detail' onClick={() => this.clickMe(news)}>
                      <img
                        className="d-block w-100"
                        src={news.urlToImage}
                        alt="First slide"
                      />
                    </Link>
                    <Carousel.Caption>
                      <h3>{news.title}</h3>
                      <p>{news.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
              ;
            </Carousel>
          </Col>
        </React.Fragment>
      );
    }
  }
}
export default Home;
