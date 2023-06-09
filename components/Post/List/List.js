import React, { useState ,useContext} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../images/circle_icon.svg"
import Camera from "../../../images/camera.png"
import Heart from "../../../images/heart_icon.png"
import Rocket from "../../../images/share-icon.jpg"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import Header from "../Header/Header";
import './List.css';
import { PostList } from "../../../contexts/PostContext";


export default function AllPost() {

    const {posts} = useContext(PostList);
    return (
        <>
            <Header />

            <div className="list-post-container">
            { posts.length === 0 ? <h3>No post available...</h3> : 
        posts.map(post => { 

return <>
                <div className="row m-3" key={post.id}>
                    <div className="col-12">
                        <Card className="post-card">
                            <Card.Header className="card-header">
                                <div col-5>
                                    <h4>{post.name}</h4>
                                    <label>{post.location}</label>
                                </div>
                                <div col-5>
                                    <span className='dot'>&#9679;&#9679;&#9679;</span>
                                </div>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <img src={`https://insta-clone-bbdf.onrender.com${post.image}`} alt="" />
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <div className="wrapper">
                                    <div className="col-5">
                                        <img src={Heart} alt="heart_icon" />
                                        <img src={Rocket} alt="heart_icon" />
                                        <p> {post.likes}</p>
                                    </div>
                                    <div className="col-5">
                                        <span className='date'>{post.date}</span>
                                    </div>
                                </div>
                                <div col-12 d-block>
                                    <h5> {post.description}</h5>
                                </div>
                            </Card.Footer>
                        </Card>


                    </div>
                </div>

                </>
  })}

            </div>


        </>

    )
}