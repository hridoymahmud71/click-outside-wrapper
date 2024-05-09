import React, { useRef, useEffect, RefObject, ReactNode } from 'react';

// Define the type for the click outside handler function
type ClickOutsideHandler = (event: MouseEvent) => void;

// Define props interface for ClickOutsideWrapper component
interface ClickOutsideWrapperProps {
  onClickOutside: ClickOutsideHandler;
  children: ReactNode;
}

// Custom hook to handle clicks outside a specified element
const useClickOutside = (handler: ClickOutsideHandler): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  // Function to handle clicks outside the element
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node) && typeof handler === 'function') {
      handler(event);
    }
  };

  useEffect(() => {
    // Add event listener for mousedown
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler]); // Include handler in the dependency array

  return ref;
};

// Wrapper component to utilize the useClickOutside hook
const ClickOutsideWrapper: React.FC<ClickOutsideWrapperProps> = ({ children, onClickOutside }) => {
  const wrapperRef = useClickOutside(onClickOutside);
  return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutsideWrapper;
