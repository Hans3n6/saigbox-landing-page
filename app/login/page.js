'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  // Production backend API URL
  const API_BASE_URL = 'https://api.saigbox.com';
  // Dashboard URL after successful auth
  const DASHBOARD_URL = 'https://dashboard.saigbox.com';
  
  useEffect(() => {
    // Check for auth callback parameters
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const authError = urlParams.get('error');
    
    if (token) {
      localStorage.setItem('access_token', token);
      window.location.href = DASHBOARD_URL;
      return;
    }
    
    if (authError) {
      if (authError === 'access_denied') {
        setError('Authentication cancelled. Please try again.');
      } else {
        setError('Authentication failed. Please try again.');
      }
      window.history.replaceState({}, document.title, '/login');
    }
  }, []);
  
  const showLoading = (message = 'Processing...') => {
    setLoadingMessage(message);
    setLoading(true);
    setError(null);
    setSuccessMessage(null);
  };
  
  const hideLoading = () => {
    setLoading(false);
    setLoadingMessage('');
  };
  
  const showError = (message) => {
    setError(message);
    hideLoading();
    setTimeout(() => setError(null), 5000);
  };
  
  const showSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000);
  };
  
  const handleGoogleAuth = async () => {
    showLoading('Connecting to Google...');
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/google/url`);
      const data = await response.json();
      
      if (data.url) {
        sessionStorage.setItem('oauth_return_url', DASHBOARD_URL);
        window.location.href = data.url;
      } else {
        showError('Failed to initialize Google authentication');
      }
    } catch (error) {
      showError('Connection error. Please try again.');
    }
  };
  
  const handleMicrosoftAuth = async () => {
    showLoading('Connecting to Microsoft...');
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/microsoft/url`);
      const data = await response.json();
      
      if (data.url) {
        sessionStorage.setItem('oauth_return_url', DASHBOARD_URL);
        window.location.href = data.url;
      } else {
        showError('Failed to initialize Microsoft authentication');
      }
    } catch (error) {
      showError('Connection error. Please try again.');
    }
  };
  
  const handleAppleAuth = () => {
    showError('Apple Sign In coming soon!');
  };
  
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    showError('Email authentication coming soon!');
  };

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(to bottom right, #f0fdf4, #dcfce7);
          min-height: 100vh;
        }
        
        .auth-container {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .provider-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .provider-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .provider-button:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .provider-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        
        .loading-dots {
          display: inline-flex;
          gap: 4px;
        }
        
        .loading-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: currentColor;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        
        .loading-dots span:nth-child(1) {
          animation-delay: -0.32s;
        }
        
        .loading-dots span:nth-child(2) {
          animation-delay: -0.16s;
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating-icon {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
      
      <div className="min-h-screen flex">
        {/* Left Panel - Branding */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden" style={{ backgroundColor: '#7fc97f' }}>
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col justify-center items-center w-full p-12">
            <div className="floating-icon mb-8">
              <svg className="w-24 h-24 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"/>
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">SAIGBOX</h1>
            <p className="text-xl text-white/90 text-center max-w-md">
              Your intelligent email assistant powered by AI
            </p>
          </div>
        </div>
        
        {/* Right Panel - Auth Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="auth-container w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-lg mb-4">
                <i className="fas fa-leaf text-white text-3xl"></i>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">SAIGBOX</h1>
            </div>
            
            {/* Auth Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
                <p className="text-gray-600">Sign in to continue to your inbox</p>
              </div>
              
              {/* OAuth Providers */}
              <div className="space-y-3">
                {/* Google Button */}
                <button 
                  onClick={handleGoogleAuth}
                  className="provider-button w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 relative"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continue with Google</span>
                </button>
                
                {/* Microsoft Button */}
                <button 
                  onClick={handleMicrosoftAuth}
                  className="provider-button w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 relative"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#F25022" d="M11 11H0V0h11v11z"/>
                    <path fill="#7FBA00" d="M24 11H13V0h24v11z"/>
                    <path fill="#00A4EF" d="M11 24H0V13h11v24z"/>
                    <path fill="#FFB900" d="M24 24H13V13h24v24z"/>
                  </svg>
                  <span>Continue with Microsoft</span>
                </button>
                
                {/* Apple Button */}
                <button 
                  onClick={handleAppleAuth}
                  className="provider-button w-full bg-black hover:bg-gray-900 text-white font-medium py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 relative"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span>Continue with Apple</span>
                </button>
              </div>
              
              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or</span>
                </div>
              </div>
              
              {/* Email Sign In */}
              <form onSubmit={handleEmailAuth} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-all transform hover:scale-[1.02]"
                >
                  Continue with Email
                </button>
              </form>
              
              {/* Terms */}
              <p className="mt-8 text-center text-xs text-gray-500">
                By continuing, you agree to our{' '}
                <a href="#" className="text-green-600 hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
            
            {/* Additional Options */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                New to SAIGBOX?{' '}
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">Create an account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-green-600 rounded-full animate-spin border-t-transparent"></div>
              </div>
              <p className="text-gray-900 font-semibold text-lg mb-2">{loadingMessage}</p>
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Notification Messages */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-lg max-w-md animate-slideIn">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
              </svg>
              <p className="ml-3 text-sm text-red-800">{error}</p>
            </div>
          </div>
        )}
        
        {successMessage && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg shadow-lg max-w-md animate-slideIn">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <p className="ml-3 text-sm text-green-800">{successMessage}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}// Force redeploy Wed Aug 27 12:55:30 CDT 2025
