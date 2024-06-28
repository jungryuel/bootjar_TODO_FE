import React, {useState} from 'react';
import "../styles/calendar.css";
// img
import prev from "../assets/images/prev.svg";
import next from "../assets/images/next.svg";

const Calendar = ({
                      isPrevMonth,
                      isNextMonth,
                  }) => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const prevCalendar = () => {
        setCurrentMonth(
            new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() - 1,
                currentMonth.getDate()
            )
        );
    };

    const nextCalendar = () => {
        setCurrentMonth(
            new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + 1,
                currentMonth.getDate()
            )
        );
    };

    const buildCalendarDays = () => {
        const curMonthStartDate = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            1
        ).getDay();
        const curMonthEndDate = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth() + 1,
            0
        );
        const prevMonthEndDate = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            0
        );
        const nextMonthStartDate = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth() + 1,
            1
        );
        const days = Array.from({ length: curMonthStartDate }, (_, i) => {
            return new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() - 1,
                prevMonthEndDate.getDate() - i
            );
        }).reverse();

        days.push(
            ...Array.from(
                { length: curMonthEndDate.getDate() },
                (_, i) =>
                    new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
            )
        );

        const remainingDays = 7 - (days.length % 7);
        if (remainingDays < 7) {
            days.push(
                ...Array.from(
                    { length: remainingDays },
                    (_, i) =>
                        new Date(
                            nextMonthStartDate.getFullYear(),
                            nextMonthStartDate.getMonth(),
                            i + 1
                        )
                )
            );
        }
        return days;
    };

    const buildCalendarTag = (calendarDays) => {
        return calendarDays.map((day, i) => {
            if (day.getMonth() < currentMonth.getMonth()) {
                return (
                    <p key={i}>
                        {isPrevMonth ? day.getDate() : ""}
                    </p>
                );
            }
            if (day.getMonth() > currentMonth.getMonth()) {
                return (
                    <p key={i}>
                        {isNextMonth ? day.getDate() : ""}
                    </p>
                );
            }
            return (
                <p
                    key={i}
                    // 당일이면 today 추가
                    className={`current`}
                >
                    {day.getDate()}
                </p>
            );
        });
    };

    const divideWeek = (calendarTags) => {
        return calendarTags.reduce(
            (acc, day, i) => {
                if (i % 7 === 0) acc.push([day]);
                else acc[acc.length - 1].push(day);
                return acc;
            },
            []
        );
    };

    const calendarDays = buildCalendarDays();
    const calendarTags = buildCalendarTag(calendarDays);
    const calendarRows = divideWeek(calendarTags);

    return (
        <>
            <div className="calendarHeader">
                <p>{currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월</p>
                <div className="chngMonth">
                    <button
                        data-testid="prevMonth"
                        onClick={prevCalendar}
                    >
                        <img src={prev} alt="이전 달"/>
                    </button>
                    <button
                        data-testid="nextMonth"
                        onClick={nextCalendar}
                    >
                        <img src={next} alt="다음 달"/>
                    </button>
                </div>
            </div>
            <ul className="calendarWeek">
                {daysOfWeek.map((day, i) => (
                    <li key={i} data-testid="week" className="week">
                        {day}
                    </li>
                ))}
            </ul>
            <ul className="calendarDays">
                {calendarRows.map((row, i) => (
                    <li key={i} className="day">{row}</li>
                ))}
            </ul>
        </>
    );
};

export default Calendar;