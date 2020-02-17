import React, { Component } from "react";
import "../Error/page404.css";

class Page404 extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div class="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Page404;
