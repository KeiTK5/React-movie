import React from 'react';
import './skeleton.css'
function Skeleton(props) {
    return (
        <div className="skeleton-wrapper col-4 col-md-4 col-sm-6 mg-top">
            <div className="skeleton-content">
                <span className="skeleton-date"></span>
                <div className="skeleton-name"></div>
                {/* effect */}
                <div className="shimmer-wrapper">
                    <div className="shimmer"></div>
                </div>
            </div>
        </div>
    );
}

export default Skeleton;