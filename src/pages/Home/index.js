import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Form, Input, SubmitButton, Title } from "./styles";

const Home = () => {
    const [value, setValue] = useState("");
    const [canRedirect, setCanRedirect] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value.replace(/[^a-zA-Z0-9-]/g, ""));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === "") return;

        setCanRedirect(true);
    };

    if (canRedirect) return <Redirect to={`user/${value}`} />;

    return (
        <Container>
            <Title>Search Devs</Title>

            <Form onSubmit={handleSubmit}>
                <Input value={value} onChange={handleChange}/>

                <SubmitButton type="submit">Enviar</SubmitButton>
            </Form>
        </Container>
    )
};

export default Home;
