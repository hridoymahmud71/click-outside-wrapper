import { ReactNode, MouseEvent, MutableRefObject } from 'react';

// Define the type for the click outside handler function
type ClickOutsideHandler = (event: MouseEvent) => void;

// Custom hook to handle clicks outside a specified element
declare function useClickOutside(handler: ClickOutsideHandler): MutableRefObject<HTMLDivElement>;

// Props for the ClickOutsideWrapper component
interface ClickOutsideWrapperProps {
  children?: ReactNode; // Make children prop optional
  onClickOutside: ClickOutsideHandler;
}

// Wrapper component to utilize the useClickOutside hook
declare const ClickOutsideWrapper: React.FC<ClickOutsideWrapperProps>;

export { useClickOutside, ClickOutsideWrapper };
