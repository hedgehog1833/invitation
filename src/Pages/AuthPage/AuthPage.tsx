import ContentLayout from "../../Components/ContentLayout";
import LoginForm from "../../Forms/LoginForm";
import MainLayout from "../../MainLayout";

import styles from "./AuthPage.module.scss";

const AuthPage = () => {
  return (
    <MainLayout headerText="Login">
      <ContentLayout>
        <div className={styles.headerWrapper}>
          <p>
            Du findest das Passwort auf deiner Eintrittskarte über dem QR-Code
          </p>
        </div>
        <LoginForm />
      </ContentLayout>
    </MainLayout>
  );
};

export default AuthPage;
