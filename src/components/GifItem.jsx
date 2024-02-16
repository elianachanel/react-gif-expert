import Proptypes from 'prop-types'
import React from "react"

export const GifItem =  ({ title, url, id }) => {

    return(
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>

        </div>
    )

}

GifItem.prototype = {
    title: Proptypes.string.isRequired,
    url: Proptypes.string.isRequired,
}