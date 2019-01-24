import React, { Component } from 'react';
import './featured.css';



class Featured extends Component {
    render() {
        return (
            <div id="main-wrapper">
                <div className="posts-title">
                    <h2>
                        <a href="/search?&amp;max-results=10">Recent Featured Posts</a>
                    </h2>
                </div>
                <div className="main section" id="main" name="Main Posts">
                    <div className="widget Blog" data-version="1" id="Blog1">
                        <div className="blog-posts hfeed">
                            <div className="post-outer">
                                <div className="post">
                                    <div className="block-image">
                                        <div className="thumb">
                                            <a href="http://newcon-themexpose.blogspot.com/2016/08/apples-new-ipad-lets-you-play-latest.html" className="img-effect">
                                                <span className="thumb-overlay">
                                                </span>
                                            </a>
                                        </div>
                                        <div className="postags">
                                            <a className="News" href="http://newcon-themexpose.blogspot.com/search/label/News?&amp;max-results=10" rel="tag">News</a>
                                        </div>
                                    </div>
                                    <article>
                                        <font className="retitle">
                                            <h2 className="post-title entry-title">
                                                <a href="http://newcon-themexpose.blogspot.com/2016/08/apples-new-ipad-lets-you-play-latest.html">
                                                    Apple’s new ipad lets you play the latest games for a fraction of the price
                                                </a>
                                            </h2>
                                        </font>
                                        <div className="date-header">
                                            <div id="meta-post">
                                                <a className="timestamp-link" href="http://newcon-themexpose.blogspot.com/2016/08/apples-new-ipad-lets-you-play-latest.html" rel="bookmark" title="permanent link">
                                                    <abbr 
                                                        className="published" 
                                                        itemprop="datePublished dateModified" 
                                                        title="2016-08-01T04:22:00-07:00">
                                                        August 01, 2016
                                                    </abbr>
                                                </a>
                                            </div>
                                            <div className="resumo">
                                                <span>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo cons...
                                                </span>
                                                <a 
                                                    className="read-more" 
                                                    href="http://newcon-themexpose.blogspot.com/2016/08/apples-new-ipad-lets-you-play-latest.html">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                            {/* NAVIGATION NUMBERS */}
                        {/* <div className="blog-pager" id="blog-pager">
                            <span className="showpageOf">Page 1 of 2
                            </span>
                            <span className="showpagePoint">1
                            </span>
                            <span className="showpageNum">
                                <a href="#" onclick="redirectpage(2);return false">2
                                </a>
                            </span>
                            <span className="showpageNum">
                                <a href="#" onclick="redirectpage(2);return false">
                                    <i className="fa fa-angle-double-right">
                                    </i>
                                </a>
                            </span>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
};
export default Featured;