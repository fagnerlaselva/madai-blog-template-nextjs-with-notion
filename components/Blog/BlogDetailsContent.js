import React, { Component } from 'react';
import Link from 'next/link';
import BlogCommentsArea from './BlogCommentsArea';
import BlogSidebar from './BlogSidebar';
import { NotionRenderer } from "react-notion"

const moment = require('moment')

class BlogDetailsContent extends Component {
    render() {
        const image = this.props.post && this.props.post.image && this.props.post.image[1] && this.props.post.image[1].url || ''
        return (
            <section className="blog-details-area ptb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="blog-details">
                                { image !== '' && (
                                    <div className="article-image">
                                        <img src={image} alt="image" />
                                    </div>
                                    )
                                }

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <span>Data:</span> 
                                                {moment(this.props.post.Date).format('DD/MM/YYYY')}
                                            </li>
                                            <li>
                                                <span>{`Autor${this.props.post.Authors.length > 1 ? 'es' : ''}: `}</span> 
                                                {
                                                    this.props.post.Authors.map(author => {
                                                        const authorArray = author.split('@')
                                                        const authorName = authorArray[0]
                                                        const authorURL = authorArray[1]
                                                        return (
                                                            <Link href={authorURL}>
                                                                <a style={{marginRight: 3}}>{authorName}, </a>
                                                            </Link>
                                                            )
                                                    })
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                    <NotionRenderer blockMap={this.props.blocks} />
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span><i className="fas fa-bookmark"></i></span>
                                        {
                                            this.props.post.Category.map(category => {
                                                return (
                                                 
                                                        <a>{category}</a>
                                              
                                                    )
                                            })
                                        }
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="fab fa-facebook-f"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="fab fa-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="fab fa-twitter"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogDetailsContent;