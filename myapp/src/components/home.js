const Home = () => {
    return ( 
<>

  <div class="container-fluid">
  <a class="navbar-brand" href="/shreeshas-kitchen">Shreesha's Kitchen</a>

    {/* <a class="navbar-brand" href="#">Shreesha's Kitchen</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        // eslint-disable-next-line
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
        // eslint-disable-next-line
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            // eslint-disable-next-line
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
         <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> 
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        // eslint-disable-next-line
        <button type="submit" class="btn btn-info" ><a href="login.html">Log in</a></button>
      </form>
    </div>
  </div>


<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1606914469633-bd39206ea739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" height="600px" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" height="600px" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"  width="400px" height="600px"  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br></br>
<div class="container">
  <div class="row">

      <div class="col col-md-6 col-sm-12">
      <div class="card">
          <img src="https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=392&q=80" width="400px" height="400px" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Pasta</h5>
            <p class="card-text">Pasta is often noodles. It is usually eaten in sauce, fried or in soup. Pasta is usually made from either wheat flour or rice flour, but it can be made with other types of flour. Pasta sometimes has eggs in it.</p>
            <a href="#" class="btn btn-primary">Varities of Pasta</a>
          </div>
        </div>
      </div>

          <div class="col col-md-6 col-sm-12">
              <div class="card">
              <img src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" width="400px" height="400px"  class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Japanese Noodles</h5>
                <p class="card-text">Types of Japanese noodles. Ramen are thin, wheat-based noodles made from wheat flour, salt, water, and kansui, a form of alkaline water. The dough is risen before being rolled. They were imported from China during the Meiji period.</p>
                <a href="#" class="btn btn-primary">Varities of Noodles</a>
              </div>
            </div></div>
            <div class="col col-md-6 col-sm-12">
              <div class="card">
              <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" width="400px" height="400px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Biriyani</h5>
                <p class="card-text">Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish).</p>
                <a href="#" class="btn btn-primary">Varities of biriyani</a>
              </div>
            </div></div>

              <div class="col col-md-6 col-sm-12">
                  <div class="card">
                  <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80" width="400px" height="400px" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Frech Toast</h5>
                    <p class="card-text">French toast, known as pain perdu ("lost bread") in France, is a breakfast and brunch dish made with old bread slices that are soaked in a milk and egg mixture and fried until golden brown and crispy.</p>
                    <a href="#" class="btn btn-primary">Varities of Toast</a>
                  </div>
                </div></div>

</div>
</div>
<script src="js/bootstrap.bundle.js"></script>

</>
     );
}
 
export default Home;