import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';

const SignupPage = () => {
  return (
    <AuthLayout title="Create Your Account">
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </AuthLayout>
  );
};

export default SignupPage;
