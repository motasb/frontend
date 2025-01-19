import { useEffect, useState } from "react";
import {toast} from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../redux/apiCalls/postApiCall";
import { featchCategories } from "../../redux/apiCalls/categoryApiCall";


const UpdatePostModal = ({ setUpdatePost, post }) => {

  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.category);



  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [category, setCategory] = useState(post.category);

//   forrm submit handler
const formSubmitHandler = (e)=>{
    e.preventDefault();

    if(title.trim() === "")return toast.error("Post Title is required");
    if(category.trim() === "")return toast.error("Post category is required");
    if(description.trim() === "")return toast.error("Post description is required");

    dispatch(updatePost({title ,description ,category} , post?._id ));
    setUpdatePost(false);
}

useEffect(()=>{
  dispatch(featchCategories());
},[dispatch])

  return (
    <div className="update-modal">
      <form onSubmit={formSubmitHandler} className="update-modal-form">
        <abbr title="close">
          <i
            onClick={() => setUpdatePost(false)}
            className="bi bi-x-circle-fill update-modal-form-close"
          ></i>
        </abbr>
        <h1 className="update-modal-title">Update Post</h1>
        <input
          type="text"
          className="update-modal-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="update-modal-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="">
            Select Category
          </option>
          {categories?.map(category => (
            <option key={category._id} value={category.title}>{category.title}</option>
          ))}
        </select>
        <textarea
          className="update-modal-textarea"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" className="update-modal-btn">
          Update post
        </button>
      </form>
    </div>
  );
};

export default UpdatePostModal;
