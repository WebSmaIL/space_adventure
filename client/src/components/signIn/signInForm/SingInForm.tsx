import React from 'react';
import styled from 'styled-components';
import Input from '../../../assets/uikit/Input';
import Button from '../../../assets/uikit/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { validateEmail, validatePassword } from '../../../validate/Validate';
interface IFormInputs {
    Email: string;
    Password: string;
}

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        mode: 'onChange',
    });

    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    registerObj={{
                        ...register('Email', {
                            required: true,
                            validate: validateEmail,
                        }),
                    }}
                    type="email"
                    name="Email"
                    placeholder="Электронная почта"
                    error={errors.Email}
                    errorMessage="Некорректный Email"
                />
                <Input
                    registerObj={{
                        ...register('Password', {
                            required: true,
                            minLength: 8,
                            validate: validatePassword,
                        }),
                    }}
                    type="password"
                    name="Password"
                    placeholder="Пароль"
                    error={errors.Password}
                    errorMessage="Пароль должен содержать не менее восьми знаков, включать буквы разных регистров, цифры и специальные символы"
                />

                <Button text="Войти" />
            </Form>
            <LinkContainer>
                <StyledSpan>Нет аккаунта?</StyledSpan>
                <StyledLink to="/register">Регистрация</StyledLink>
            </LinkContainer>
        </>
    );
};

export default SignInForm;

const Form = styled.form`
    width: 100%;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LinkContainer = styled.div`
    display: block;
    margin-top: 50px;

    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
`;

const StyledSpan = styled.span`
    color: rgba(255, 255, 255, 0.6);
`;

const StyledLink = styled(Link)`
    margin-left: 20px;
    color: rgba(142, 131, 255, 1);
`;
