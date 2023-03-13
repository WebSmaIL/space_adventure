import styled from 'styled-components';

interface IProps {
    children: JSX.Element;
}

const Wrapper = ({ children }: IProps) => {
    return <Container>{children}</Container>;
};

export default Wrapper;

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
`;
