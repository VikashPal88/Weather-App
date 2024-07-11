import React, { useEffect, useState } from 'react'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Date_time() {
    const [dateTime, setDateTime] = useState({
        dt: "",
        day: "",
        year: "",
        month: "",
        hour: "",
        minute: "",
    })

    useEffect(() => {
        const timer = setInterval(() => {
            let date = new Date();
            let dt = date.getDate()
            let day = days[date.getDay()]
            let year = date.getFullYear()
            let month = months[date.getMonth()]
            let hour = date.getHours()
            let minute = date.getMinutes()



            setDateTime({
                date: dt,
                day: day,
                year: year,
                month: month,
                hour: hour,
                minute: minute,
            })


        }, 1000)

        return () => clearInterval(timer)
    }, [])


    return (
        <>
            <p className='font-semibold'>{`${dateTime.month} ${dateTime.date} ${dateTime.year}`}</p>
            <p className='font-semibold'>{`${dateTime.day} ${dateTime.hour < 0 ? `0${dateTime.hour}` : `${dateTime.hour}`}:${dateTime.minute}`}</p>
        </>
    )
}

export default Date_time
