import React from 'react';
import './skeletonRank.css'

function SkeletenRank(props) {
    return (
        <div className="skeleton-wrapper-rank ">
            <div className="skeleton-img"></div>
            <div className="skeleton-box">
                <div className="skeleton-title"></div>
                <div className="skeleton-span"></div>
            </div>
            {/* effect */}
            <div className="shimmer-wrapper-rank">
                <div className="shimmer-rank"></div>
            </div>
        </div>
    );
}

export default SkeletenRank;