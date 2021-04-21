import React, { Component } from 'react'
import axios from 'axios';
import News from './components/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/App.css';
import Comments from './components/Comments';


export default class App extends Component {
    state = {
        news: [],
        story: {},
        topTenStories: [],
        comments: [],
        singleComment : "",
        kids: {},
        loadComments: false,
        loading : false

    }
    
    componentDidMount = async () => {
        this.setState({loading : true})
        const res = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
        this.setState({ news: res.data,loading : false })
        this.setState({ news: this.state.news.splice(0, 10) });
        this.getTopStories()
    }

    loadComponent = () => {
        this.setState({ loadComments: true });
        this.getTopComments();
    }

    getTopStories = () => {
        this.state.news.map(async (item) => {
            const res = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            this.setState({ story: res.data });
            this.setState({ kids: res.data.kids });
            //console.log(res.data.kids,'sfedf');
            this.state.topTenStories.push(this.state.story);
            this.setState({ topTenStories: this.state.topTenStories });
        })
    }

    getTopComments = () => {
        this.state.kids.map(async (item) => {
            const res = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`);
            console.log(res.data.text);
            this.setState({singleComment : res.data.text});
            this.state.comments.push(this.state.singleComment);
            this.setState({comments : this.state.comments.splice(0, 20)});
        })
    }

    render() {
        console.log(this.state.comments);
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path='/' render={(props) => (
                        <News
                            {...props}
                            topTenStories={this.state.topTenStories}
                            loadComments={this.state.loadComments}
                            loadComponent={this.loadComponent}
                            getTopComments={this.getTopComments} 
                            comments={this.state.comments}
                            loading={this.state.loading}/>
                    )} />
                   <Route exact path="/" component={<Comments/>}/>
                </Switch>
                 
            </Router>

        )
    }
}