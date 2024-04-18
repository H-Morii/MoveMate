import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

interface PageLayoutProps {
  children: React.ReactNode;
}


const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
  const {pathname} = useLocation()

  return (
    <>
      <div>
        {pathname !== "/homepage" && pathname !== "/login" ? (
          <NavBar/> ): null
        }
      </div>
      <div>
        {children}
      </div>
    </>
  )
}

export default PageLayout
