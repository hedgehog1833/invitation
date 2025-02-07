import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth.context";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const { doLogin, errorMessage } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (doLogin(password)) navigate("wir-heiraten");
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles.loginForm}>
      <label className={styles.passwordLabel} id="password">
        Passwort:
      </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => {
          setPassword(e.currentTarget.value);
        }}
      />

      <button type="submit">Abschicken</button>

      {errorMessage && (
        <p className={styles.errorText}>Das Passwort ist falsch</p>
      )}
    </form>
  );
};

export default LoginForm;
