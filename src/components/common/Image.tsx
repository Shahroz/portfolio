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
  width?: number;
  height?: number;
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
  onError,
  width = 100,
  height = 100
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

  // Ensure the src starts with / for public folder access
  const publicSrc = src.startsWith('/') ? src : `/${src}`;
  
  // Use style dimensions if width/height are 0 (for flexible sizing)
  const useFlexibleSizing = width === 0 && height === 0;
  
  return (
    <div ref={imgRef} className={`image-container ${className}`} style={style}>
      {!isInView && (
        <div 
          className="image-placeholder"
          style={{
            width: useFlexibleSizing ? '100%' : `${width}px`,
            height: useFlexibleSizing ? '100%' : `${height}px`,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            fontSize: '12px',
            color: '#666',
            minHeight: useFlexibleSizing ? '200px' : 'auto'
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
            width: useFlexibleSizing ? '100%' : `${width}px`,
            height: useFlexibleSizing ? '100%' : `${height}px`,
            objectFit: 'contain',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            borderRadius: '8px'
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
            width: useFlexibleSizing ? '100%' : `${width}px`,
            height: useFlexibleSizing ? '100%' : `${height}px`,
            backgroundColor: '#f8f8f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '12px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            minHeight: useFlexibleSizing ? '200px' : 'auto'
          }}
        >
          Failed to load
        </div>
      )}
    </div>
  );
};

export default Image;
