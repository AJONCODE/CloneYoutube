import React, { Component } from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import YouTubeSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const credentials = require("../credentials");
const API_KEY = credentials.API_KEY;

// Create a new component. This component should produce 
// some HTML

// =========================================================
//                  Downwards-Data-Flow
// Only the most parent component in application should be
// responsible for fetching data (be it from API or from 
// flex-framework or redux itself). index is the most parent 
// component we have(Hence App component is responsible 
// for fetching data)  
// =========================================================

// --------------------------------------------------------
//              class-based component
// --------------------------------------------------------
class App extends Component {
    constructor(props) {
        super(props);

        // when the app first renders, it runs the contructor function,
        // which sets the list of videos to be an empty array and then
        // it kicks off YouTubeSearch function to get some videos
        // In between the time that it takes the YouTubeSearch function
        // request to finish the component still attempts to render itself 
        // (hence at this time videos is still an empty array, so when we try
        // to access the videos in <VideoDetail video={ this.state.videos[0] } />
        // we get undefined). So we need to check for it in video_detail.js. 
        this.state = { 
            videos: [],
            selectedVideo: null
        }; 

        this.videoSearch("Shikamaru Nara");
    }

    videoSearch(term) {
        YouTubeSearch(
            {
                key     : API_KEY,
                term    : term 
            },
            (videos) => {
                this.setState(
                    { 
                        // videos: videos
                        videos,
                        selectedVideo: videos[0]
                    }
                );
            }
        );
    }

    render(){
        // console.log("Youtube clone using : youtube-api-v3-search");
        // console.log(this.state.videos);
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <div className="row">
                    <VideoDetail video={ this.state.selectedVideo } />
                    <VideoList 
                        onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) } 
                        videos={ this.state.videos } />
                </div>
            </div>
        );
    }
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(
    <App />,
    document.querySelector("#demo")
);

