
#  Click Outside Wrapper  

A custom React hook and wrapper component to handle clicks outside a specified element.  

##  Installation  

You can install the Click Outside Wrapper package via npm:  

```bash

npm  install  click-outside-wrapper

````

  

## Usage  

**1. Using the Custom Hook (useClickOutside)**  

```
// using the hook

import React, { useRef } from 'react';
import useClickOutside from 'click-outside-wrapper';  

const MyComponent: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);  

    // Define click outside handler

    const handleClickOutside = () => {
        console.log('Clicked outside');
    };    

    // Attach click outside handler to the ref

    useClickOutside(handleClickOutside);  

    return (
        <div  ref={wrapperRef}>
        Click anywhere outside this box
        </div>
    );

};

```


  

**2. Using the Wrapper Component (ClickOutsideWrapper)**

```
// using the wrapper
import React from 'react';
import ClickOutsideWrapper from 'click-outside-wrapper';
  

const MyComponent: React.FC = () => {

    // Define click outside handler

    const handleClickOutside = () => {
        console.log('Clicked outside');    
    };
  

    return (
        <ClickOutsideWrapper  onClickOutside={handleClickOutside}>
            <div>
                Click anywhere outside this box
            </div>
        </ClickOutsideWrapper>
    );

};

```
  

## Props

**useClickOutside**

handler: A function to be called when a click occurs outside the specified element.

**ClickOutsideWrapper**

onClickOutside: A function to be called when a click occurs outside the wrapped element.

**License**

This project is licensed under the MIT License - see the LICENSE file for details.

## Requirments

**React 18.3.1 or later ( your version of React must support hooks)**