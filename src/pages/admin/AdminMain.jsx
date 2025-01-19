import { Link } from "react-router-dom";
import AddCategoryForm from "./AddCategoryForm";
import {useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import { featchCategories } from "../../redux/apiCalls/categoryApiCall";
import { getUsersCount } from "../../redux/apiCalls/profileApiCall";
import { getPostsCount } from "../../redux/apiCalls/postApiCall";
import { fetchAllComments } from "../../redux/apiCalls/commentApiCall";

const AdminMain = () => {

  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.category);
  const {usersCount} = useSelector(state => state.profile);
  const {postsCount} = useSelector(state => state.post);
  const {comments} = useSelector(state => state.comment);

  useEffect(()=>{
    dispatch(featchCategories());
    dispatch(getUsersCount());
    dispatch(getPostsCount());
    dispatch(fetchAllComments());
  },[dispatch]);

  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-card-title">Users</h5>
          <div className="admin-card-count">{usersCount}</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to={"/admin-dashboard/users-table"}
            >
              See all users
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-person"></i>
            </div>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Posts</h5>
          <div className="admin-card-count">{postsCount}</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to={"/admin-dashboard/posts-table"}
            >
              See all posts
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-file-post"></i>
            </div>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Categories</h5>
          <div className="admin-card-count">{categories.length}</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to={"/admin-dashboard/categories-table"}
            >
              See all Categories
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-tag-fill"></i>
            </div>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Comments</h5>
          <div className="admin-card-count">{comments.length}</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to={"/admin-dashboard/comments-table"}
            >
              See all Comments
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-chat-left-text"></i>
            </div>
          </div>
        </div>
      </div>
      <AddCategoryForm/>
    </div>
  );
};

export default AdminMain;
