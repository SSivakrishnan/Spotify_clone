import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Sections from './../components/home/Sections';

function Home() {
  const recentlyPlayed=[
    {
      name:'Mahaan',
      director:'Hariharan , Anuradha'
    },
    {
      name:'Anbe Anbe',
      director:'Hariharan , Anuradha'
    },
    {
      name:'Thiru',
      director:'Hariharan , Anuradha'
    },
    {
      name:'Chennai',
      director:'Hariharan , Anuradha'
    },
    {
      name:'Anbe Anbe',
      director:'Hariharan , Anuradha'
    },
    {
      name:'Anbe Anbe',
      director:'Hariharan , Anuradha'
    },
    {
      name:'Anbe Anbe',
      director:'Hariharan , Anuradha'
    },
  ]
  return (
  <>
    <Sections songList={recentlyPlayed} title="Recently played"/>
    <Sections songList={recentlyPlayed} title="Throwback"/>
    <Sections songList={recentlyPlayed} title="Recommended for today"/>
    <Sections songList={recentlyPlayed} title="Today's biggest hits"/>
  </>
  )
}

export default Home