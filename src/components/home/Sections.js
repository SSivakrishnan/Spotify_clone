import React from 'react'
import Play from '../../assets/icons/Play'
import Vtk from '../../assets/images/vtk.jpg'
import Chennai from '../../assets/images/chennai.jpg'
import Mahaan from '../../assets/images/mahaan.jpg'
import Thiru from '../../assets/images/thiru.jpg'
function Sections({songList,title}) {
    console.log('lst',songList)
    const randomImg=[Vtk,Chennai,Mahaan,Thiru]
  return (
    <div className='section_playlist'>
        <h2>{title??''}</h2>
       
        <div className='playlist_container'>
        {
            songList.slice(0,6).map((song)=>(
                <div className='playlist'>
                    <img src={randomImg[Math.round(Math.random()*3)]}/>
                    <h5>{song.name}</h5>
                    <p> {song.director}</p>
                    <div className='play_btn'>
                        <Play/>
                    </div>
                </div>
            ))
        }
           
          
        </div>
    </div>
  )
}

export default Sections