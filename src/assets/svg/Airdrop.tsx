import React from 'react';

const Airdrops: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props} // Spread any other props passed to the component
        >
            <g id="airdrops">
                <g id="Clip path group">
                    <mask
                        id="mask0_3081_8894"
                        mask-type="luminance"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                    >
                        <g id="c">
                            <path
                                d="M0 0.00273323H15.8V15.8027H0V0.00273323Z"
                                fill="white"
                            />
                        </g>
                    </mask>
                    <g mask="url(#mask0_3081_8894)">
                        {/* ... Other paths are omitted for brevity */}
                    </g>
                </g>
                {/* ... Other groups are omitted for brevity */}
            </g>
        </svg>
    );
};

export default Airdrops;
