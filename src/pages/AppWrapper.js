import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AppWrapper = ({ children }) => {
    function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    return (
        <>
            <ScrollToTop />
            {children}
        </>
    );
};

export { AppWrapper };
