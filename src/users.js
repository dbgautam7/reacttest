import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/slice/userSlice';

const Users = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
 fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    dispatch(setUser(data));
  });
  } ,[])


  const user=useSelector(state=>state.user)
  console.log(user)

  return (
    <div>
        {user.username}<br></br>{user.email}
    </div>
  )
}

export default Users