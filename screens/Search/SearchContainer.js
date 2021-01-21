import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movies, tv } from "../../api";

export default class extends React.Component{

    state={
        loading:false,
        tvResults:null,
        movieResults:null,
        searchTerm:"",
        error:null
    }

    handleSearchUpdate = (text) =>{
        this.setState({
            searchTerm: text
        });
    };

    onSubmitEditing = async() =>{
        const {searchTerm} = this.state;
        if(searchTerm!==""){
            let loading, movieResults, tvResults, error;

            this.setState({
                loading:true

            });
            try{
                    ({data:{results:movieResults}} = await movies.searchMovies(searchTerm));
                    ({data:{results:tvResults}} = await tv.searchTv(searchTerm));
            }catch(error){
                console.log(error);
                error = "Nothing.";

            }finally{
                this.setState({
                    loading:false,
                    movieResults,
                    tvResults,
                    error,

                })
            }
            
        }
    }
    
    render(){
        const {loading,tvResults,movieResults,searchTerm,error} = this.state;

        return (
        <SearchPresenter 
        loading = {loading}
        tvResults = {tvResults}
        movieResults = {movieResults}
        searchTerm = {searchTerm} 
        handleSearchUpdate = {this.handleSearchUpdate}
        onSubmitEditing = {this.onSubmitEditing}
        />
        );

    }
}