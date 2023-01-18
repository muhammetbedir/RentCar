import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function ForgotPassword() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="forgotPage">
      <form className="forgotCardContainer" action="/">
        <h2>Şifre Sıfırlama</h2>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          required
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* {errorMessage && <h3 className="errorMessage"> *{errorMessage}</h3>} */}
        <button>Sıfırla</button>
        <NavLink
          className="signUpBtn"
          to={"/login"}
          style={{ textAlign: "center" }}
        >
          Giriş Yap
        </NavLink>
      </form>
    </div>
  );
}

export default ForgotPassword;
