// Import the Component class from the React library
import React, { Component } from "react";
// Import the style.css from the styles folder
import "./styles/style.css";
// Define a class named App that extends the Component class
class App extends Component {
  // Constructor method for the App class, taking props as a parameter
  constructor(props) {
     // Call the constructor of the parent class (Component) using super() to initialize 'this'
    super(props);
  // Initialize the state of the component with count and isinCarts properties
    this.state = {
      count: 0,
      isinCart1: true,
      isinCart2: true,
      isinCart3:true,
      isinCart4: true,
      isinCart5: true,
      isinCart6:true,
    };
  }
// Increment functions for each carts
  increment1 = () => {
    this.setState({
      isinCart1: !this.state.isinCart1,
      count: this.state.count + 1,
    });
  };
  increment2 = () => {
    this.setState({
      isinCart2: !this.state.isinCart2,
      count: this.state.count + 1,
    });
  };
  increment3 = () => {
    this.setState({
      isinCart3: !this.state.isinCart3,
      count: this.state.count + 1,
    });
  };
  increment4 = () => {
    this.setState({
      isinCart4: !this.state.isinCart4,
      count: this.state.count + 1,
    });
  };  increment5 = () => {
    this.setState({
      isinCart5: !this.state.isinCart5,
      count: this.state.count + 1,
    });
  };  increment6 = () => {
    this.setState({
      isinCart6: !this.state.isinCart6,
      count: this.state.count + 1,
    });
  };
// Decrement functions for each carts
  decrement1= () => {
    this.setState((reset) => ({
      isinCart1: !reset.isinCart1,
      count: reset.isinCart1? reset.count : reset.count - 1,
    }));
  };
  decrement2= () => {
    this.setState((reset) => ({
      isinCart2: !reset.isinCart2,
      count: reset.isinCart2? reset.count : reset.count - 1,
    }));
  };
  decrement3= () => {
    this.setState((reset) => ({
      isinCart3: !reset.isinCart3,
      count: reset.isinCart3? reset.count : reset.count - 1,
    }));
  };
  decrement4= () => {
    this.setState((reset) => ({
      isinCart4: !reset.isinCart4,
      count: reset.isinCart4? reset.count : reset.count - 1,
    }));
  };
  decrement5= () => {
    this.setState((reset) => ({
      isinCart5: !reset.isinCart5,
      count: reset.isinCart5? reset.count : reset.count - 1,
    }));
  };
  decrement6= () => {
    this.setState((reset) => ({
      isinCart6: !reset.isinCart6,
      count: reset.isinCart6? reset.count : reset.count - 1,
    }));
  };



// Render method to define the structure of the component
  render() {
    return (
    
      <div className="container-fluied">
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse collapse show"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#All Products">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#Popular Items">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#New Arrivals">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="fa-solid fa-cart-shopping me-2"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {this.state.count}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>

        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">
                With this shop hompeage template
              </p>
            </div>
          </div>
        </header>

        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Fancy Product</h5>
                      $40.00 - $80.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View options
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    id="sale"
                  >
                    Sale
                  </div>
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Special Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                      </div>
                      <span className="text-muted text-decoration-line-through">
                        $20.00
                      </span>
                      $18.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                     {/* If isinCart1 is true, render an "Add to cart" button */}
                      {this.state.isinCart1 ? (
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.increment1}
                        >
                          Add to cart
                        </a>
                      ) : (
                        // If isinCart1 is false, render a "Remove from Cart" button
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.decrement1}
                        >
                          Remove from Cart
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    id="sale"
                  >
                    Sale
                  </div>
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Sale Item</h5>
                      <span className="text-muted text-decoration-line-through">
                        $50.00
                      </span>
                      $25.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                     {/* If isinCart2 is true, render an "Add to cart" button */}
                    {this.state.isinCart2? (
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.increment2}
                        >
                          Add to cart
                        </a>
                      ) : (
                        // If isinCart2 is false, render a "Remove from Cart" button
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.decrement2}
                        >
                          Remove from Cart
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Popular Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                      </div>
                      $40.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                     {/* If isinCart3 is true, render an "Add to cart" button */}
                    {this.state.isinCart3? (
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.increment3}
                        >
                          Add to cart
                        </a>
                      ) : (
                        // If isinCart13 is false, render a "Remove from Cart" button
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.decrement3}
                        >
                          Remove from Cart
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    id="sale"
                  >
                    Sale
                  </div>
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Sale Item</h5>
                      <span className="text-muted text-decoration-line-through">
                        $50.00
                      </span>
                      $25.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                     {/* If isinCart4 is true, render an "Add to cart" button */}
                    {this.state.isinCart4? (
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.increment4}
                        >
                          Add to cart
                        </a>
                      ) : (
                        // If isinCart3 is false, render a "Remove from Cart" button
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.decrement4}
                        >
                          Remove from Cart
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Fancy Product</h5>
                      $120.00 - $280.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View options
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    id="sale"
                  >
                    Sale
                  </div>
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Special Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                      </div>
                      <span className="text-muted text-decoration-line-through">
                        $20.00
                      </span>
                      $18.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                     {/* If isinCart5 is true, render an "Add to cart" button */}
                    {this.state.isinCart5 ? (
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.increment5}
                        >
                          Add to cart
                        </a>
                      ) : (
                        // If isinCart5 is false, render a "Remove from Cart" button
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.decrement5}
                        >
                          Remove from Cart
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Popular Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                        <div className="bi-star-fill"><i class="fa-solid fa-star"></i></div>
                      </div>
                      $40.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                     {/* If isinCart6 is true, render an "Add to cart" button */}
                    {this.state.isinCart6 ? (
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.increment6}
                        >
                          Add to cart
                        </a>
                      ) : (
                        // If isinCart6 is false, render a "Remove from Cart" button
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                         
                          onClick={this.decrement6}
                        >
                          Remove from Cart
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Footer section */}
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2023
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
