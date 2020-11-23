import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/Layouts/Footer';
import { NotionRenderer } from "react-notion"
import fetch from 'node-fetch'

const API_ENDPOINT = 'https://www.notion.so/api/v3'
const NOTION_TOKEN = '38823e20575022e59fa48474c8a7db5c184b4c08778f5fb2111867a5a344f0da0fd58de3098622b7714189bb7501eb745d13eade0ed4b76730d8e000f4dfceea89cc7ad703432a87188d39bc7fba'
const NOTION_BLOG_ID = 'f8cf0c8645db4088be56a1c37286fee2'

export const getAllPosts = async () => {
    return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export async function getStaticProps({params: { slug }}) {
    // Get all posts again
    const posts = await getAllPosts();

    // Find the current blogpost by slug
    const post = slug ? posts.find((t) => t.Slug === slug) : null

    if (post && post.id) {
        const blocks = await fetch(
            `https://notion-api.splitbee.io/v1/page/${post.id}`
        ).then((res) => res.json());

        return {
            props: {
              blocks,
              post,
            },
        };
    }
    return {
        props: {
          blocks: [],
          post: [],
        },
    };
}

const BlogDetails = ({ post, blocks }) => {
    if (!post ||
        !blocks ||
        post.length === 0 ||
        blocks.length === 0)
            return (
                <React.Fragment>
                    <Navbar />
                    <PageBanner 
                        pageTitle={'no-post'} 
                        homePageUrl="/" 
                        homePageText="Home" 
                        activePageText={'no-post'}
                    /> 
                    {/* No content */}
                    <Footer/>
                </React.Fragment>
            )
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle={post.Title} 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText={post.Title}
            /> 
            <BlogDetailsContent blocks={blocks} post={post}/>
            <Footer/>
        </React.Fragment>
    )
}

export async function getStaticPaths() {
  const table = await getAllPosts()
  return {
    paths: table.map((row) => row && row.Slug ? `/${row.Slug}` : '/no-post'),
    fallback: true,
  };
}

export default BlogDetails