import { useEffect, useState } from "react";

export const useAsync = (asyncFunction) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    asyncFunction().then((result) => setValue(result));
  }, [asyncFunction]);
  return value;
};
