import React, { useEffect, useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(true);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">liverr</span>

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <div className="link">Gigs</div>
                      <div className="link">Add New Gig</div>
                    </>
                  )}
                  <div className="link">Orders</div>
                  <div className="link">Messages</div>
                  <div className="link">Logout</div>
                </div>
              )}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <div className="link">
                <button>Join</button>
              </div>
            </>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink">Graphics & Design</Link>
            <Link className="link menuLink">Video & Animation</Link>
            <Link className="link menuLink">Writing & Translation</Link>
            <Link className="link menuLink">AI Services</Link>
            <Link className="link menuLink">Digital Marketing</Link>
            <Link className="link menuLink">Music & Audio</Link>
            <Link className="link menuLink">Programming & Tech</Link>
            <Link className="link menuLink">Business</Link>
            <Link className="link menuLink">Lifestyle</Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
