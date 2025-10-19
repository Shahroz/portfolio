import React, { useState, useRef, useEffect } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  style, 
  onClick,
  loading = 'lazy',
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Ensure the src starts with /assets/ for public folder access
  const publicSrc = src.startsWith('/') ? src : `/assets/${src}`;
  
  return (
    <div ref={imgRef} className={`image-container ${className}`} style={style}>
      {!isInView && (
        <div 
          className="image-placeholder"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100px'
          }}
        >
          {placeholder || 'Loading...'}
        </div>
      )}
      
      {isInView && (
        <img
          src={publicSrc}
          alt={alt}
          className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
          style={{
            ...style,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          onClick={onClick}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {hasError && (
        <div 
          className="image-error"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f8f8f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '14px'
          }}
        >
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default Image;
