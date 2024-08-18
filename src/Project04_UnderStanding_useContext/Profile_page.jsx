import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile_page = () => {
  const { user } = useContext(UserContext)
  if (!user) return (
    <div>not Found</div>
  )
  return <div>this is a Profile page {user.UserName} {user.Age}</div>
}

export default Profile_page
