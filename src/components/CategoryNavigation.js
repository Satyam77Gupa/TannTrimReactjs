import React from 'react';
import './CategoryNavigation.css';

const CategoryNavigation = () => {
  const categories = [
    { name: 'All Bags', icon: 'backpack' },
    { name: 'Vanity Pouch', icon: 'vanity' },
    { name: 'Tote Bag', icon: 'tote' },
    { name: 'Duffle Bag', icon: 'duffle' },
    { name: 'Laptop Sleeve', icon: 'laptop' },
    { name: 'Messenger Bags', icon: 'messenger' },
    { name: 'Slings Bgs', icon: 'sling' },
    { name: 'Handbags', icon: 'handbag' },
    { name: 'Bucket Bag', icon: 'bucket' }
  ];

  const renderCategoryIcon = (iconType) => {
    switch (iconType) {
      case 'backpack':
        return (
          <svg viewBox="0 0 90 90" className="category-icon-svg">
            <g transform="translate(2.34, 22.68)">
              <path d="M10.83 0L31.51 0L31.51 8.39L10.83 8.39Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="0.9"/>
              <path d="M0 8.15L42.66 8.15L42.66 63.9L0 63.9Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="0.9"/>
              <path d="M5.91 32.82L36.94 32.82L36.94 63.9L5.91 63.9Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="0.9"/>
              <path d="M13.05 33.06L13.05 63.65" stroke="#E5DFD9" strokeWidth="0.9"/>
              <path d="M30.04 32.82L30.04 63.66" stroke="#E5DFD9" strokeWidth="0.9"/>
              <path d="M1.48 18.75L41.12 18.75L41.12 21.47L1.48 21.47Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="0.9"/>
            </g>
            <path d="M39.6 57.06L46.35 57.06L46.35 87.75L39.6 87.75Z" fill="#0C0C0C" stroke="rgba(0, 0, 0, 0)" strokeWidth="0.18"/>
            <g transform="translate(40.86, 53.1)">
              <path d="M0 4.94L47.16 4.94L47.16 33.48L0 33.48Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1"/>
              <path d="M17.56 0L29.65 0L29.65 4.92L17.56 4.92Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1"/>
              <path d="M20.15 9.69L27.35 9.69" stroke="#E5DFD9" strokeWidth="1"/>
              <path d="M10.36 21.99L10.36 33.28" stroke="#E5DFD9" strokeWidth="1"/>
              <path d="M36.56 21.99L36.56 33.28" stroke="#E5DFD9" strokeWidth="1"/>
              <circle cx="23.77" cy="24.73" r="8.205" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1"/>
            </g>
          </svg>
        );
      case 'vanity':
        return (
          <svg viewBox="0 0 90 90" className="category-icon-svg">
            <g transform="translate(2.24, 26.25)">
              <path d="M2.62 18.75L84.16 18.75L84.16 60.51L2.62 60.51Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M36.64 25.41L49.96 25.41" stroke="#E5DFD9" strokeWidth="1.5"/>
              <ellipse cx="22.57" cy="13.06" rx="22.57" ry="13.06" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
            </g>
          </svg>
        );
      case 'tote':
        return (
          <svg viewBox="0 0 90 90" className="category-icon-svg">
            <g transform="translate(13.5, 1.44)">
              <path d="M0 29.41L62.82 29.41L62.82 86.94L0 86.94Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M16.67 1.56L45.84 1.56L45.84 29.15L16.67 29.15Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M15.11 0L47.41 0L47.41 29.15L15.11 29.15Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M44.28 79.65L56 79.65" stroke="#0C0C0C" strokeWidth="1.5"/>
            </g>
          </svg>
        );
      case 'duffle':
        return (
          <svg viewBox="0 0 96 96" className="category-icon-svg">
            <g transform="translate(1.54, 29.38)">
              <path d="M0 9.68L92.93 9.68L92.93 65.66L0 65.66Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M34.6 0L58.42 0L58.42 9.65L34.6 9.65Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M39.7 19.01L53.88 19.01" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M20.42 43.13L20.42 65.26" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M72.04 43.13L72.04 65.26" stroke="#E5DFD9" strokeWidth="1.5"/>
              <circle cx="46.79" cy="48.525" r="16.165" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
            </g>
          </svg>
        );
      case 'laptop':
        return (
          <svg viewBox="0 0 90 90" className="category-icon-svg">
            <g transform="translate(-1.62, 29.16)">
              <path d="M4.69 0.46L88.02 0.46L88.02 58.22L4.69 58.22Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M8.51 3.14L84.2 3.14L84.2 56.11L8.51 56.11Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <rect x="29.4" y="43.37" width="33.69" height="6.26" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M40.4 46.5L52.19 46.5" stroke="#E5DFD9" strokeWidth="1.5"/>
            </g>
            <path d="M4.32 -8.28L10.71 -8.28L10.71 2.16L4.32 2.16Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
          </svg>
        );
      case 'messenger':
        return (
          <svg viewBox="0 0 96 96" className="category-icon-svg">
            <g transform="translate(1.73, 27.46)">
              <path d="M0 36.86L92.74 36.86L92.74 42.62L0 42.62Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M41.09 19.01L51.65 19.01" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M33.02 0L60.67 0L60.67 12.29L33.02 12.29Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M0 12.29L92.74 12.29L92.74 67.78L0 67.78Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <rect x="20.35" y="43.01" width="5.57" height="15.94" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <rect x="68.16" y="31.1" width="5.57" height="11.14" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <rect x="20.35" y="31.1" width="5.57" height="11.14" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <rect x="68.16" y="43.01" width="5.57" height="15.94" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
            </g>
          </svg>
        );
      case 'sling':
        return (
          <svg viewBox="0 0 90 90" className="category-icon-svg">
            <g transform="translate(2.52, 45)">
              <path d="M20.03 -44.72L66.55 -44.72L66.55 0L20.03 0Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M18.05 0L68.24 0L68.24 29.9L18.05 29.9Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M16.09 14.73L70.1 14.73L70.1 44.28L16.09 44.28Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M21.32 -43.34L65.26 -43.34L65.26 0L21.32 0Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M54.7 38.7L63.31 38.7" stroke="#E5DFD9" strokeWidth="1.5"/>
              <rect x="39.71" y="29.71" width="6.77" height="3.66" rx="2" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
            </g>
          </svg>
        );
      case 'handbag':
        return (
          <svg viewBox="0 0 90 90" className="category-icon-svg">
            <g transform="translate(3.65, 1.34)">
              <path d="M0 41.99L88.7 41.99L88.7 93.31L0 93.31Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M34.9 85.33L54.57 85.33" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M19.51 0L69.12 0L69.12 41.81L19.51 41.81Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M24.07 3.21L64.55 3.21L64.55 41.99L24.07 41.99Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
            </g>
          </svg>
        );
      case 'bucket':
        return (
          <svg viewBox="0 0 90 90" className="category-icon-svg">
            <g transform="translate(14.4, 3.26)">
              <path d="M5.73 0L61.42 0L61.42 33.82L5.73 33.82Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M9.8 4.56L57.2 4.56L57.2 35.4L9.8 35.4Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M26.83 82.4L40.12 82.4" stroke="#E5DFD9" strokeWidth="1.5"/>
              <circle cx="6.97" cy="36.965" r="3.485" fill="rgba(255, 255, 255, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <circle cx="36.28" cy="44.94" r="2.11" fill="rgba(255, 255, 255, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <circle cx="30.01" cy="44.94" r="2.11" fill="rgba(255, 255, 255, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M39.25 40.37L41.11 40.37L41.11 61.55L39.25 61.55Z" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M14.02 34.95L15.64 34.95L15.64 49.89L14.02 49.89Z" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M20.38 33.9L22.12 33.9L22.12 51.98L20.38 51.98Z" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M26.53 38.42L28.3 38.42L28.3 57.29L26.53 57.29Z" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M36.17 44.74L37.16 44.74L37.16 69.59L36.17 69.59Z" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M30.9 44.74L31.95 44.74L31.95 67.34L30.9 67.34Z" stroke="#E5DFD9" strokeWidth="1.5"/>
              <circle cx="59.34" cy="36.965" r="3.485" fill="rgba(255, 255, 255, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M0 29.38L67.01 29.38L67.01 89.47L0 89.47Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M11.6 27.12L55.7 27.12L55.7 44.75L11.6 44.75Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
              <path d="M11.98 29.3L54.71 29.3L54.71 40.82L11.98 40.82Z" fill="rgba(196, 196, 196, 0)" stroke="#E5DFD9" strokeWidth="1.5"/>
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="category-nav">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <div className="category-icon">
            {renderCategoryIcon(category.icon)}
          </div>
          <span className="category-name">{category.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default CategoryNavigation;
