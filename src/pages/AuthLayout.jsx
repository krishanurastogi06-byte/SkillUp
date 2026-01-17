import './AuthLayout.css';

const AuthLayout = ({ title, children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-box">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
