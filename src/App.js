import './App.css';
import topbar from '../src/images/TOPBAR 1.png';
import logo from '../src/images/logo.png';
import box from '../src/images/box.svg';
import underline from '../src/images/underline.png';
import underline1 from '../src/images/underline (1).png';
import girl1 from '../src/images/girl1.png';
import box1 from '../src/images/box1.png';
import girl2 from '../src/images/girl2.png';
import img1 from '../src/images/img1.png';
import img2 from '../src/images/img2.png';
import img3 from '../src/images/img3.png';
import img4 from '../src/images/img4.png';
import vector1 from '../src/images/Vector_left.png';
import vector2 from '../src/images/Vector_right.png';
import ig from '../src/images/ig.png';
import fb from '../src/images/fb.png';
import tw from '../src/images/tw.png';
import sc from '../src/images/sc.png';

function App() {

  const card_1 = {
    backgroundImage: `url(${vector1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  const card_2 = {
    backgroundImage: `url(${vector2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div>

      <div>
        <img className='img-fluid' src={topbar} alt="" />
      </div>
      {/* Navbar section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#"><img style={{ height: "60px" }} src={logo} alt="" /></a>

            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-5">
                  <a className="nav-link text-dark" style={{ fontWeight: "400", fontSize: "14px" }} aria-current="page" href="#">THIS MONTH</a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link text-dark" style={{ fontWeight: "400", fontSize: "14px" }} href="#">SKIN</a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link text-dark" style={{ fontWeight: "400", fontSize: "14px" }} href="#">HAIR</a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link text-dark" style={{ fontWeight: "400", fontSize: "14px" }} href="#">BARK</a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link text-dark" style={{ fontWeight: "400", fontSize: "14px" }} href="#">SALE</a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link rounded-pill px-4 text-dark" style={{ border: "2px solid black", fontWeight: "400", fontSize: "14px" }} href="#">LOG IN<i className="fa-solid fa-angle-right ms-2"></i></a>
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
            <h1 className='font-secondary' style={{ fontWeight: "400", fontSize: "48px" }}>Look good without
              leaving your house.</h1>
            <p style={{ fontWeight: "400", fontSize: "18px" }}>Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</p>
            <a style={{ backgroundColor: "#FFFFFF", borderColor: "#EF8094", color: "black", fontWeight: "400", fontSize: "16px" }} href="#" className="btn btn-primary rounded-pill px-3">SIGN UP<i className="fa-solid fa-angle-right ms-2"></i></a>
          </div>
        </div>
        <div className='col-lg-7 px-0'>
          <div>
            <img className='img-fluid' src={box} alt="" />
          </div>
        </div>
      </div>

      {/* Plan card section */}
      <div className='container'>
        <div className='d-flex mx-auto mb-5'>
          <div className='mx-auto mt-5'>
            <h1 className='font-secondary mb-0' style={{ fontWeight: "400", fontSize: "48px" }}>Pick Your Plan</h1>
            <img src={underline} alt="" />
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 pe-lg-5 ps-lg-5 mb-3'>
            <div className="card" style={card_1}>
              <div className="card-body text-center" style={{ margin: '2.5rem 0' }}>
                <h5 className="card-title font-secondary" style={{ fontWeight: "400", fontSize: "36px" }}>Monthly</h5>
                <p className="card-text" style={{ fontWeight: "400", fontSize: "44px" }}>$18/mo</p>
                <div className='d-flex align-items-center justify-content-center'>
                  <a style={{ backgroundColor: "#EF8094", fontWeight: "400", fontSize: "16px" }} href="#" className="btn btn-primary rounded-pill px-3 border-0">FIND YOUR BOX</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 pe-lg-5 ps-lg-5 mb-3'>
            <div className="card" style={card_2}>
              <div className="card-body text-center" style={{ margin: '2.5rem 0' }}>
                <h5 className="card-title font-secondary" style={{ fontWeight: "400", fontSize: "36px" }}>Yearly</h5>
                <p className="card-text" style={{ fontWeight: "400", fontSize: "44px" }}>$15/mo</p>
                <div className='d-flex align-items-center justify-content-center'>
                  <a style={{ backgroundColor: "#EF8094", fontWeight: "400", fontSize: "16px" }} href="#" className="btn btn-primary rounded-pill px-3 border-0">FIND YOUR BOX</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='text-center mt-4 mb-5' style={{ fontWeight: "400", fontSize: "18px" }}>Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</p>
      </div>

      {/* works section */}
      <div className='container'>
        <div className='d-flex mx-auto'>
          <div className='mx-auto mt-3 mb-3'>
            <h1 className='font-secondary mb-0' style={{ fontWeight: "400", fontSize: "48px" }}>How it works?</h1>
            <img src={underline1} alt="" />
          </div>
        </div>

        <div className='container mb-3'>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <img src={girl1} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-7 col-md-6 col-12 d-flex align-items-center">
              <div>
                <h2 className='font-secondary' style={{ fontWeight: "400", fontSize: "36px" }}>Setup your profile &
                  preferences</h2>
                <p style={{ fontWeight: "400", fontSize: "18px" }}>Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6"> </div>
          <div className="col-lg-6">
            <div><img className='img-fluid' src={box1} alt="" /></div>

            <div>
              <h2 className='font-secondary' style={{ fontWeight: "400", fontSize: "36px" }}>Review your
                custom box</h2>
              <p style={{ fontWeight: "400", fontSize: "18px" }}>Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.</p>
            </div>
          </div>
        </div>

        <div className='container mb-3'>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12 pe-0">
              <img src={girl2} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-7 col-md-6 col-12 d-flex align-items-center">
              <div>
                <h2 className='font-secondary' style={{ fontWeight: "400", fontSize: "36px" }}>Try it on at home</h2>
                <p style={{ fontWeight: "400", fontSize: "18px" }}>Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex align-items-center justify-content-center mt-5 mb-5'>
          <a style={{ backgroundColor: "#FFFFFF", borderColor: "#EF8094", color: "black", fontWeight: "400", fontSize: "16px" }} href="#" className="btn btn-primary rounded-pill px-3">TRY IT FOR YOURSELF<i className="fa-solid fa-angle-right ms-2"></i></a>
        </div>
      </div>

      {/* Social posts section */}
      <div style={{ backgroundColor: "#F5F8FF" }} className="mt-5 mb-3">
        <h1 className='text-center pt-5 pb-3 font-secondary' style={{ fontWeight: "400", fontSize: "48px" }}>Social Posts</h1>
        <div className='row mx-3'>

          <div className="container px-4">
            <div className="row gx-4 gy-5">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div>
                  <img src={img1} alt="" />
                </div>
                <p className="card-text" style={{ fontWeight: "400", fontSize: "26px" }}>How to rock the lip look that turns heads</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div>
                  <img src={img2} alt="" />
                </div>
                <p className="card-text" style={{ fontWeight: "400", fontSize: "26px" }}>Find the perfect shade for the season</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div>
                  <img src={img3} alt="" />
                </div>
                <p className="card-text" style={{ fontWeight: "400", fontSize: "26px" }}>The 5 eye shadow secrets you never knew</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div>
                  <img src={img4} alt="" />
                </div>
                <p className="card-text" style={{ fontWeight: "400", fontSize: "26px" }}>The pro-tips for at home hair dying</p>
              </div>
            </div>
          </div>

        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <a style={{ backgroundColor: "#EF8094", fontWeight: "400", fontSize: "16px" }} href="#" className="btn btn-primary rounded-pill px-3 border-0 mt-5 mb-5">FOLLOW US ON INSTAGRAM</a>
        </div>
      </div>

      {/* Footer section */}
      <footer style={{ backgroundColor: "#EEEEEE", border: "2px solid #C4C4C4", borderRadius: "6px" }} className="mx-3 mb-3">
        <div className='container'>
          <div className='d-flex justify-content-between mt-4' style={{ margin: "5px 10px 0 10px" }}>
            <div>
              <img src={logo} style={{ height: "30px" }} alt="" />
            </div>
            <div className='d-flex align-items-center icon'>
              <img src={ig} alt="" className="img-fluid ms-3" />
              <img src={fb} alt="" className="img-fluid ms-3" />
              <img src={tw} alt="" className="img-fluid ms-3" />
              <img src={sc} alt="" className="img-fluid ms-3" />
            </div>
          </div>

          <div style={{ margin: "5px 10px 0 10px" }}>
            <div className="row mt-5 mb-3">
              <div className="col-lg-3 col-md-6 col-6">
                <p className='footer-content' style={{ fontWeight: "400", fontSize: "20px" }}>UPBOX</p>
                <p className='footer-content'>Upbox Bag</p>
                <p className='footer-content'>Upbox Box Platinum</p>
                <p className='footer-content'>Upbox Box VIP</p>
                <p className='footer-content'>Deals</p>
                <p className='footer-content'>Seasonal Items</p>
                <p className='footer-content'>Upbox Promise</p>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <p className='footer-content' style={{ fontWeight: "400", fontSize: "20px" }}>Find Us On</p>
                <p className='footer-content'>Instagram</p>
                <p className='footer-content'>Facebook</p>
                <p className='footer-content'>TikTok</p>
                <p className='footer-content'>SnapChat</p>
                <p className='footer-content'>Twitter</p>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <p className='footer-content' style={{ fontWeight: "400", fontSize: "20px" }}>Product</p>
                <p className='footer-content'>Get the App</p>
                <p className='footer-content'>Loyalty Program</p>
                <p className='footer-content'>Affiliates</p>
                <p className='footer-content'>Press</p>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <p className='footer-content' style={{ fontWeight: "400", fontSize: "20px" }}>Help</p>
                <p className='footer-content'>Returns</p>
                <p className='footer-content'>FAQ</p>
                <p className='footer-content'>Contact</p>
                <p className='footer-content'>Community</p>
                <p className='footer-content'>Videos</p>
              </div>
            </div>
          </div>

          <div style={{ width: "100%", height: "2px", backgroundColor: "#C4C4C4" }}>
          </div>

          <div className='footer-bottom mt-3'>
            <p className='m-0'>© 2020 Quest AI. Upbox is a Sample Project and open source design project free for personal and commercial use.</p>
            <p className='pe-5'>Terms</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
