import React from 'react'
import UserProfileCard from '../Common/UserProfileCard'
import userOne from "../assets/images/userone.jpg"
import "../index.css"

const UserCardsPage = () => {
  return (
    <div className='grid_container'>
      <UserProfileCard
      image={userOne}
      name="Wali Muhammad"
      tag="@wali106"
      desc="I am a Software Developer and a Product Designer"
      infoValueOne="2.3M"
      infoValueTwo="17"
      infoValueThree='45M'
      infoheadOne="Views"
      infoheadTwo="Rank"
      infoheadThree="Download"
      />
    </div>
  )
}

export default UserCardsPage
