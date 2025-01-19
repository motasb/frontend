import { useState } from "react";
import {toast} from "react-toastify";
import { useDispatch } from "react-redux";
import { updateComment } from "../../redux/apiCalls/commentApiCall";


const UpdateCommentModal = ({ setUpdateComment , commentForUpdate }) => {

const dispatch = useDispatch();


  const [text, setText] = useState(commentForUpdate?.text);


//   forrm submit handler
const formSubmitHandler = (e)=>{
    e.preventDefault();

    if(text.trim() === "")return toast.error("Please wtite somthing");

    dispatch(updateComment(commentForUpdate?._id , {text}));
    setUpdateComment(false);
}

  return (
    <div className="update-modal">
      <form onSubmit={formSubmitHandler} className="update-modal-form">
        <abbr title="close">
          <i
            onClick={() => setUpdateComment(false)}
            className="bi bi-x-circle-fill update-modal-form-close"
          ></i>
        </abbr>
        <h1 className="update-modal-title">Edit Comment</h1>
        <input
          type="text"
          className="update-modal-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="update-modal-btn">
            Edit Comment
        </button>
      </form>
    </div>
  );
};

export default UpdateCommentModal;
