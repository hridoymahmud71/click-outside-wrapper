import { ReactNode } from 'react';

// Define the type for the click outside handler function
type ClickOutsideHandler = (event: MouseEvent) => void;

// Custom hook to handle clicks outside a specified element
export declare function useClickOutside(handler: ClickOutsideHandler): React.MutableRefObject<HTMLDivElement>;

// Props for the ClickOutsideWrapper component
export interface ClickOutsideWrapperProps {
  children: ReactNode;
  onClickOutside: ClickOutsideHandler;
}

// Wrapper component to utilize the useClickOutside hook
export declare const ClickOutsideWrapper: React.FC<ClickOutsideWrapperProps>;
