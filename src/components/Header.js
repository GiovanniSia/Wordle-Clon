import React from "react";
import "../css/Header.css"
import BotonHeader from "./BotonHeader";

const Header = () => {
  return (
    <header>

      <div>
        <BotonHeader src="https://img.icons8.com/ios/50/null/menu-squared-2.png" />
        <BotonHeader src="https://img.icons8.com/ios/50/null/calendar--v4.png" />
      </div>

      <div>
        <p className="la-palabra">LA PALABRA</p>
        <p className="del-dia">DEL DÍA</p>
      </div>

      <div>
        <BotonHeader src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/32/null/external-statistics-dashboard-ui-inkubators-basic-outline-inkubators.png" />
        <BotonHeader src="https://img.icons8.com/material-outlined/24/null/settings--v3.png" />
      </div>

    </header>
  );
}

export default Header;