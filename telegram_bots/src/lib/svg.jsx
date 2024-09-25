export const BurgerMenu = () => (
    <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <clipPath id="clip4_191">
                <rect id="Menu/Closed" rx="-0.500000" width="23.000000" height="23.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
            </clipPath>
        </defs>
        <g clip-path="url(#clip4_191)">
            <path id="Line 3" d="M2 6L22 6" stroke="#4754EB" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
            <path id="Line 4" d="M2 12L16 12" stroke="#4754EB" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
            <path id="Line 5" d="M2 18L16 18" stroke="#4754EB" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
        </g>
    </svg>
);

export const Closer = () => (
    <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs>
            <clipPath id="clip4_201">
                <rect id="Menu/Opened" rx="-0.500000" width="23.000000" height="23.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
            </clipPath>
        </defs>
        <g clip-path="url(#clip4_201)">
            <path id="Line 3 (Stroke)" d="M5.12 18.84C4.73 18.45 4.73 17.82 5.12 17.43L17.84 4.7C18.23 4.31 18.87 4.31 19.26 4.7C19.65 5.09 19.65 5.73 19.26 6.12L6.53 18.84C6.14 19.23 5.51 19.23 5.12 18.84Z" fill="#4754EB" fill-opacity="1.000000" fill-rule="evenodd"/>
            <path id="Line 5 (Stroke)" d="M4.7 4.84C5.09 4.45 5.73 4.45 6.12 4.84L18.84 17.57C19.23 17.96 19.23 18.6 18.84 18.99C18.45 19.38 17.82 19.38 17.43 18.99L4.7 6.26C4.31 5.87 4.31 5.23 4.7 4.84Z" fill="#4754EB" fill-opacity="1.000000" fill-rule="evenodd"/>
        </g>
    </svg>
);

export const Available = () => (
    <svg width="14.008179" height="10.418213" viewBox="0 0 14.0082 10.4182" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs/>
        <path id="Vector 3" d="M1 5L5 9L13 1" stroke="#4754EB" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
    </svg>
);

export const Unavailable = () => (
    <svg width="12.008179" height="12.008057" viewBox="0 0 12.0082 12.0081" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs/>
        <path id="Vector 3" d="M1 11L11 1" stroke="#EB4763" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
        <path id="Vector 4" d="M11 11L1 1" stroke="#EB4763" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
    </svg>
);

export const Star = ({className}) => (
    <svg className={className} width="23.679688" height="22.667480" viewBox="0 0 23.6797 22.6675" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient x1="23.839840" y1="0.370113" x2="-0.160149" y2="24.370111" id="paint_linear_19_539_0" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFFFF" stop-opacity="0.501961"/>
                <stop offset="1.000000" stop-color="#FFFFFF" stop-opacity="0.000000"/>
            </linearGradient>
        </defs>
        <path id="Star 1" d="M11.39 1.27L8.42 7.28C8.35 7.42 8.21 7.53 8.05 7.55L1.42 8.51C1.01 8.57 0.85 9.07 1.15 9.36L5.94 14.04C6.06 14.15 6.11 14.32 6.08 14.48L4.95 21.07C4.88 21.48 5.31 21.79 5.68 21.6L11.6 18.49C11.75 18.41 11.92 18.41 12.07 18.49L17.99 21.6C18.36 21.79 18.79 21.48 18.72 21.07L17.59 14.48C17.56 14.32 17.61 14.15 17.73 14.04L22.52 9.36C22.82 9.07 22.66 8.57 22.24 8.51L15.62 7.55C15.46 7.53 15.32 7.42 15.25 7.28L12.28 1.27C12.1 0.9 11.57 0.9 11.39 1.27Z" fill="#4754EB" fill-opacity="1.000000" fill-rule="evenodd"/>
    </svg>
);

export const Decor = () => (
    <svg width="88.000000" height="88.000000" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	    <defs>
            <filter id="filter_20_99_dd" x="0.000000" y="0.000000" width="88.000000" height="88.000000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImage" stdDeviation="80"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect_backgroundBlur_1"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-2" dy="4"/>
                    <feGaussianBlur stdDeviation="6.66667"/>
                    <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.098039 0 0 0 0 0.098039 0 0 0 0 0.098039 0 0 0 0.024 0"/>
                    <feBlend mode="normal" in2="effect_backgroundBlur_1" result="effect_dropShadow_2"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_2" result="shape"/>
                </filter>
                <clipPath id="clip20_99">
                    <rect id="Component 1" rx="23.500000" width="47.000000" height="47.000000" transform="translate(22.500000 16.500000)" fill="white" fill-opacity="0"/>
                </clipPath>
                <linearGradient x1="69.999992" y1="15.999992" x2="22.000004" y2="63.999992" id="paint_linear_20_99_0" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFFFFF"/>
                    <stop offset="1.000000" stop-color="#FFFFFF" stop-opacity="0.000000"/>
                </linearGradient>
        </defs>
        <g filter="url(#filter_20_99_dd)">
            <rect id="Component 1" rx="23.500000" width="47.000000" height="47.000000" transform="translate(22.500000 16.500000)" fill="#FFFFFF" fill-opacity="0.500000"/>
            <g clip-path="url(#clip20_99)">
                <path id="Vector 3" d="M34 40L58 40" stroke="#1A1A1A" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
                <path id="Vector 4" d="M70 28L46 28" stroke="#1A1A1A" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
            </g>
            <rect id="Component 1" rx="23.500000" width="47.000000" height="47.000000" transform="translate(22.500000 16.500000)" stroke="url(#paint_linear_20_99_0)" stroke-opacity="1.000000" stroke-width="1.000000"/>
        </g>
    </svg>
)

export const Arrow = () => (
    <svg width="16.000000" height="18.003906" viewBox="0 0 16 18.0039" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <rect id="Arrow" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 1.503906)" fill="#FFFFFF" fill-opacity="0"/>
        <g opacity="0.000000">
            <path id="Arrow 2" d="M7 27.41L3.05 31.36C2.65 31.76 2.03 31.76 1.63 31.36C1.24 30.97 1.24 30.34 1.63 29.95L7.29 24.29C7.68 23.9 8.31 23.9 8.7 24.29L14.36 29.95C14.75 30.34 14.75 30.97 14.36 31.36C13.96 31.76 13.34 31.76 12.94 31.36L9 27.41L9 41C9 41.56 8.56 42 8 42C7.44 42 7 41.56 7 41L7 27.41Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/>
        </g>
        <path id="Arrow 1" d="M7 3.41L3.05 7.36C2.65 7.76 2.03 7.76 1.63 7.36C1.24 6.97 1.24 6.34 1.63 5.95L7.29 0.29C7.68 -0.1 8.31 -0.1 8.7 0.29L14.36 5.95C14.75 6.34 14.75 6.97 14.36 7.36C13.96 7.76 13.34 7.76 12.94 7.36L9 3.41L9 17C9 17.56 8.56 18 8 18C7.44 18 7 17.56 7 17L7 3.41Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/>
    </svg>
);