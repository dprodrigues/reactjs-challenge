import { useCallback, useEffect, useState } from "react";
import {
    BackButton,
    Container,
    Description,
    FullName,
    Image,
    Information,
    LeftColumn,
    RightColumn,
    Row,
    Status,
    UserName
} from "./styles";
import Repositories from "./components/Repositories";
import { get } from "../../adapters/github";
import { conditionalRender } from "../../utils/conditionalRender";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
    const [user, setUser] = useState({});
    const [repositories, setRepositories] = useState({});
    const [stars, setStars] = useState(0);
    const [error, setError] = useState(false);
    const [backToHome, setBackToHome] = useState(false);

    const handleBackClick = useCallback(() => {
        setBackToHome(true);
    }, []);

    useEffect(() => {
        const fetchGithubInfos = async () => {
            const id = props?.match?.params?.id;

            if (id) {
                const { data: userData } = await get(`/users/${id}`).catch(() => ({}));

                if (userData && !Object.keys(userData).length) {
                    setError(true);

                    return;
                }

                const { data: repositoriesData } = await get(`/users/${id}/repos`);
                const { data: starsData } = await get(`/users/${id}/starred`);

                setUser(userData);
                setRepositories(repositoriesData);
                setStars(starsData.length);
            }
        }

        fetchGithubInfos();
    }, [props?.match?.params?.id]);

    if (error) return <></>;

    if (backToHome) return <Redirect to="/" />;

    return (
        <Container>
            <LeftColumn>
                <Image src={user?.avatar_url} alt={user?.name} />

                <FullName>{user?.name}</FullName>

                <UserName>{conditionalRender(user?.login, "@")}</UserName>

                <Description>{user?.bio}</Description>

                <Row>
                    <Status>
                        {conditionalRender(user?.followers, "followers", false)}
                    </Status>

                    <Status>
                        {conditionalRender(user?.following, "following", false)}
                    </Status>

                    <Status>
                        {conditionalRender(stars, "stars", false)}
                    </Status>
                </Row>

                <Information>{user?.company}</Information>
                <Information>{user?.location}</Information>
                <Information>{user?.email}</Information>
                <Information>{user?.blog}</Information>
                <Information>{conditionalRender(user?.twitter_username, "@")}</Information>

                <Row>
                    <BackButton onClick={handleBackClick}>Voltar</BackButton>
                </Row>
            </LeftColumn>

            <RightColumn>
                <Repositories repositories={repositories} />
            </RightColumn>
        </Container>
    )
};

export default Profile;