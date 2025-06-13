import React, { useState } from "react";
import "../styles/sidebar.css";
import {
  FaHome,
  FaBoxOpen,
  FaChartBar,
  FaUpload,
  FaBook,
  FaUsers,
  FaCog,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronDown,
  FaChevronUp,
  FaRegCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (label) => {
    setActiveDropdown(prev => prev === label ? null : label);
  };

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/" },
    {
      icon: <FaBoxOpen />, label: "Inventory", path: "/products", children: [
        { label: "Add Products", path: "/products/add" },
        { label: "Dashboard", path: "/products/dashboard" }
      ]
    },
    { icon: <FaChartBar />, label: "Stocks", path: "/Stocks" },
    { icon: <FaUpload />, label: "Sales", path: "/Sales" },
    { icon: <FaBook />, label: "Documents", path: "/Documents" },
    {
      icon: <FaUsers />, label: "Return and Audit", path: "/Audit", children: [
        { label: "All Users", path: "/users/all" },
        { label: "Add User", path: "/users/new" }
      ]
    },
    { icon: <FaCog />, label: "Report", path: "/Report" }
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>

      <ul className="menu">
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className="menu-link"
              onClick={() => item.children && handleDropdownToggle(item.label)}
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Link to={item.path} className="menu-link" style={{ flex: 1 }}>
                {item.icon}
                {isOpen && <span>{item.label}</span>}
              </Link>

              {/* ✅ Show chevron icon if it has children and sidebar is open */}
              {item.children && isOpen && (
                <span className="chevron-icon">
                  {activeDropdown === item.label ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
            </li>


            {item.children && (
              <ul className={`submenu ${activeDropdown === item.label ? "expanded" : "collapsed"}`}>
                {item.children.map((child, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={child.path}
                      className="menu-link"
                      style={{ paddingLeft: "48px", fontSize: "15px" }}
                    >
                      {/* <FaRegCircle style={{ marginRight: "8px", fontSize: "8px" }} /> */}
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>

      <div className="toggle-container" onClick={toggleSidebar}>
        {isOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </div>
    </div>
  );
};

export default Sidebar;
