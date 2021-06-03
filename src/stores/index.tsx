import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
} from "react";
import { useUsers } from "./users";

interface IContext {
  usersStore: ReturnType<typeof useUsers>;
}

const storesCtx = createContext<IContext | null>(null);

export const useStores = () => {
  return useContext(storesCtx);
};

export const StoresProvider = (props: PropsWithChildren<ReactNode>) => {
  const usersStore = useUsers();

  return (
    <storesCtx.Provider value={{ usersStore }}>
      {props.children}
    </storesCtx.Provider>
  );
};
