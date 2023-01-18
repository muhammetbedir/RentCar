import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    password2: "",
    email: "",
    name: "",
    surname: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="signupPage">
      <form className="signupCardContainer" action="/user">
        <h2>Kayıt Ol</h2>
        <div>
          <input
            type="text"
            placeholder="Ad"
            required
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Soyad"
            required
            value={user.surname}
            onChange={(e) => {
              setUser({ ...user, surname: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            required
            value={user.userName}
            onChange={(e) => {
              setUser({ ...user, userName: e.target.value });
            }}
          />
          <input
            type="email"
            placeholder="Mail"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Şifre"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Şifre Tekrarı"
            value={user.password2}
            onChange={(e) => setUser({ ...user, password2: e.target.value })}
            required
          />
        </div>

        {errorMessage && <h3 className="errorMessage"> *{errorMessage}</h3>}
        <button>Kayıt Ol</button>
        <NavLink className="signUpBtn" to={"/login"}>
          Giriş Yap
        </NavLink>
      </form>
    </div>
  );
}

export default SignUp;
