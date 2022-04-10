import React, { useState } from "react";
import Card from "../UI/Card";
import style from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal"

const AddUser = (props) => {

    const [enteredUserName, setenteredUserName] = useState('')
    const [enteredAge, setenteredAge] = useState('')
    const [error, setError] = useState();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age(non - empty values)'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter the valid age >0'
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge)
        setenteredUserName('');
        setenteredAge('')
    }
    const usernameChangeHandler = (event) => {
        setenteredUserName(event.target.value)
    }
    const AgeChangeHandler = (event) => {
        setenteredAge(event.target.value)
    }
    const errorHandler = () => {
        setError(false);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onRemoveError={errorHandler} />}
            <Card className={style.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input value={enteredUserName} id="username" type="text" onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age ( Years )</label>
                    <input value={enteredAge} id="age" type="text" onChange={AgeChangeHandler} />
                    < Button type="submit">Add User</ Button>
                </form>
            </Card>
        </div>
    )
}
export default AddUser