import React from 'react'
import ButtonStyle from './ButtonStyle'
import "../index.css"
import "./index.css"

const UserProfileCard = 
({
image,
name,
tag,
desc,
infoheadOne,
infoheadTwo,
infoheadThree,
infoValueOne,
infoValueTwo,
infoValueThree,

}) => {
  return (
    <div className='card_Wrapper'>
        <div className='image_wrapper'>
            <img src={image} alt='user' width="" height=""/>
        </div>
        <div className='card_content-wrapper'>
            <h3 className='roboto-regular'>{name}</h3>
            <h5 className='roboto-regular'>{tag}</h5>

            <p className='roboto-light'>{desc}</p>
            <div className='info_flex-Wrapper'>
                <div className='info_item-Wrapper'>
                    <span className='roboto-bold'>{infoValueOne}</span>
                    <span className='roboto-regular'>{infoheadOne}</span>
                </div>
                <div className='info_item-Wrapper'>
                    <span className='roboto-bold'>{infoValueTwo}</span>
                    <span className='roboto-regular'>{infoheadTwo}</span>
                </div>
                <div className='info_item-Wrapper'>
                    <span className='roboto-bold'>{infoValueThree}</span>
                    <span className='roboto-regular'>{infoheadThree}</span>
                </div>
            </div>
            <div className='btn_wrapper'>
                <ButtonStyle primary>Follow Me</ButtonStyle>
                <ButtonStyle outlinedButton>View Detail</ButtonStyle>
            </div>
        </div>
    </div>
  )
}

export default UserProfileCard
