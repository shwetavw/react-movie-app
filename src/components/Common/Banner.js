import React from 'react';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config/config'
import '../Style/Banner.css'

const Banner = (props) => {
    const image = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.bannerImage.backdrop_path}`
    return(
        <div className="banner"
            style={{
            background:
                `linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%),
                url('${image}'), #1c1c1c`
            }}>
        <div className="banner-content">
          <div className="banner-text">
            <h1>{props.bannerImage.title}</h1>
            <p>{props.bannerImage.overview}</p>
          </div>
        </div>
      </div>
    )
}

export default Banner
