import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "./utils/supabaseClient";
import AuthForm from "./components/Auth/AuthForm";
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./components/Landing/LandingPage";
import SampleRecipes from "./components/Landing/SampleRecipes";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    getSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setShowAuth(false);
  };

  const handleGetStarted = () => {
    setShowAuth(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Landing & Auth routes */}
        <Route
          path="/"
          element={
            user ? (
              <Dashboard user={user} onLogout={handleLogout} />
            ) : showAuth ? (
              <AuthForm onAuthSuccess={setUser} onBack={() => setShowAuth(false)} />
            ) : (
              <LandingPage onGetStarted={handleGetStarted} />
            )
          }
        />

        {/* Sample Recipes page */}
        <Route path="/sample-recipes" element={<SampleRecipes />} />

        {/* Fallback: redirect to home */}
        <Route path="*" element={<LandingPage onGetStarted={handleGetStarted} />} />
      </Routes>
    </Router>
  );
}

export default App;
