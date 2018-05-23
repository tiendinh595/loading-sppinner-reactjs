import React, {PureComponent} from 'react';
import './style.css'

export default class LoadingSpinner extends React.Component {
    render() {
        return (
            <div className="loading style-2"><div className="loading-wheel" /></div>
        );
    }
}