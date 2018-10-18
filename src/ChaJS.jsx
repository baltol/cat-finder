import React, { Component } from "react";
import axios from "axios";

export default class CatFinder extends Component {
  constructor() {
    super();
    this.limit = 25;
    this.state = {
      images: [],
      currentImageUrl: ""
    }
  }
  componentDidMount() {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=cat&api_key=API_KEY&limit=${this.limit}`).then(({ data }) => {
      this.setState({ images: data.data.map(image => image.images.fixed_width.url) })
    });  
  }
  
  findCat = () => {
    const maxIndex = this.state.images.length - 1;
    const index = Math.floor(Math.random() * Math.floor(maxIndex));
    console.log("image", this.state.images[index])
    this.setState({ currentImageUrl: this.state.images[index] });
    const audio = new Audio("http://soundbible.com/grab.php?id=1287&type=mp3");
    audio.play();
  }

  render() {
    return (
      <div className="cat-finder">
        <button onClick={this.findCat}>Find a Cat!</button>
        <img src={this.state.currentImageUrl} />
      </div>
    )
  }
}


