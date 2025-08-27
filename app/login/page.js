'use client';

import { useEffect, useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Production backend API URL
  const API_BASE_URL = 'http://3.233.250.55:8000';
  // Dashboard URL after successful auth
  const DASHBOARD_URL = 'https://dashboard.saigbox.com';
  
  useEffect(() => {
    // Check for token in URL params (OAuth callback)
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      // Store token and redirect to dashboard
      localStorage.setItem('access_token', token);
      window.location.href = DASHBOARD_URL;
      return;
    }
    
    // Check if already authenticated
    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      checkAuth(storedToken);
    }
  }, []);
  
  const checkAuth = async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/check`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (data.authenticated) {
          window.location.href = DASHBOARD_URL;
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    }
  };
  
  const initiateGoogleAuth = async () => {
    setLoading(true);
    try {
      sessionStorage.setItem('oauth_return_url', DASHBOARD_URL);
      const response = await fetch(`${API_BASE_URL}/api/auth/google/url?redirect_after=${encodeURIComponent('https://www.saigbox.com/login')}`);
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Failed to initialize Google authentication');
        setLoading(false);
      }
    } catch (error) {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  };
  
  const initiateMicrosoftAuth = async () => {
    setLoading(true);
    try {
      sessionStorage.setItem('oauth_return_url', DASHBOARD_URL);
      const response = await fetch(`${API_BASE_URL}/api/auth/microsoft/url?redirect_after=${encodeURIComponent('https://www.saigbox.com/login')}`);
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Failed to initialize Microsoft authentication');
        setLoading(false);
      }
    } catch (error) {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  };
  
  const loginAsDemo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
        window.location.href = DASHBOARD_URL;
      } else {
        setError('Failed to start demo session');
        setLoading(false);
      }
    } catch (error) {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-700 to-green-600 p-4">
      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-2xl shadow-lg">
            <svg className="w-12 h-12 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">SAIGBOX</h1>
          <p className="text-white/80 text-lg">Your intelligent inbox assistant</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to Your Dashboard</h2>
            <p className="text-gray-600">Connect your email account to get started</p>
          </div>

          <div className="space-y-4">
            {/* Google Sign In */}
            <button
              onClick={initiateGoogleAuth}
              disabled={loading}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg shadow-md flex items-center justify-center space-x-3 border-2 border-transparent hover:border-blue-500 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Microsoft Sign In */}
            <button
              onClick={initiateMicrosoftAuth}
              disabled={loading}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg shadow-md flex items-center justify-center space-x-3 border-2 border-transparent hover:border-blue-600 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#F25022" d="M11.4 11.4H0V0h11.4v11.4z"/>
                <path fill="#7FBA00" d="M24 11.4H12.6V0H24v11.4z"/>
                <path fill="#00A4EF" d="M11.4 24H0V12.6h11.4V24z"/>
                <path fill="#FFB900" d="M24 24H12.6V12.6H24V24z"/>
              </svg>
              <span>Continue with Microsoft</span>
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Demo Mode */}
            <button
              onClick={loginAsDemo}
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              Try Demo Account
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start space-x-2">
              <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/>
              </svg>
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Secure Authentication</p>
                <p className="text-blue-700">We only request access to read and manage your emails. Your credentials are never stored on our servers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-700 font-medium">Connecting to your account...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}