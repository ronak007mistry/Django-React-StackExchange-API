import React, { Component } from "react";
import { render } from "react-dom";
import "@babel/polyfill";
import axios from 'axios';
import qs from 'qs';
import ReactPaginate from 'react-paginate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      placeholder: "Loading",
      "pageCount": 100,
      "page": 1,
      "pagesize": 15,
      "fromdate": "",
      "todate": "",
      "min": "",
      "max": "",
      "order": "",
      "sort": "",
      "q": "",
      "accepted": "",
      "answers": "",
      "body": "",
      "closed": "",
      "migrated": "",
      "notice": "",
      "nottagged": "",
      "tagged": "",
      "title": "",
      "user": "",
      "url": "",
      "views": "",
      "wiki": "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var name = event.target.name;
    this.setState({ [`${name}`] : event.target.value});
  }


async handleSubmit(event) {
  event.preventDefault();
  await axios({
    method: 'POST',
    url: "api/stack",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({
    "page": this.state.page,
    "pagesize": this.state.pagesize,
    "fromdate": this.state.fromdate,
    "todate": this.state.todate,
    "min": this.state.min,
    "max": this.state.max,
    "order": this.state.order,
    "sort": this.state.sort,
    "q": this.state.q,
    "accepted": this.state.accepted,
    "answers": this.state.answers,
    "body": this.state.body,
    "closed": this.state.closed,
    "migrated": this.state.migrated,
    "notice": this.state.notice,
    "nottagged": this.state.nottagged,
    "tagged": this.state.tagged,
    "title": this.state.title,
    "user": this.state.user,
    "url": this.state.url,
    "views": this.state.views,
    "wiki": this.state.wiki,
    "pageno": this.state.pageno
    })
  }).then(response => {
    if (response.status > 400 || response.data.success == false) {
      alert("Something went wrong!");
      return 0;
    }
    console.log(response.data);
    this.setState({data: response.data.items});
  });
}

  render() {
    return (
      <div>
        <form method="POST" onSubmit={this.handleSubmit} style={{float:'left', padding: '5%'}}>
          <div class="mb-0">
            <label class="form-label">Page</label>
            <input type="number" class="form-control" name="page" value={this.state.page} onChange={this.handleChange}/>
          </div>
          <div class="mb-0">
            <label class="form-label">Page size</label>
            <input type="number" class="form-control" name="pagesize" value={this.state.pagesize} onChange={this.handleChange}/>
          </div>


          <div class="mb-0">
            <label class="form-label">From date</label>
            <input type="date" class="form-control" name="fromdate" value={this.state.fromdate} onChange={this.handleChange}/>
          </div>

          <div class="mb-0">
            <label class="form-label">To date</label>
            <input type="date" class="form-control" name="todate" value={this.state.todate} onChange={this.handleChange}/>
          </div>


          <label class="form-label">Order</label>
          <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="order" value={this.state.order} onChange={this.handleChange}>
          <option value="desc">desc</option>
          <option value="asc">asc</option>
          </select>

          <div class="mb-0">
            <label class="form-label">Min</label>
            <input type="date" class="form-control" name="min" value={this.state.min} onChange={this.handleChange}/>
          </div><div class="mb-0">
            <label class="form-label">Max</label>
            <input type="date" class="form-control" name="max" value={this.state.max} onChange={this.handleChange}/>
          </div>

          <label class="form-label">Sort</label><br/>
          <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="sort" value={this.state.sort} onChange={this.handleChange}>
          <option value="activity">activity</option>
          <option value="votes">votes</option>
          <option value="creation">creation</option>
          <option value="relevance">relevance</option>
          </select><br/>

          <div class="mb-0">
            <label class="form-label">Page size</label>
            <input type="text" class="form-control" name="q" value={this.state.q} onChange={this.handleChange}/>
          </div>


          <label class="form-label">Accepted</label><br/>
          <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="accepted" value={this.state.accepted} onChange={this.handleChange}>
            <option value="True">True</option>
            <option value="False">False</option>
          </select><br/>

          <div class="mb-0">
            <label class="form-label">Answers</label>
            <input type="number" class="form-control" name="answers" value={this.state.answers} onChange={this.handleChange}/>
          </div>
          <div class="mb-0">
            <label class="form-label">Body</label>
            <input type="text" class="form-control" name="body" value={this.state.body} onChange={this.handleChange}/>
          </div>

          <label class="form-label">Closed</label><br/>
          <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="closed" value={this.state.closed} onChange={this.handleChange}>
            <option value="True">True</option>
            <option value="False">False</option>
          </select><br/>

          <label class="form-label">Migrated</label><br/>
          <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="migrated" value={this.state.migrated} onChange={this.handleChange}>
            <option value="True">True</option>
            <option value="False">False</option>
          </select><br/>

          <label class="form-label">Notice</label><br/>
          <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="notice" value={this.state.notice} onChange={this.handleChange}>
            <option value="True">True</option>
            <option value="False">False</option>
          </select><br/>

          <div class="mb-0">
            <label class="form-label">Not tagged</label>
            <input type="text" class="form-control" name="nottagged" value={this.state.nottagged} onChange={this.handleChange}/>
          </div>

          <div class="mb-0">
            <label class="form-label">Tagged</label>
            <input type="text" class="form-control" name="tagged" value={this.state.tagged} onChange={this.handleChange}/>
          </div>
          <div class="mb-0">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.handleChange}/>
          </div>
          <div class="mb-0">
            <label class="form-label">User</label>
            <input type="number" class="form-control" name="user" value={this.state.user} onChange={this.handleChange}/>
          </div>
          <div class="mb-0">
            <label class="form-label">URL</label>
            <input type="text" class="form-control" name="url" value={this.state.url} onChange={this.handleChange}/>
          </div>
          <div class="mb-0">
            <label class="form-label">Views</label>
            <input type="text" class="form-control" name="views" value={this.state.views} onChange={this.handleChange}/>
          </div>

          <label class="form-label">Wiki</label><br/>
          <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="wiki" value={this.state.wiki} onChange={this.handleChange}>
            <option value="True">True</option>
            <option value="False">False</option>
          </select><br/>

          <input type="submit" class="btn btn-primary" value="Submit"/>
        </form>

        <table style={{padding: '20%'}}>
          <thead>
            <tr>
              <th>Search Results</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((items, index) => (
              <tr key={index}>
                <td>{index + 1}.  <a href={items.link} target="_blank">{items.title}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />*/}
        </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
