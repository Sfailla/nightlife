import React from 'react'
import PropTypes from 'prop-types'

const icons = {
    add: 'M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1 s1, 0.5, 1, 1v6h6C15.5, 7, 16, 7.5, 16, 8z',
    completed: 'M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3 C10.1,14.3,9.9,14.4,9.7,14.4z',
    settings: 'M12 15.516c1.922 0 3.516-1.594 3.516-3.516s-1.594-3.516-3.516-3.516-3.516 1.594-3.516 3.516 1.594 3.516 3.516 3.516zM19.453 12.984l2.109 1.641c0.188 0.141 0.234 0.422 0.094 0.656l-2.016 3.469c-0.141 0.234-0.375 0.281-0.609 0.188l-2.484-0.984c-0.516 0.375-1.078 0.75-1.688 0.984l-0.375 2.625c-0.047 0.234-0.234 0.422-0.469 0.422h-4.031c-0.234 0-0.422-0.188-0.469-0.422l-0.375-2.625c-0.609-0.234-1.172-0.563-1.688-0.984l-2.484 0.984c-0.234 0.094-0.469 0.047-0.609-0.188l-2.016-3.469c-0.141-0.234-0.094-0.516 0.094-0.656l2.109-1.641c-0.047-0.328-0.047-0.656-0.047-0.984s0-0.656 0.047-0.984l-2.109-1.641c-0.188-0.141-0.234-0.422-0.094-0.656l2.016-3.469c0.141-0.234 0.375-0.281 0.609-0.188l2.484 0.984c0.516-0.375 1.078-0.75 1.688-0.984l0.375-2.625c0.047-0.234 0.234-0.422 0.469-0.422h4.031c0.234 0 0.422 0.188 0.469 0.422l0.375 2.625c0.609 0.234 1.172 0.563 1.688 0.984l2.484-0.984c0.234-0.094 0.469-0.047 0.609 0.188l2.016 3.469c0.141 0.234 0.094 0.516-0.094 0.656l-2.109 1.641c0.047 0.328 0.047 0.656 0.047 0.984s0 0.656-0.047 0.984z',
    logout: 'M16.5 13.75v-2.75h-6.875v-2.75h6.875v-2.75l4.125 4.125zM15.125 12.375v5.5h-6.875v4.125l-8.25-4.125v-17.875h15.125v6.875h-1.375v-5.5h-11l5.5 2.75v12.375h5.5v-4.125z',
    spinner: 'M6 16c0-0.381 0.022-0.756 0.063-1.126l-5.781-1.878c-0.185 0.973-0.283 1.977-0.283 3.004 0 4.601 1.943 8.748 5.052 11.666l3.571-4.916c-1.629-1.779-2.623-4.149-2.623-6.751zM26 16c0 2.602-0.994 4.972-2.623 6.751l3.571 4.916c3.109-2.919 5.052-7.065 5.052-11.666 0-1.027-0.098-2.031-0.283-3.004l-5.781 1.878c0.041 0.37 0.063 0.745 0.063 1.126zM18 6.2c2.873 0.583 5.298 2.398 6.702 4.87l5.781-1.878c-2.287-4.857-6.945-8.377-12.482-9.067v6.076zM7.298 11.070c1.403-2.471 3.829-4.286 6.702-4.87v-6.076c-5.537 0.691-10.195 4.21-12.482 9.067l5.78 1.878zM20.142 25.104c-1.262 0.575-2.665 0.896-4.142 0.896s-2.88-0.321-4.142-0.896l-3.572 4.916c2.288 1.261 4.917 1.98 7.714 1.98s5.426-0.719 7.714-1.98l-3.572-4.916z',
    search: 'M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281c-1.125 0.984-2.625 1.547-4.219 1.547-3.609 0-6.516-2.859-6.516-6.469s2.906-6.516 6.516-6.516 6.469 2.906 6.469 6.516c0 1.594-0.563 3.094-1.547 4.219l0.281 0.281h0.797z',
    user: 'M31.978 38.258c0-4.492-4.374-6.778-8.634-8.614-4.246-1.828-5.602-3.368-5.602-6.668 0-1.978 1.296-1.334 1.864-4.962 0.24-1.504 1.384-0.024 1.604-3.458 0-1.368-0.626-1.708-0.626-1.708s0.318-2.026 0.442-3.586c0.128-1.634-0.796-5.12-4.602-6.19-0.664-0.682-1.114-1.764 0.934-2.848-4.48-0.208-5.522 2.136-7.908 3.86-2.030 1.512-2.578 3.906-2.48 5.18 0.13 1.56 0.446 3.586 0.446 3.586s-0.628 0.34-0.628 1.708c0.22 3.436 1.368 1.954 1.606 3.458 0.568 3.628 1.866 2.984 1.866 4.962 0 3.3-0.424 4.42-4.672 6.248-4.262 1.834-5.588 4.774-5.566 9.032 0.006 1.274-0.022 1.742-0.022 1.742h32c0 0-0.022-0.468-0.022-1.742zM37.056 26.73c-2.27-0.914-3.21-2.004-3.21-4.132 0-1.282 0.836-0.864 1.204-3.206 0.154-0.968 0.894-0.016 1.036-2.23 0-0.882-0.404-1.102-0.404-1.102s0.206-1.312 0.286-2.318c0.1-1.254-0.728-4.494-4.536-4.494-3.806 0-4.636 3.24-4.538 4.494 0.084 1.004 0.288 2.318 0.288 2.318s-0.404 0.218-0.404 1.102c0.142 2.214 0.882 1.262 1.036 2.23 0.368 2.344 1.204 1.926 1.204 3.206 0 2.128-0.876 3.124-3.618 4.304-0.138 0.058-0.24 0.136-0.366 0.204 3.28 1.424 8.452 3.882 9.676 8.894h5.29c0 0 0-3.812 0-4.636 0-2-0.546-3.668-2.944-4.634z',
    trash: 'M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3 c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9 C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7 c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2 c0.6,0,1.1,0.5,1.1,1.1V7z M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8 C14.6, 17.7, 14.3, 18, 14, 18z',
    'up-arrow': 'M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10',
}

export const Icon = ({ icon, addStyles, size, view, circle }) => (
    <svg style={{ ...addStyles }} width={size} height={size} viewBox={`0 0 ${view} ${view}`}>
        <path d={icons[icon]}></path>
    </svg>
)

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
}
