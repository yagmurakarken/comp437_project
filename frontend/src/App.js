import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import VideoList from './components/VideoList';
import VideoDetailPage from './components/VideoDetailPage';
import Navbar from './components/Navbar';
import SearchResultPage from './components/SearchResultPage';
import Sidebar from './components/Sidebar';
import ProfilePage from './components/ProfilePage';
import AchievementsPage from './components/AchievementsPage';
import SignIn from './components/SignIn';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        {isLoggedIn && (
          <div>
            <Navbar />
            <div style={{ paddingBottom: '30px' }}></div>
            <Sidebar />
          </div>
        )}
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<MainPage />} />
              <Route path="/videos" element={<VideoList />} />
              <Route path="/video/:id" element={<VideoDetailPage />} />
              <Route path="/search" element={<SearchResultPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
            </>
          ) : (
            <Route path="/" element={<Navigate to="/signin" replace />} />
          )}
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;








