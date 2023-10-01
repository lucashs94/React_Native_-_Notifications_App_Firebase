import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react'


interface AuthData{
  user: UserProps
  signed: boolean
  loading: boolean
  loadingAuth: boolean
  setUser: Dispatch<SetStateAction<UserProps>>
  AuthSignUp: (name: string, email: string, password: string) => Promise<void>
  AuthSignIn: (email: string, password: string) => Promise<void>
  AuthSignOut: () => void
}

type UserProps = {
  id: string
  name: string
  email: string
  token: string
}

type AuthProviderProps ={
  children: ReactNode
}


export const AuthContext = createContext({} as AuthData)


export function AuthProvider( { children }: AuthProviderProps ){

  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    token: '',
  })
  const [loading, setLoading] = useState(false)
  const [loadingAuth, setLoadingAuth] = useState(false)


  useEffect(() => {
  }, [])


  async function AuthSignUp(name: string, email: string, password: string){}


  async function AuthSignIn(email: string, password: string){}


  async function AuthSignOut(){}


  return(
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        loadingAuth,
        setUser,
        AuthSignUp,
        AuthSignIn,
        AuthSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}


export default function useAuthContext(){
  return(
    useContext(AuthContext)
  )
}