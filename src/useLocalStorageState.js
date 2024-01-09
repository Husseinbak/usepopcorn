import { useState, useEffect } from "react";

// export function useLocalStorage() {
//   const [watched, setWatched] = useState(function () {
//     const storedValue = localStorage.getItem("watched");
//     return JSON.parse(storedValue);
//   });

//   useEffect(
//     function () {
//       localStorage.setItem("watched", JSON.stringify(watched));
//     },
//     [watched]
//   );

//   return { watched, setWatched };
// }

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
