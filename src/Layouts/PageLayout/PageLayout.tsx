import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/NavBar/NavBar'

interface PageLayoutProps {
  children: React.ReactNode;
}


const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
  const {pathname} = useLocation()

  return (
    <div>
      {/* top bar on the */}
      {
      pathname !== "/login" ? (
        <div>
          <Sidebar/>
        </div>
      ) : null
      // the content of the page
      }
      <div>
        {children}
      </div>
    </div>
  )
}

export default PageLayout
