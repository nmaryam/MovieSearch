/*
    ./client/components/App.jsx
*/
import React from 'react';
import {Link} from 'react-router-dom';
import ApiAxiosRequest from '../Helper/AxiosAPI';
import ConfigData from "../Config/Config";
export default class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            errorMessage: "",
            searchResult:[],
        }
        this.changeSearch = this.changeSearch.bind(this);
    }
    changeSearch(e){
        let that = this;
        let searchText = e.target.value;
        // let searchText = "Batman";
        if(searchText.length !== 0) {
            ApiAxiosRequest.getAxiosInstance()
                .get('?s=' + searchText + '&apikey=e753f69a')
                .then(function (response) {
                    console.log(response)
                    if(response.data.Response !== "False" && response.data.Response !== false){
                        that.setState({
                            searchResult: response.data.Search,
                            errorMessage: ""
                        })
                    }
                    else{
                        that.setState({
                            searchResult: [],
                            errorMessage: response.data.Error
                        })
                    }
                    // return (<Redirect to={configData.getUrl(configData.routes.channelcreate)}/>);
                })
                .catch(error => {
                    console.log(error)
                    that.setState({
                        searchResult: [],
                        errorMessage: "Something went wrong!"
                    })
                });
        }else{
            that.setState({
                errorMessage: ""
            })
        }
    }
    render() {
        let that = this;
        let searchResults = "";
        console.log(that.state.searchResult);
        if(that.state.searchResult.length !== 0) {
            searchResults = this.state.searchResult.map(function (obj, key) {
                if (key < 3) {
                    return (
                           <div className="search-result col-xs-6 col-sm-6 col-md-6" key={key}>
                                <div className="col-xs-6 col-sm-6 col-md-6 excerpet text-data" >
                                    <a href={ConfigData.imdbBasePath+obj.imdbID} target="_blank" title="Movie Poster">
                                        <p>{obj.Title}</p>
                                    </a>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 ">
                                    <a href={ConfigData.imdbBasePath+obj.imdbID} target="_blank" title="Movie Poster">
                                        <img src={obj.Poster} height={150} className="poster-image" alt="Movie poster" />
                                    </a>
                                </div>
                                <span className="clearfix borda"/>
                            </div>
                    )
                }
                else {
                    return false
                }
            });
        }
        return (
            <div className="container">
                <div className="row"><div className="page-title"><h2>OMDB Demo</h2></div></div>
                <div className="row">
                    <div className=" form-group col-md-12">
                        <div className="search-input col-md-12">
                            <input type="text" className="col-md-12 form-control has-error" id="omdb_search" ref="omdb_search" onChange={(e)=>this.changeSearch(e)} placeholder="Please enter text here to search a movie."/>
                            <span className="help-block-message"> {this.state.errorMessage}</span>
                        </div>
                        {/*<label className=" control-label col-md-3">Search movie</label>*/}
                    </div>
                </div>

                <div className="container2">
                <hgroup className="mb20">
                    <h4>Search Results</h4>
                    {/*<h2 className="lead"><strong className="text-danger">3</strong> results were found for the search for <strong className="text-danger">Lorem</strong></h2>*/}
                </hgroup>
                    <section className="col-xs-12 col-sm-6 col-md-12" >
                            {searchResults}
                    </section>

                </div>
            </div>
        );
    }
}