import styled from 'styled-components';
import Background from '../../../assets/uikit/Background';
import { background_solar_system } from '../../../assets/img/backgrounds';

interface IProps {
    children: JSX.Element;
}

const Wrapper = ({ children }: IProps) => {
    return (
        <>
            <Container>{children}</Container>
            {/* <Background alt="" src={background_solar_system} /> */}
        </>
    );
};

export default Wrapper;

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
`;
