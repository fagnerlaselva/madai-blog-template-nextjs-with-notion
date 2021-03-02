import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'node-fetch'

const moment = require('moment')

const API_ENDPOINT = 'https://www.notion.so/api/v3'
const NOTION_TOKEN = '93d77d225b7d8253a736c4f691865357bdff051e01ebc0eb3e1da6ffa2413cdbe4570f9108737155b0bb55786969794ef99d24c8ef374f5bf9781f1247904e8bf430caa2ef7ba43903c4e7298b03'
const NOTION_BLOG_ID = '60f9dd40dfa148bea4d71bd5f6c8104f'

class BlogThreeGrid extends Component {
    constructor (props) {
        super(props)
        this.state = {
          posts: [],
          page: 0,
          category: '',
          postsForPage: 12
        }
      }
    componentDidMount = async () => {
        const posts = await this.getStaticProps()
        this.setState({ posts: posts.props.posts.filter(post => post.Published) })
    }
    getAllPosts = async () => {
        const allPosts = await fetch(
        `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
      ).then((res) => res.json());
        console.log('ALLPOSTS', allPosts)
        return allPosts
    }
    getStaticProps = async () => {
      const posts = await this.getAllPosts()
      return {
        props: {
          posts
        },
      };
    }
    render() {
        console.log('THISPOSTS', this.state.posts)
        const { page, postsForPage } = this.state
        const postIndex = page * postsForPage
        const posts = this.state.posts
            .filter(post => {
                return this.state.category === '' ? true : post.Category.includes(this.state.category)
            })
        const pagItems = []
        for(let i = 0; i < posts.length/this.state.postsForPage; i++){
            let className = i === this.state.page ?  'page-numbers current' : 'page-numbers'
            pagItems.push(
                <button onClick={() => this.setState({page: i})}>
                    <a className={className}>{i+1}</a>
                </button>
            )
        }
        const categories = this.state.posts.reduce((acc, curr) => {
            curr.Category.forEach(category => {
                if (!acc.includes(category)) acc.push(category)
            })
            return acc
        }, [])
        return (
            <section className="blog-area ptb-110">
                <div className="container">
                    <div className="category-container">
                        <div className="category-title">Categorias:</div>
                        <div className='category-items-container'>
                            <button onClick = {() => this.setState({category: '', page: 0})}>
                                <div className={this.state.category === '' ? "blog-category current" : "blog-category"}>Todas</div>
                            </button>
                            {
                                categories.map(category => (
                                    <button onClick = {() => this.setState({category, page: 0})}>
                                        <div className={this.state.category === category ? "blog-category current" : "blog-category"}>
                                            {category}
                                        </div>
                                    </button>))
                            }
                        </div>
                    </div>
                    <div className="row">
                    {
                        posts.length === 0 ? (<div>Carregando...</div>) : posts.slice(postIndex, postIndex + postsForPage)
                            .filter(post => {
                                return this.state.category === '' ? true : post.Category.includes(this.state.category)
                            })
                            .map((post) => {
                            const image = post.image && post.image[0] && post.image[0].url || ''
                            return (
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="entry-thumbnail">
                                        <Link href="/[slug]" as={`/${post.Slug}`}>
                                            <a>
                                                <img src={image} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            {
                                                post.Authors.map(author => {
                                                    const authorArray = author.split('@')
                                                    const authorName = authorArray[0]
                                                    const authorURL = authorArray[1]
                                                    return (
                                                        <li>
                                                            <Link href={authorURL}>
                                                                <a target="_blank">{authorName}</a>
                                                            </Link>
                                                        </li>
                                                        )
                                                })
                                            }
                                            <li>{moment(post.Date).format('DD/MM/YYYY')}</li>
                                        </ul>
                                    </div>

                                    <h3>
                                        <Link href="/[slug]" as={`/${post.Slug}`}>
                                            <a>{post.Title}</a>
                                        </Link>
                                    </h3>

                                    <p>{post.Preview}</p>
                                    
                                    <Link href="/[slug]" as={`/${post.Slug}`}>
                                        <a className="learn-more-btn">
                                            Leia mais <i className="flaticon-add"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        )
                        })
                    }

                        {/* Pagination */}
                        <div className="col-lg-12 col-sm-12">
                            <div className="pagination-area">
                                <button onClick={() => this.setState({page: 0})}>
                                    <a className="prev page-numbers">
                                        <i className="fas fa-angle-double-left"></i>
                                    </a>
                                </button>
                                {
                                    pagItems
                                }
                                <button onClick={() => this.setState({page: pagItems.length - 1})}>
                                    <a className="next page-numbers">
                                        <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogThreeGrid;