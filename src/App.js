import Header from "./components/header/Header";
import {BrowserRouter , Route , Routes , Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import PostsPage from "./pages/posts-page/PostsPage";
import CreatePost from "./pages/create-post/CreatePost";
import AdminDashborad from "./pages/admin/AdminDashbord";
import Footer from "./components/footer/Footer";
import PostDetails from "./pages/post-details/PostDetails";
import {ToastContainer} from "react-toastify"
import Category from "./pages/category/Category";
import Profile from "./pages/profile/Profile";
import UsersTable from "./pages/admin/UsersTable";
import PostsTable from "./pages/admin/PostTable";
import CategoriesTable from "./pages/admin/CategoriesTable";
import CommentsTable from "./pages/admin/CommentsTable";
import ForgotPassword from "./pages/forms/ForgotPassword";
import ResetPassword from "./pages/forms/ResetPassword";
import NotFound from "./pages/not-found/NotFound";
import {useSelector} from "react-redux";
import VerifyEmail from "./pages/verify-email/VerifyEmail";

export default function App() {

    const {user} = useSelector(state => state.auth);

    return (
        <BrowserRouter>
        <ToastContainer theme="colored" position="top-center"/>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={!user ? <Login/> : <Navigate to={"/"}/>}/>
                <Route path="/register" element={!user ? <Register/> : <Navigate to={"/"}/>}/>
                <Route path="/users/:userId/verify/:token" element={!user ? <VerifyEmail/> : <Navigate to={"/"}/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/reset-password/:userId/:token" element={<ResetPassword/>}/>
                <Route path="/profile/:id" element={<Profile/>}/>
                <Route path="posts">
                    <Route index element={<PostsPage/>}/>
                    <Route  path="create-post" element={user ? <CreatePost/> : <Navigate to={"/"}/> }/>
                    <Route  path="details/:id" element={<PostDetails/>}/>
                    <Route  path="categories/:category" element={<Category/>}/>
                </Route>
                <Route path="admin-dashboard">
                    <Route index element={user?.isAdmin ? <AdminDashborad/> : <Navigate to={"/"}/>}/>
                    <Route path="users-table" element={user?.isAdmin ? <UsersTable/> : <Navigate to={"/"}/>}/>
                    <Route path="posts-table" element={user?.isAdmin ? <PostsTable/> : <Navigate to={"/"}/>}/>
                    <Route path="categories-table" element={user?.isAdmin ? <CategoriesTable/> : <Navigate to={"/"}/>}/>
                    <Route path="comments-table" element={user?.isAdmin ? <CommentsTable/> : <Navigate to={"/"}/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )   
}