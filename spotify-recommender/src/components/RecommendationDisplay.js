import React from 'react'

const RecommendationDisplay = ({ recommendations }) => {
    console.log(recommendations)

  return (

    <div>
        <div style={{display:'flex', justifyContent:'center'}}>
            <div>
                {recommendations.tracks.map((recommendation, i) => (
                    <div key={i} style={{display:'flex', flexDirection:'row', justifyContent:'left', paddingTop: 10}}>
                        <img src={recommendation.album.images[0].url} width='75vm' height='75vm' />
                        <div style={{paddingLeft: 10, textAlign: 'left'}}>
                                <div>{recommendation.name}</div>
                                <div>{recommendation.artists[0].name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    </div>
    )
}

export default RecommendationDisplay