import './App.css';
import topbar from '../src/images/TOPBAR 1.png';
import logo from '../src/images/logo.png';
import box from '../src/images/box.jpeg';
import underline from '../src/images/underline.png';
import underline1 from '../src/images/underline (1).png';
import girl1 from '../src/images/girl1.jpeg';
import box1 from '../src/images/box1.jpeg';
import girl2 from '../src/images/girl2.jpeg';
import img1 from '../src/images/img1.png';
import img2 from '../src/images/img2.png';
import img3 from '../src/images/img3.png';
import img4 from '../src/images/img4.png';

function App() {
  return (
    <div>

      <div>
        <img className='img-fluid' src={topbar} alt="" />
      </div>
      {/* Navbar section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#"><img style={{ height: "60px" }} src={logo} alt="" /></a>

            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">This Month</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Skin</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Hair</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Bath</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sale</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded-pill px-3" style={{ borderColor: "black" }} href="#">LOG IN<i className="fa-solid fa-angle-right ms-2"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


      {/* Banner section */}
      <div className='row mx-0' style={{ backgroundColor: "#F5F8FF" }}>
        <div className='col-lg-5 px-5 d-flex align-items-center'>
          <div>
            <h1 style={{ fontWeight: "400", fontSize: "48px" }}>Look good without
              leaving your house.</h1>
            <p>Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</p>
            <a style={{ backgroundColor: "#FFFFFF", borderColor: "#EF8094", color: "black" }} href="#" className="btn btn-primary rounded-pill px-3">SIGN UP<i className="fa-solid fa-angle-right ms-2"></i></a>
          </div>
        </div>
        <div className='col-lg-7 px-0'>
          <img className='img-fluid' src={box} alt="" />
        </div>
      </div>



    </div>
  );
}

export default App;
