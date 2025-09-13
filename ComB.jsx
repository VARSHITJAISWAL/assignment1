
import React, { useState } from "react";
import styles from "./ComB.module.css";
import { useNavigate } from "react-router-dom";

const ComB = () => {
  const navigate = useNavigate();
  const [uniqueId, setUniqueId] = useState("");

  // handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  // handle appointments
  const handleViewAppointments = () => {
    if (!uniqueId) {
      alert("Please enter Unique ID to view your appointment.");
    } else {
      navigate(`/appointments/${uniqueId}`);
    }
  };

  return (
    <div className={`${styles.container} min-h-screen`}>
      {/* Header */}
      <header
        className={`${styles.header} flex justify-between items-center px-6 py-4`}
      >
        <h1 className="text-white text-2xl font-bold">Hospital Section</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => handleNavigation("/emergency")}
        >
          Emergency Call
        </button>
      </header>

      {/* Navbar */}
      <nav className="bg-white shadow flex justify-around py-3 text-gray-700 font-medium">
        <span
          className="cursor-pointer hover:text-teal-600"
          onClick={() => handleNavigation("/")}
        >
          Home
        </span>
        <span
          className="cursor-pointer hover:text-teal-600"
          onClick={() => handleNavigation("/departments")}
        >
          Departments
        </span>
        <span
          className="cursor-pointer hover:text-teal-600"
          onClick={() => handleNavigation("/doctors")}
        >
          Doctors
        </span>
        <span
          className="cursor-pointer hover:text-teal-600"
          onClick={() => handleNavigation("/appointment")}
        >
          Arogya Portal
        </span>
      </nav>

      {/* Hero Section */}
      <section className={`${styles.hero} flex flex-col md:flex-row items-center`}>
        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Your Health,
            <br /> Our Priority
          </h2>
        </div>

        {/* Right Doctor Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
            alt="Doctor"
            className="h-72 md:h-96"
          />
        </div>
      </section>

      {/* Departments Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 text-center">
        <div
          className={`${styles.card}`}
          onClick={() => handleNavigation("/pediatrics")}
        >
          <h3 className="text-xl font-semibold">Pediatrics ➡</h3>
          <p className="text-sm text-gray-600">Specialized care for baby</p>
        </div>
        <div
          className={`${styles.card}`}
          onClick={() => handleNavigation("/neurology")}
        >
          <h3 className="text-xl font-semibold">Neurology 🧠</h3>
          <p className="text-sm text-gray-600">
            Comprehensive brain and nervous system
          </p>
        </div>
        <div
          className={`${styles.card}`}
          onClick={() => handleNavigation("/orthopedics")}
        >
          <h3 className="text-xl font-semibold">Orthopedics 🦴</h3>
          <p className="text-sm text-gray-600">Bone and joint care</p>
        </div>
        <div
          className={`${styles.card}`}
          onClick={() => handleNavigation("/cardiology")}
        >
          <h3 className="text-xl font-semibold">Cardiology ❤️</h3>
          <p className="text-sm text-gray-600">
            24/7 cardiac care with top specialists
          </p>
        </div>
      </section>

      {/* Appointment Section */}
      <section
        className={`${styles.appointmentSection} bg-gray-100 flex flex-col items-center p-8`}
      >
        <h3 className="text-2xl font-semibold mb-4">Appointment</h3>
        <input
          type="text"
          placeholder="Enter Unique ID"
          value={uniqueId}
          onChange={(e) => setUniqueId(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-64 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <div className="flex gap-4">
          <button
            className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600"
            onClick={handleViewAppointments}
          >
            View All Appointments
          </button>
          <button
            className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
            onClick={() => navigate("/appointment")}
          >
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default ComB;
