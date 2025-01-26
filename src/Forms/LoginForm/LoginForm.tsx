const LoginForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p>Bitte Passwort eingeben</p>
      <input type="text" />
      <button type="submit">Abschicken</button>
    </form>
  );
};

export default LoginForm;
