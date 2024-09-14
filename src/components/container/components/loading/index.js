import React from 'react'

import LottieFunction from '../../../lottie'
import LoadingView from './loading.json'

export default function LoadingScreen(){

    return(
        <LottieFunction
        gif={LoadingView}
        />
    )

}