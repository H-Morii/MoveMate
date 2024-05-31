import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";
import { Navigate } from "react-router-dom";

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    // //warning popup
    const showToast = useShowToast();
    //login user
    // const logoutUser = useAuthState((state) => state.logout);
    const navigate = useNavigate();

    const signup = async (regitrationData) => {
        if (
            !regitrationData.email ||
            !regitrationData.password ||
            !regitrationData.firstName ||
            !regitrationData.lastName
        ) {
            showToast("Error", "Please fill all the fields", "error");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(
                regitrationData.email,
                regitrationData.password
            );
            if (!newUser && error) {
                showToast("Error", error.message, "error");

                return;
            }
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: regitrationData.email,
                    firstName: regitrationData.firstName,
                    lastName: regitrationData.lastName,
                    bio: "",
                    profilePicURL: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };
                await setDoc(
                    doc(firestore, "users", newUser.user.uid),
                    userDoc
                );
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                showToast(
                    "Success",
                    `User ${firstName} ${lastName} has been created successfully.`,
                    "success"
                );
                navigate("/login");
            }
        } catch (err) {
            showToast("Error", err.message, "error");
        }
    };

    return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
