import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: this.props.page,
            totalPage: this.props.totalPage
        }
        console.log(this.props)
    }
    render() {
        return (
            <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.state.totalPage}
                       forcePage={this.state.page}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         totalPage: state.manageJobs.totalPage,
//         page: state.manageJobs.page
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {}
// }

// export const Pagination = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(paginate)