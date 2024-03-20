import { useState } from "react"

export default function CreatePage(){

    const[message, setMessage] = useState()

    function createForm(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
        })
        event.target.reset()
        setMessage('Форма отправлена')
    }

    return(
        <section className="add" onSubmit={createForm}>
            <h1>Создание заказа</h1>
            <form className="addForm" action="" method="post">
                <label htmlFor="title">title</label>
                <input type="text" name="title"/><br></br>
                <label htmlFor="title">body</label>
                <textarea name="body" id="" cols="25" rows="5"></textarea><br></br>
                <button type="submit">Создать</button><br></br>
                <p>{message}</p>
            </form>
        </section>
    )
}