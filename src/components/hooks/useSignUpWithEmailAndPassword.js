import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const signup = async (regitrationData) => {
        if (
            !regitrationData.email ||
            !regitrationData.password ||
            !regitrationData.firstName ||
            !regitrationData.lastName
        ) {
            console.log("Please fill all the fields");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(
                regitrationData.email,
                regitrationData.password
            );
            if (!newUser && error) {
                console.log(error);
                return;
            }
            if (newUser) {
                console.log("newUser: ", newUser);
                console.log("registrationData: ", regitrationData);
                console.log("creating account");
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
                console.log("passed UserDoc");
                await setDoc(
                    doc(firestore, "users", newUser.user.uid),
                    userDoc
                );
                localStorage.setItem("user-info", JSON.stringify(userDoc));

                // loginUser(userDoc);
            }
            console.log("account has been created");
        } catch (err) {
            console.error(err);
        }
    };

    return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
