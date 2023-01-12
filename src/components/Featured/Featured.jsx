import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./Featured.css";

export const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=india,australia,finland"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
            src="https://theluxurytravelexpert.com/wp-content/uploads/2019/07/header4.jpg"
            alt=""
            className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>India</h1>
                <h2>{data[0]} Properties</h2>

            </div>
            </div>

            <div className='featuredItem'>
            <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/0d/03/85/af/crown-towers-perth.jpg"
            alt=""
            className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Australia</h1>
                <h2>{data[1]} Properties</h2>

            </div>
            </div>

            <div className='featuredItem'>
            <img
            src="https://www.kakslauttanen.fi/assets/2013/09/MAJOITUS_Lasi-iglut_1.jpg"
            alt=""
            className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Finland</h1>
                <h2>{data[2]} Properties</h2>

            </div>
            </div>
      </>
      )
      }

    </div>
  )
}
