import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import Footer from "./Footer";

class Meetups extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() {
        axios.get('https://questioners-two-staging.herokuapp.com/api/meetups/')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.results.slice(0,5)
            })
        })
}
render() {
    const { posts } = this.state;
    const postList = posts.length ? (
        posts.map(post => {
            return (
              <div>
                <Navbar />
                <div className="post card" key={post.id}> 
                    <div className="card-content">
                        <span className="card-title">Title: {post.title}</span>
                        <p>Description: {post.body}</p>
                        <p>Tags: {post.tags}</p>
                        <p>Image: {post.image_url}</p>
                        <p>
                            Rsvps: 
                                Yes {post.rsvp_summary.yes},
                                No {post.rsvp_summary.no},
                                Maybe {post.rsvp_summary.maybe}
                        </p>
                        <p>Location: {post.location}</p>
                        <p>Created by:{post.creator.name}</p>
                    </div>

                </div>
              </div>
            )
        })
    ) : (
        <div className="center">No meetups</div>
    )
    return (
        <div className="container">
        <h4 className="center">All meetups</h4>
        {postList}
        <Footer />
        </div>
    );
}
}

export default Meetups;