import React, { createContext, useState } from 'react'

export const ContextApi = createContext()

export default function Context(props) {
    const [chat , setChat] = useState(false)
    const [menu  ,setMenu] = useState(false)
    const [dark , setDark] = useState(false)
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [pass , setPass] = useState()
    const [cpass , setCpass] = useState()
  return (
    <>
        <ContextApi.Provider value={{
            chat ,
            setChat,
            menu ,
            setMenu,
            dark,
            setDark,
            name , 
            setName,
            email ,
            setEmail,
            pass , 
            setPass,
            cpass , 
            setCpass,

        }}  >
            {props.children}
        </ContextApi.Provider>
    </>
  )
}
