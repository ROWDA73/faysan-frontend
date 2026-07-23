import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../services/authService';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);

    try {
      if (isLogin) {
        await login({ username: formData.username, password: formData.password });
        setSuccessMsg('Si guul leh ayaad u gashay nidaamka!');
        setTimeout(() => navigate('/'), 1000);
      } else {
        await register(formData);
        setSuccessMsg('Akoonkaaga si guul leh ayaa loo abuuray! Fadlan hadda gal.');
        setTimeout(() => {
          setIsLogin(true);
          setSuccessMsg('');
        }, 1500);
      }
    } catch (err) {
      setError('Khalad ayaa dhacay. Fadlan hubi xogtaada ama xiriirka server-ka.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] bg-[#FAF8F5] flex items-center justify-center py-12 px-6 font-sans relative overflow-hidden">
      {/* Luxury Background Glow Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E5A912]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#5A121A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-3xl border border-[#E5A912]/40 shadow-xl space-y-6 relative z-10 transition-all duration-300">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-block px-3 py-1 bg-[#FAF8F5] border border-[#E5A912]/30 rounded-full text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#5A121A] mb-1">
            Secure Portal
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#5A121A]">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Faysan Collection Luxury Experience
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 text-xs p-4 rounded-r-xl">
            {error}
          </div>
        )}

        {successMsg && (
          <div className="bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800 text-xs p-4 rounded-r-xl">
            {successMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase font-extrabold text-[#5A121A] mb-2 tracking-wider">
              Username / Email
            </label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              placeholder="e.g. faysan_user"
              className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3.5 text-sm text-[#5A121A] focus:outline-none focus:border-[#5A121A] focus:ring-2 focus:ring-[#5A121A]/20 transition"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-xs uppercase font-extrabold text-[#5A121A] mb-2 tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. user@faysan.so"
                className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3.5 text-sm text-[#5A121A] focus:outline-none focus:border-[#5A121A] focus:ring-2 focus:ring-[#5A121A]/20 transition"
              />
            </div>
          )}

          <div>
            <label className="block text-xs uppercase font-extrabold text-[#5A121A] mb-2 tracking-wider">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3.5 text-sm text-[#5A121A] focus:outline-none focus:border-[#5A121A] focus:ring-2 focus:ring-[#5A121A]/20 transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#5A121A]/60 hover:text-[#5A121A]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#5A121A] to-[#430d13] text-white py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:shadow-lg transition-all duration-200 mt-6 disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              isLogin ? 'Sign In' : 'Create Account'
            )}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="text-center pt-4 border-t border-gray-100">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setSuccessMsg('');
            }}
            className="text-xs font-bold text-[#E5A912] hover:text-[#5A121A] transition"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Auth;