interface PageLayoutProps {
  children: React.ReactNode;
}


const PageLayout: React.FC<PageLayoutProps> = ({children}) => {

  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default PageLayout
