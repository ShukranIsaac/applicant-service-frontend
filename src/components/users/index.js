import React, { useState, useEffect } from 'react'
import { useParams, useMatch } from 'react-router-dom'

import UserManager from '../../services/users'

export const UserList = ({ ...props }) => {
    const [loading, setLoading] = useState(false)
    // let match = useMatch()
    // const params = useParams()
    // console.log(params?.uid)
    // console.log(match)

    useEffect(()=> {
        UserManager.getUsers().then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (<div>
        Users List
    </div>)
}

export default UserList