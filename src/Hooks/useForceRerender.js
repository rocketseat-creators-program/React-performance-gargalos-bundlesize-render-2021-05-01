import React from "react";
export const useForceRerender = () => React.useReducer((x) => x + 1, 0)[1];
