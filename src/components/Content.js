import React from 'react';
import Slider from './Slider';
import SearchCity from './SearchCity';
import { useSelector } from 'react-redux';
import DetailInform from './DetailInform';

export default function Content() {
    let items = useSelector((state) => state.reducer.sliderItems);
    
    return (
        <div className='mainWrapper'>
            <Slider />
            <DetailInform />
            <SearchCity />
        </div>
    )
}