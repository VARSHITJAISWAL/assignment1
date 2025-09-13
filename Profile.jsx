import { useNavigate } from "react-router-dom";
import styles from "./profile.module.css";

const Profile = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header
        className={`${styles.header} d-flex justify-content-between align-items-center px-3 py-2`}
      >
        <div className="fw-bold text-white fs-3">Arogya</div>

        {/* Search Bar */}
        <div className="d-flex align-items-center gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            style={{ width: "200px" }}
          />
          <button className="btn btn-light">🔍</button>
        </div>

        {/* Icons */}
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-link text-white fs-4"
            onClick={() => handleNavigation("/home")}
          >
            👤
          </button>
          <button
            className="btn btn-link text-white fs-4"
            onClick={() => handleNavigation("/location")}
          >
            📍
          </button>
          <button
            className="btn btn-link text-white fs-4"
            onClick={() => handleNavigation("/profile")}
          >
            🏠
          </button>
        </div>
      </header>

      {/* CARDS WRAPPER */}
      <div className={`${styles.cardsWrapper} flex-grow-1`}>
        <div className="container-fluid h-100">
          <div className="row h-100 g-4 align-content-stretch">

            {[
              { title: "Appointment", path: "/appointment", icon: "📅" },
              {
                title: "Blood availability",
                path: "/blood-availability",
                icon: "💧",
              },
              { title: "Blood camp", path: "/blood-camp", icon: "⛺" },
              { title: "Emergency", path: "/emergency", icon: "🚨" },
              { title: "Govt schemes", path: "/govt-schemes", icon: "📄" },
              { title: "Organ donation", path: "/organ-donation", icon: "💙" },
              {
                title: "Reports & Prescriptions",
                path: "/reports-prescriptions",
                icon: "📋",
              },
              {
                title: "Death certificate",
                path: "/death-certificate",
                icon: "📜",
              },
            ].map((item, index) => (
              <div key={index} className="col-6 col-md-3 d-flex">
                <div
                  className={`${styles.card} shadow rounded-3 text-center p-3 flex-fill`}
                  onClick={() => handleNavigation(item.path)}
                >
                  <div className="fs-1">{item.icon}</div>
                  <p className="fw-bold mt-2">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className={`${styles.footer} d-flex justify-content-between px-4 py-2`}
      >
        <span onClick={() => handleNavigation("/privacy")}>Privacy policy</span>
        <span onClick={() => handleNavigation("/about")}>About us</span>
        <span onClick={() => handleNavigation("/contact")}>Contact</span>
      </footer>
    </div>
  );
};

export default Profile;
