import React from 'react';

interface BrandIconProps {
  name: string;
  className?: string;
}

export const BrandIcon: React.FC<BrandIconProps> = ({ name, className = "w-6 h-6" }) => {
  const normalized = name.toLowerCase();

  switch (normalized) {
    case 'asana':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" fill="#F06A6A" />
          <circle cx="19" cy="5" r="3" fill="#F06A6A" />
          <circle cx="5" cy="5" r="3" fill="#F06A6A" />
        </svg>
      );
    case 'notion':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M4.222 5.074l2.469-.988v13.53l-2.469.741V5.074zm15.556 12.395l-2.47.889V4.654l-8.641 15.605-2.667.963V6.753l2.47-.84V19.16l8.765-15.753 2.543-.765v14.864z"/>
        </svg>
      );
    case 'airtable':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M12.923 0l9.308 10.923h-18.616l9.308-10.923zm-11.077 12.231h8.538v10.923l-8.538-10.923zm10.385 0h8.538l-8.538 10.923v-10.923z"/>
        </svg>
      );
    case 'slack':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M5.042 15.123a2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.52h2.52v5.04zm3.36-5.04a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v2.52h-5.04v-2.52zm0 8.4a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1-2.52-2.52v-2.52h5.04v2.52zm5.04-3.36a2.52 2.52 0 0 1 2.52 2.52 2.52 2.52 0 0 1-2.52 2.52h-2.52v-5.04zm-3.36 5.04a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1-2.52-2.52v-2.52h5.04v2.52zm0-8.4a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v2.52h-5.04v-2.52zm8.4 3.36a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1-2.52 2.52h-2.52v5.04zm-5.04-3.36a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v-2.52h-5.04v2.52z"/>
        </svg>
      );
    case 'trello':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" fillOpacity="0.2"/>
          <rect x="6" y="6" width="5" height="10" rx="1"/>
          <rect x="13" y="6" width="5" height="6" rx="1"/>
        </svg>
      );
    case 'meta':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.88h2.54v-2.2c0-2.5 1.5-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.88h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
        </svg>
      );
    case 'instagram':
       return (
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
           <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
           <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
           <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
         </svg>
       );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
           <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
           <rect x="2" y="9" width="4" height="12"></rect>
           <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
     case 'google analytics':
        return (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                <path d="M16 4h4v16h-4zM10 10h4v10h-4zM4 14h4v6H4z" />
            </svg>
        );
      case 'buffer':
          return (
              <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                  <path d="M2 13.5l10 5.5 10-5.5-10-5.5-10 5.5zm0-4.5l10 5.5 10-5.5-10-5.5-10 5.5zm0 9l10 5.5 10-5.5-10-5.5-10 5.5z"/>
              </svg>
          );
      case 'loom':
          return (
              <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="4" fill="currentColor"/>
              </svg>
          );
    default:
      return <div className={`${className} bg-gray-500 rounded-full`} />;
  }
};