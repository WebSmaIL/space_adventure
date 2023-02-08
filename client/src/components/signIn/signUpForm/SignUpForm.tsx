import React, {useState} from 'react';
import styled from 'styled-components';
import Input from '../../../assets/uikit/Input';
import Button from '../../../assets/uikit/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { validateEmail, validatePassword } from '../../../validate/Validate';


interface IFormInputs {
    UserName: string
    Email: string
    Password: string
    ConfirmPassword: string
}

const SignUpForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>({
        mode: 'onChange',
    });
    
    const onSubmit = (data: any) => console.log(data);

    const confirmPassword = (text: string) => watch("Password") === text;
    
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FlexContainer>
                    <Div>
                        <Input
                            registerObj={{ ...register('UserName', { required: true, minLength: 3, maxLength: 10, }) }}
                            type="text"
                            name="UserName"
                            placeholder="Имя пользователя"
                            error={errors.UserName}
                            errorMessage="Кол-во символов должно быть не меньше 3 и не больше 10"
                        />
                        <Input
                            registerObj={{ ...register('Email', { required: true, validate: validateEmail }) }}
                            type="email"
                            name="Email"
                            placeholder="Электронная почта"
                            error={errors.Email}
                            errorMessage="Некорректный Email"
                        />
                    </Div>
                    <div>
                        <Input
                            registerObj={{ ...register('Password', { required: true, minLength: 8, validate: validatePassword  }) }}
                            type="password"
                            name="Password"
                            placeholder="Пароль"
                            error={errors.Password}
                            errorMessage="Пароль должен содержать не менее восьми знаков, включать буквы разных регистров, цифры и специальные символы"
                        />
                        <Input
                            registerObj={{ ...register('ConfirmPassword', { required: true, minLength: 8, validate: confirmPassword }) }}
                            type="password"
                            name="ConfirmPassword"
                            placeholder="Подтвердите пароль"
                            error={errors.ConfirmPassword}
                            errorMessage="Пароль несовпадает"
                        />
                    </div>
                </FlexContainer>
                <Button text="Регистрация" />
            </Form>
            <LinkContainer>
                <StyledSpan>Есть аккаунт?</StyledSpan>
                <StyledLink to="/login">Войти</StyledLink>
            </LinkContainer>
        </>
    );
};

export default SignUpForm;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

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

const Div = styled.div`
    margin-right: 70px;
`
