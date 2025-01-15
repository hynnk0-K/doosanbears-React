import { useState, useEffect } from 'react';

function useElementHeight(ref) {
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setElementHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  return elementHeight;
}

export default useElementHeight;