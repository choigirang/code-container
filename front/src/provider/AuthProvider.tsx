import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";

type AuthContextDefaultValue = {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextDefaultValue>({
  user: false,
  setUser: () => {},
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
