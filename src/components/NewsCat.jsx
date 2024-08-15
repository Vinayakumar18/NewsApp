import React, { useState } from 'react';
import { NewsSearch } from './NewsSearch';

export const NewsCat = (props) => {
    const [category, setCategory] = useState('');

    return (
        <div className="text-center">
            <div className="btn-group btn-group-lg mt-3 mx-auto d-flex flex-wrap justify-content-center" role="group" aria-label="Large button group">
                <button type="button" className="btn btn-outline-primary m-1" onClick={() => setCategory('general')}>General</button>
                <button type="button" className="btn btn-outline-primary m-1" onClick={() => setCategory('entertainment')}>Entertainment</button>
                <button type="button" className="btn btn-outline-primary m-1" onClick={() => setCategory('business')}>Business</button>
                <button type="button" className="btn btn-outline-primary m-1" onClick={() => setCategory('health')}>Health</button>
                <button type="button" className="btn btn-outline-primary m-1" onClick={() => setCategory('science')}>Science</button>
                <button type="button" className="btn btn-outline-primary m-1" onClick={() => setCategory('sports')}>Sports</button>
                <button type="button" className="btn btn-outline-primary m-1" onClick={() => setCategory('technology')}>Technology</button>
            </div>
            <br />
            <NewsSearch Category={category} api={props.api}/>
        </div>
    );
};
