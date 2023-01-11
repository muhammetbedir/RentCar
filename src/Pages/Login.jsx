import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";
function Login() {
  const navigate = useNavigate();
  const { userName, setUserName } = useUser();
  const [user, setUser] = useState({ userName: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const database = [
    {
      id: 1,
      userName: "ahmet",
      password: "1234",
    },
    {
      id: 2,
      userName: "mehmet",
      password: "1234",
    },
  ];
  const findUser = (e) => {
    e.preventDefault();
    const logedUser = database.find((x) => x.userName === user.userName);
    if (logedUser) {
      if (user.password === "") setErrorMessage("Şifre Giriniz");
      else if (logedUser.password !== user.password) {
        setErrorMessage("Şifre Yanlış");
      }
      if (user.password === logedUser.password) {
        navigate(`/user/${logedUser.userName}`);
        setUserName({ name: user.userName, id: user.id });
      }
    } else if (user.userName === "" || user.password === "") {
      setErrorMessage("Lütfen tüm bilgilerinizi giriniz.");
    } else {
      setErrorMessage("Kullanıcı adı veya şifre yanlış.");
    }
  };

  return (
    <div className="loginPage">
      <form className="loginCardContainer" action="/user">
        <h2>Giriş Yap</h2>
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
          type="password"
          placeholder="Şifre"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <NavLink to={"/forgotpasswort"}>Parolanızı mı unuttunuz?</NavLink>
        {errorMessage}
        <button onClick={findUser}>Giriş Yap</button>
        <NavLink className="signUpBtn" to={"/signup"}>
          Kayıt Ol
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
