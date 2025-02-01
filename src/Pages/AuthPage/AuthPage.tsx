import LoginForm from "../../Forms/LoginForm";
import Layout from "../../MainLayout";

import styles from "./AuthPage.module.scss";

const AuthPage = () => {
  return (
    <Layout>
      <div className={styles.authPageContainer}>
        <div className={styles.headerWrapper}>
          <h1>Login</h1>
          <p>
            Du findest das Passwort auf deiner Eintrittskarte über dem QR-Code
          </p>
        </div>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default AuthPage;
