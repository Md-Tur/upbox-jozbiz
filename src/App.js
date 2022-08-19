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

      {/* Plan card section */}
      <div className='container'>
        <div className='d-flex mx-auto mb-5'>
          <div className='mx-auto mt-5'>
            <h1>Pick Your Plan</h1>
            <img src={underline} alt="" />
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Monthly</h5>
                <p className="card-text">$18/mo</p>
                <div className='d-flex align-items-center justify-content-center'>
                  <a style={{ backgroundColor: "#EF8094" }} href="#" className="btn btn-primary rounded-pill px-3 border-0">FIND YOUR BOX</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Yearly</h5>
                <p className="card-text">$15/mo</p>
                <div className='d-flex align-items-center justify-content-center'>
                  <a style={{ backgroundColor: "#EF8094" }} href="#" className="btn btn-primary rounded-pill px-3 border-0">FIND YOUR BOX</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='text-center mt-4 mb-5'>Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</p>
      </div>

      {/* works section */}
      <div className='container'>
        <div className='d-flex mx-auto'>
          <div className='mx-auto mt-3 mb-3'>
            <h1>How it works?</h1>
            <img src={underline1} alt="" />
          </div>
        </div>

        <div className='d-flex mb-3'>
          <img src={girl1} alt="" />
          <div className='d-flex align-items-center ms-4'>
            <div>
              <h2>Setup your profile &
                preferences</h2>
              <p>Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <img className='img-fluid' src={box1} alt="" />
          <div>
            <h2>Setup your profile &
              preferences</h2>
            <p>Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
          </div>
        </div>
        <div className='d-flex'>
          <img src={girl2} alt="" />
          <div className='d-flex align-items-center ms-4'>
            <div>
              <h2>Setup your profile &
                preferences</h2>
              <p>Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
            </div>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-5 mb-5'>
          <a style={{ backgroundColor: "#FFFFFF", borderColor: "#EF8094", color: "black" }} href="#" className="btn btn-primary rounded-pill px-3">TRY IT FOR YOURSELF<i className="fa-solid fa-angle-right ms-2"></i></a>
        </div>
      </div>

      {/* Social posts section */}
      <div style={{ backgroundColor: "#F5F8FF" }} className="mt-5 mb-3">
        <h1 className='text-center pt-5 pb-3'>Social Posts</h1>
        <div className='row mx-3'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">How to rock the lip look that turns heads</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card" style={{ width: "18rem" }}>
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Find the perfect shade for the season</p>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card" style={{ width: "18rem" }}>
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">The 5 eye shadow secrets you never knew</p>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card" style={{ width: "18rem" }}>
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">The pro-tips for at home hair dying</p>
              </div>
            </div>
          </div>

        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <a style={{ backgroundColor: "#EF8094" }} href="#" className="btn btn-primary rounded-pill px-3 border-0 mt-5 mb-5">FOLLOW US ON INSTAGRAM</a>
        </div>
      </div>

    </div>
  );
}

export default App;
