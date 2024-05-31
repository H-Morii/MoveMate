import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const useLogout = () => {
    const [signOut, loading, error] = useSignOut(auth);

    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem("user-info");
            console.log("user logout");
        } catch (err) {
            console.error(err.message);
        }
    };

    return { handleLogout };
};

export default useLogout;
