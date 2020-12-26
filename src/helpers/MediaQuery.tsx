import React from "react";

export function useMediaQuery(query) {
  const [matches, setMatch] = React.useState(false);

  React.useEffect(
    function efeito() {
      const mediaQuery = window.matchMedia(query);
      setMatch(mediaQuery.matches);

      function mediaQueryListener(event) {
        setMatch(event.matches);
      }

      mediaQuery.addListener(mediaQueryListener);

      return function limpador() {
        mediaQuery.removeListener(mediaQueryListener);
      };
    },
    [query]
  );

  return matches;
}
