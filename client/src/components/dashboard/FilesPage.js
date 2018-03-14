import React, { Component } from 'react';
import Dashnav from '../partials/Dashnav';
import SideNav from '../partials/SideNav';
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import ReactPaginate from 'react-paginate';
import { getFiles } from '../../actions/ManageFiles';
import { FilesTableBlock } from '../tableComponents/FilesTableBlock';

import '../../assets/dash.css'

export class Files extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentWillMount() {
    }
    render() {
        return(
            <div className="filesDash">
                <Dashnav />
                <SideNav currentPage={"files"} />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1 className="active">File Submissions</h1>
                        </div>
                    </div>
                    <div className="dashTableContainer">
                        <div className="dashTableTitles">
                            <h1>All Files</h1>
                            <div className="dashItemFilters">
                                <select name="" id="">
                                    <option value="day">Last Day</option>
                                    <option value="day">Last Week</option>
                                    <option value="day">Last Month</option>
                                    <option value="day">Last Year</option>
                                </select>
                                <input type="text" placeholder="Search Jobs"/>
                            </div>
                        </div>
                        <table className="dashTable">
                            <thead className="dashTableHeader">
                                <tr>
                                    <th>Uploaded</th>
                                    <th>Task/Job</th>
                                    <th>Download</th>
                                    <th>Team</th>
                                    <th>Manager</th>
                                    <th>File Rating</th>
                                    <th>Client</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.files.map((e, i) => {
                                        return (
                                            <FilesTableBlock key={i} file={e} />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="paginationContainer">
                            <ReactPaginate
                                pageCount={this.props.totalPage}
                                pageRangeDisplayed={3}
                                marginPageDispayed={2}
                                onPageChange={(e) => {
                                    this.props.fetchFiles(e.selected + 1)
                                }}
                                activeClassName={"active"}
                                containerClassName={"react-paginate"}
                                initialPage={0}
                                pageClassName={"page-item"}
                                />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        files: state.manageFiles.files,
        page: state.manageFiles.page,
        totalPage: state.manageFiles.totalPage,
        totalItems: state.manageFiles.totalItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFiles: (e) => {
            axios.get(apiUrl + '/files/fetch', {
                params: {
                    page: e
                }
            })
            .then(response => {
                const filesData = response.data.data
                store.dispatch(getFiles(filesData.page, filesData.pageCount, filesData.results, filesData.totalCount))
            })
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        fetchFiles: dispatchProps.fetchFiles,
        files: stateProps.files,
        page: stateProps.page,
        totalItems: stateProps.totalItems,
        totalPage: stateProps.totalPage,
    }
}


export const FilesPage = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Files)
