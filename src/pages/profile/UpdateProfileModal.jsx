import { useState } from "react";
import {useDispatch} from "react-redux";
import { UpdateProfile } from "../../redux/apiCalls/profileApiCall";

const UpdateProfileModal = ({ setUpdateProfile , profile}) => {
  
  const dispatch = useDispatch();

  const [username, setUsername] = useState(profile.username);
  const [bio, setBio] = useState(profile.bio);
  const [password, setPassword] = useState("");

//   forrm submit handler
const formSubmitHandler = (e)=>{
    e.preventDefault();

    const updatedUser = {username , bio}

    if(password.trim() !== ""){
        updatedUser.password = password;
    }

    dispatch(UpdateProfile( profile?._id , updatedUser ));
    setUpdateProfile(false);  
}

  return (
    <div className="update-modal">
      <form onSubmit={formSubmitHandler} className="update-modal-form">
        <abbr title="close">
          <i
            onClick={() => setUpdateProfile(false)}
            className="bi bi-x-circle-fill update-modal-form-close"
          ></i>
        </abbr>
        <h1 className="update-modal-title">Update your profile</h1>
        <input
          type="text"
          className="update-modal-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          className="update-modal-input"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
        <input
          type="password"
          className="update-modal-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="update-modal-btn">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileModal;
