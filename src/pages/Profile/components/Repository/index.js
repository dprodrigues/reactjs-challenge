import { useEffect, useState } from "react";
import { Name, Description, Status } from "./styles";
import { Container } from "../Repositories/styles";
import { Row } from "../../styles";

const ONE_DAY = 1000 * 60 * 60 * 24;
const NOW = new Date();

function getDaysAgo(date) {
    const dateCopy = new Date(date);
    const millisecondsDifference = NOW.getTime() - dateCopy.getTime();

    return Math.round(millisecondsDifference / ONE_DAY);
}

const Repository = ({ name, description, stargazers_count, updated_at }) => {
    const [daysAgo, setDaysAgo] = useState("0");

    useEffect(() => {
        const newDaysAgo = getDaysAgo(new Date(updated_at));

        setDaysAgo(newDaysAgo);
    }, [updated_at]);

    return (
        <Container>
            <Name>{name}</Name>

            <Description>{description}</Description>

            <Row>
                <Status>{stargazers_count} stars</Status>

                <Status>updated {daysAgo} days ago</Status>
            </Row>
        </Container>
    )
};

export default Repository;
