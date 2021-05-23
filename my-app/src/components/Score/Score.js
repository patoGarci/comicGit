import React from 'react';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

export default function Score() {
    return (
        <div className="center">
            <Rate allowHalf defaultValue={0.0}/>
            </div>
    )
}
