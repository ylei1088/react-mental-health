import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../dummy/data';

export default function ViewLantern() {
  const { id } = useParams();
  const lantern = data.filter((lant) => lant.id === parseInt(id))[0];
  // console.log(lantern);
  return (
    <div>
      <h1>Viewing a Lantern: {lantern.id}</h1>
      <p>{lantern.content}</p>
      <p>{JSON.stringify(lantern.replies, null, 2)}</p>
    </div>
  );
}
