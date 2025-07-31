import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({ currentTitle }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
          {pathnames.length > 0 && <span className="mx-1">/</span>}
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          let displayName = decodeURIComponent(name);

          // Rename route segments for better display
          if (displayName === "product") displayName = "Products";

          return (
            <li key={index}>
              {isLast ? (
                <span className="text-black font-semibold">{currentTitle || displayName}</span>
              ) : (
                <>
                  <Link to={routeTo} className="hover:underline">{displayName}</Link>
                  <span className="mx-1">/</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
