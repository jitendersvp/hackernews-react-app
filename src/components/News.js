import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Comments from './Comments';
import Loading from './Loading';

export default class News extends Component {
    render() {
        const { loading, topTenStories, loadComments, loadComponent, getTopComments, comments } = this.props;
        if (loading) {
            return <Loading />
        }
        else {
            if (loadComments) {
                return <Comments getTopComments={getTopComments} comments={comments} />
            } else {
                return (
                    <div id='news'>
                        <h1>Hacker News</h1>
                        {
                            topTenStories.map((item) =>
                                (<NewsItem key={item.id} story={item} loadComponent={loadComponent} loadComments={loadComments} />)
                            )
                        }
                    </div>

                )
            }
        }

    }
}
