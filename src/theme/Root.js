import React, { useEffect, useState } from 'react';
import { PythonProvider } from 'react-py';

export default function Root({ children }) {
  // const packages = {
  //   official: ['asciitree'],
  //   micropip: ['python-cowsay'],
  // };

  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    setIsMobile(
      !!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i) ||
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    );
  }, []);
  return isMobile === undefined ? (
    <>{children}</>
  ) : (
    <PythonProvider
      lazy={isMobile}
      // packages={packages}
      terminateOnCompletion={isMobile}
    >
      {children}
    </PythonProvider>
  );
}
