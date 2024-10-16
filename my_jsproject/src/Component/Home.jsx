// import React from "react";
// import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        
        
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="la.jpg" alt="Los Angeles" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="chicago.jpg" alt="Chicago" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="ny.jpg" alt="New York" className="d-block w-100" />
          </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
      </div>

      <Outlet />
    </>
  );
}

export default Home;
