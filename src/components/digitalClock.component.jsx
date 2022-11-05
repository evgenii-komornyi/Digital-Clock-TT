import React, { useEffect, useState } from "react";

export const DigitalClock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const refreshClockEverySecond = () => {
        setCurrentDate(new Date());
    };

    useEffect(() => {
        const intervalId = setInterval(refreshClockEverySecond, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <h1>{currentDate.toLocaleTimeString()}</h1>;
};
