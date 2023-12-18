// usePageRefresh.js
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const usePageRefresh = () => {
  // Get the navigate and location functions from react-router-dom
  const navigate = useNavigate();
  const location = useLocation();

  // Effect to be executed when the component mounts
  useEffect(() => {
    // Function to be called just before the page is about to be refreshed
    const handleBeforeUnload = () => {
      // Set a flag in localStorage to indicate a page refresh
      localStorage.setItem('isPageRefreshing', 'true');
    };

    // Attach the handleBeforeUnload function to the beforeunload event
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Effect to be executed whenever the component is mounted or its dependencies change
  useEffect(() => {
    // Check if the page is being refreshed
    const isPageRefreshing = localStorage.getItem('isPageRefreshing');

    if (isPageRefreshing) {
      // Log the current component when the page is refreshed
      console.log('Page refreshed on component:', location.pathname);
      
      // If the page is being refreshed, navigate back to the home page
      navigate('/');
      
      // Reset the flag in localStorage to avoid unnecessary redirects
      localStorage.removeItem('isPageRefreshing');
    }
  }, [navigate, location]); // Dependencies include navigate and location functions

};

export default usePageRefresh;
