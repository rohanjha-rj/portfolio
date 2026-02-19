export const triggerHaptic = (style = 'light') => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
        switch (style) {
            case 'light':
                window.navigator.vibrate(10);
                break;
            case 'medium':
                window.navigator.vibrate(20);
                break;
            case 'heavy':
                window.navigator.vibrate(50);
                break;
            case 'success':
                window.navigator.vibrate([10, 30, 10]);
                break;
            case 'error':
                window.navigator.vibrate([50, 100, 50]);
                break;
            default:
                window.navigator.vibrate(10);
        }
    }
};
