import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap';
function Game() {

    const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"]
    const [dayOrMonth, setDayOrMonth] = useState("");
    const [selectDayMonth, setSelectDayMonth] = useState("")
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [storeDayMonth, setStoreDayMonth] = useState({
        updateDay: day, updateMonth: month
    });
    const [player, setPlayer] = useState(1);

    var tempMonth = 0;

    const handleDayMonthChange = (e) => {
        setDayOrMonth(e.target.value);
    }

    const handleDayChange = (e) => {
        setDay(e.target.value);
    }

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    }

    const handleDayMonthSubmit = (event) => {
        event.preventDefault();
        if (storeDayMonth.updateDay < day) {
            console.log("31 day", day, "--storeDayMonth.updateDay", storeDayMonth.updateDay)
            setDay(day);
        } else {
            console.log(" 34 day", day, "--storeDayMonth.updateDay", storeDayMonth.updateDay)
        }
        if (tempMonth < month) {
            tempMonth = month;
            console.log("37 month", month, "--tempMonth", tempMonth)
            setMonth(month);
            
        } else {
            console.log("40 month", month, "--tempMonth", tempMonth)
        }
        setSelectDayMonth(dayOrMonth);
        console.log(storeDayMonth.updateDay);
    }


    return (
        <Container>
            <h1>Temprory Setup</h1>
            Day-{storeDayMonth.updateDay}----Month-{tempMonth}----Player-{player}
            <h3> You selected {day} of {allMonth[month - 1]} </h3>

            <Form onSubmit={handleDayMonthSubmit} >
                <Form.Group md="4" controlId="validationFormik01">
                    <Form.Label>Do you want to increase the day or the month? (day or month): </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Do you want to increase the day or the month? (day or month): '
                        name="dayMonth"
                        value={dayOrMonth}
                        onChange={handleDayMonthChange}
                    />

                </Form.Group>
                <Button type='submit'>Click</Button>
            </Form>

            {(selectDayMonth === 'Day') ?
                <Form onSubmit={handleDayMonthSubmit}>
                    <Form.Group md="4" controlId="validationFormik01">
                        {/* <Form.Label>Enter Day</Form.Label> */}
                        <Form.Control
                            type="number"
                            name="selectedDay"
                            placeholder='Enter Day Number'
                            onChange={handleDayChange}
                        />
                    </Form.Group>
                    <Button type='submit'>Click</Button>
                </Form>
                : ""}

            {(selectDayMonth === 'Month') ?
                <Form onSubmit={handleDayMonthSubmit}>
                    <Form.Group md="4" controlId="validationFormik01">
                        {/* <Form.Label>Enter Month</Form.Label> */}
                        <Form.Control
                            type="number"
                            name="selectedMonth"
                            placeholder='Enter Month Number'
                            onChange={handleMonthChange}
                        />
                    </Form.Group>
                    <Button type='submit'>Click</Button>
                </Form>
                : ""}

        </Container>
    )

}

export default Game