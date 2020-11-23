import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogThreeGrid from '../components/Blog/BlogThreeGrid';
import Footer from '../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Blog" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog" 
                />  
                <BlogThreeGrid />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Index;