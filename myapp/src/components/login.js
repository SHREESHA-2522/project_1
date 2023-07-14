const Login = () => {
    return ( 
        // <h1>This is Login Page</h1>
<>
<div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-12"></div>
            <div class="col-md-4 col-sm-12">
                <div class="card" style={{backgroundColor:"white"}}>
                    <div class="card-body"style={{backgroundColor:"#6ea8fe"}}>
                        
                      <h5 class="card-title">User Login</h5>
                      <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email or Phone"/>
                          <div id="emailHelp" class="form-text" >We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">Not Registered? <a href="register.js">Click here</a></label>
                        </div>
                        <button type="submit" class="btn btn-info" ><a href="index.html">Log in</a></button>
                      </form>
                    </div>
                  </div>
            </div>
            <div class="col-md-4 col-sm-12"></div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</>
            
     );
}
 
export default Login;