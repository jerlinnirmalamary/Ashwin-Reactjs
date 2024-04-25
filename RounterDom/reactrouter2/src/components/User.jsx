import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const {id} =useParams();
  return (
    <div>
        <h1>Uder profile page</h1>
        <p>User ID is <b>{id}</b></p>
    </div>
  )
}
