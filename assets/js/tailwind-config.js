tailwind.config = {
    theme: {
        extend: {
            colors: {
                'bg': '#3B2F2A',
                'surface': '#4A3E38',
                'text': '#F0EAD6',
                'text-light': '#D4C9A8',
                'heading': '#E07A5F',
                'accent': '#3D87A6',
                'border': '#5B4F48',
                'tag-bg': 'rgba(61, 135, 166, 0.15)',
            },
            fontFamily: {
                mono: ['IBM Plex Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            },
            keyframes: {
                blink: {
                    '50%': { backgroundColor: 'transparent' }
                }
            },
            animation: {
                blink: 'blink 1s steps(1) infinite'
            }
        }
    }
}
