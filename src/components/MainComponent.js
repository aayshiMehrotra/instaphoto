import React , {Component} from 'react';
import TitleComponent from './TitleComponent';
import PhotoLibrary from './PhotoLibrary';
import CreateAccount from './CreateAccount';
import {Link, Route} from 'react-router-dom';
import '../styles/common.scss';
import CommentComponent from './CommentComponent';

const data = {
  titleContent: 'InstaPhoto',
  tag: 'h1',
  createAccount : {
    titleContent: 'Please add Photos here!',
    tag: 'h3',
  }
}
class MainComponent extends Component {
  state ={
    loading: true
  }
  componentDidMount(){
    this.props.getPostsfromDatabase().then(()=> {
      this.setState({
        loading: false
      })
    });
    this.props.getCommentsfromDatabase();
  }
  onFormSubmit = (post) => {
    post.id = Number(new Date());
    this.props.AddingPosttoDatabase(post);
    this.props.history.push("/");
  }

  onRemovePosts = (id)=> {
    this.props.removePostsfromDatabase(id);
    this.props.history.push("/");
  }
  onPostComment = (comment,id) => {
    this.props.AddingCommentstoDatabase(comment,id);
  }
  render(){
    console.log(this.props)
    return(
      <div className="photo-insta-wrapper">
        <Link to="/"><TitleComponent tag={data.tag} titleContent={data.titleContent}></TitleComponent></Link>
        
        <Route exact path = "/" render= {()=> (
          <div>
            <div className="photo-insta-wrapper__button">
                <Link to="/AddPosts" className="addition">+</Link>
            </div>
            <div className="photo-insta-wrapper__inner">
              {this.props.posts
              .sort((x,y) => {
                return y.id - x.id
              })
              .map((post, index)=>{
                console.log(post,'aa')
                return (
                  <PhotoLibrary clickHandler={this.onRemovePosts.bind(this,post.id)} className={(((index+1)%2 === 1) && (index+1) === this.props.posts.length) ? 'full-width': '' } key={post.id} description={post.description} src={post.src} id={post.id}>
                  </PhotoLibrary>
                )
              })}
            </div>
          </div>
        )} />
           
       <Route path="/AddPosts" render = {()=> 
         <CreateAccount {...data.createAccount} formSubmit={this.onFormSubmit}></CreateAccount>
       }></Route>

      <Route exact path="/comment/post/:id" render = {(params)=> 
         <CommentComponent loading ={this.state.loading} {...this.props} {...params}  postComment={this.onPostComment} clickHandler={this.onRemovePosts} ></CommentComponent>
       }></Route>
       </div>
    );
  }
}
export default MainComponent;