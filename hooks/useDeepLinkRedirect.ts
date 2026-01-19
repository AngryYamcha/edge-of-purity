import { useEffect, useCallback } from 'react';

interface UseDeepLinkRedirectProps {
  appUrl: string;
  webUrl: string;
  delay?: number;
}

export const useDeepLinkRedirect = ({ appUrl, webUrl, delay = 2500 }: UseDeepLinkRedirectProps) => {
  
  const launchApp = useCallback(() => {
    // 1. Attempt to open the App Scheme
    window.location.href = appUrl;

    // 2. Set a timer to check if we should fallback to web
    setTimeout(() => {
      // If the document is still hidden, it means the user likely switched to the app.
      // If it is NOT hidden, the app likely failed to open, so we fallback to web.
      if (!document.hidden) {
        window.location.href = webUrl;
      }
    }, delay);
  }, [appUrl, webUrl, delay]);

  useEffect(() => {
    // Execute immediately on mount (window.onload equivalent)
    launchApp();
  }, [launchApp]);

  return { launchApp };
};