import "./admin-table.css";
import AdminSidebar from "./AdminSidebar";
import swal from "sweetalert";
import {useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import { deleteComment, fetchAllComments } from "../../redux/apiCalls/commentApiCall";
import { featchSinglePost } from "../../redux/apiCalls/postApiCall";


const CommentsTable = () => {

  const dispatch = useDispatch();
  const {comments , isCommentDeleted} = useSelector(state => state.comment);

  useEffect(()=>{
    dispatch(fetchAllComments());
  },[dispatch],isCommentDeleted)

   // Delete Comments handler
   const deleteCommentsHandler = (commentId , postId)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Comments!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((isOk) => {
      if (isOk) {
        dispatch(featchSinglePost(postId));
        dispatch(deleteComment(commentId));
      }
    });
  }
  return (
    <section className="table-container">
      <AdminSidebar />
      <div className="table-wrapper">
        <h1 className="table-title">Comments</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Comments Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((item ,index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="table-image">
                    <img
                      src={item.user.profilePhoto?.url}
                      alt=""
                      className="table-user-image"
                    />
                    <span className="table-username">
                        {item.user.username}
                    </span>
                  </div>
                </td>
                <td>{item.text}</td>
                <td>
                  <div className="table-button-group">
                    <button onClick={()=>deleteCommentsHandler(item._id , item.postId)}>Delete Comments</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  
    </section>
  );
};

export default CommentsTable;
