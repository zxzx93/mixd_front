import { useState, useCallback } from "react";

export default function useInputs(initialValue = null) {
  const [value, setValue] = useState(initialValue);
  // change
  const handler = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
}
