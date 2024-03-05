"use client"

import { useAuthContext } from "../components/Context/AuthContext"
const AdminLayout = ({children, login}) => {
const {user} = useAuthContext()

return(
    <>
    {
        user.logged ? 
        children :
        login
    }
    </>
)
}

export default AdminLayout