import React from 'react';
import '../styles/CommentComponent.scss';
import PhotoLibrary from './PhotoLibrary'
class CommentComponent extends React.Component {
  handleSubmit =(event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    this.props.postComment(comment,this.props.match.params.id);
    event.target.elements.comment.value = "";
  }
  render() {
    
    const {match, posts, comments, loading} = this.props;
    if(loading){
      return <div>Loadding... </div>
    }
    const id = match.params.id;
    const post = posts.filter( (post) => post.id === Number(id))[0];
    if(!post) {
      return <h1>No post found</h1>
    }
    return (
    <div className="comment">
      <div className="comment__inner">
      <PhotoLibrary clickHandler={this.props.clickHandler.bind(this,id)}  key={post.id} description={post.description} src={post.src} id={post.id}>
      </PhotoLibrary>
        <div className="comment__inner-info">
         
        </div>
      </div>
      <div className="comment__comments-box">
        {
        comments[id] ? ( comments[id].map((comment, index)=>{
            return (
            <p key={index}>{comment}</p>
            )
          })
        ) : ''
        } 
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    </div>
  )
  }
}

export default CommentComponent;