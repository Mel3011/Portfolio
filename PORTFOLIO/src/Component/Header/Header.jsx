export default function Header() {
  return (
    <>
      <header>
        <div className="nav_container">
          <div className="logo">
            <a href="#part1">M</a>
          </div>
          <div className="menu">
            <p>
              <a href="#part1">
                <i className="fa-solid fa-house"></i>
              </a>
            </p>
            <p>
              <a href="#part2">
                <i className="fa-regular fa-address-card"></i>
              </a>
            </p>
            <a href="#part3">
              <i className="fa-solid fa-code"></i>
            </a>
            <a href="#part4">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
