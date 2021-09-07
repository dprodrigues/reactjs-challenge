import { Container } from "./styles";
import Repository from "../Repository";

const Repositories = ({ repositories }) => {
    if (!repositories || !repositories.length) return <></>;

    return (
        <Container>
            {repositories.map(
                (repository) =>
                    <Repository key={repository.id} {...repository} />
                )
            }
        </Container>
    );
};

export default Repositories;