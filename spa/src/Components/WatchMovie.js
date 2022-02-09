import React,{Component} from 'react';
import './WatchMovie.css';

export class WatchMovie extends Component{
    render(){
        return(
            <div>
            <center><h3>Watch Trailer</h3></center>
            {/* Movie Part */}
            <div className="video-responsive">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/lB95KLmpLR4`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
  </div>
            </div>
        )
    }

}