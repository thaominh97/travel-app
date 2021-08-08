import { memo } from "react";
import Container from '../../components/Container/Container'

const Home = () => {
    return (
        <div>
            <Container/>
        </div>
        );
}

export const HomeScreen = memo(Home)

