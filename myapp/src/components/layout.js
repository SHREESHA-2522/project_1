import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return ( 
        <>
       <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <div class="container-fluid"style={{backgroundColor:"#9eeaf9"}}>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        // eslint-disable-next-line
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          
        </li>
        <li class="nav-item">
        // eslint-disable-next-line
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
        // eslint-disable-next-line
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          // eslint-disable-next-line
            <li><a class="dropdown-item" href="#">Action</a></li>
            // eslint-disable-next-line
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
      </form>
    </div>
  </div>
 
</nav>


        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </ul>
        </nav> */}
  
        <Outlet />
      </>
     );
}
 
export default Layout;