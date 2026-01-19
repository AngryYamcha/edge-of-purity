import React from 'react';
import { useDeepLinkRedirect } from './hooks/useDeepLinkRedirect';
import { RedirectCard } from './components/RedirectCard';
import { WEBTOON_APP_SCHEME, WEBTOON_WEB_URL, REDIRECT_DELAY_MS } from './constants';

const App: React.FC = () => {
  const { launchApp } = useDeepLinkRedirect({
    appUrl: WEBTOON_APP_SCHEME,
    webUrl: WEBTOON_WEB_URL,
    delay: REDIRECT_DELAY_MS,
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-sans" style={{ backgroundColor: '#111', color: '#fff' }}>
      <RedirectCard onRetry={launchApp} />
    </div>
  );
};

export default App;