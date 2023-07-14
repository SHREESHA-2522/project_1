const Register = () => {
    return ( 
        // <h1>This is Register page</h1>
        <>
        <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-12"></div>
            <div class="col-md-4 col-sm-12">
                <div class="card" style={{backgroundColor:"white"}}>
                    <div class="card-body"style={{backgroundColor:"#6ea8fe"}}>
                        
                      <h5 class="card-title">Register</h5>
                      <form>
                        <div class="mb-3">
                            <label for="exampleInputname" class="form-label">Name</label>
                            <input type="name" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter your name" />
                          </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                          <div id="emailHelp" class="form-text" >We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password again" />
                        </div>
                         <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">Registered? <a href="register.js">Sign up</a></label>
                        </div> 
                        <button type="submit" class="btn btn-info" >Create account</button>
                      </form>
                    </div>
                  </div>
            </div>
            <div class="col-md-4 col-sm-12"></div>
        </div>
    </div>
        
        
        </>
     );
}
 
export default Register;