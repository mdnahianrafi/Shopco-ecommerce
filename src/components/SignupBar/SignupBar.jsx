import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
const SignupBanner = () => {
  const [visible, setVisible] = useState(false); // initially hidden

  useEffect(() => {
    const dismissed = localStorage.getItem("signupBannerDismissed");

    if (dismissed === "true") return;

    // Show after 1 second
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("signupBannerDismissed", "true");
  };
if (!visible) return null;

  return (
    <div className="bg-black text-white mx-auto flex justify-between py-3 transition-all duration-500">
      <p className="  text-xl  font-light satoshi-font">
  
      </p>
      <p className=" text-xl  font-light satoshi-font">
        📝 Sign up now to get 20% now <Link to='/signup' ><span className="font-bold hover:underline">Sign up Now</span></Link>
      </p>
      <button onClick={handleClose} className="pr-20 text-3xl font-bold hover:text-red-600 cursor-pointer">
       <RxCross1 />
   
      </button>
    </div>
  );
};

export default SignupBanner;
