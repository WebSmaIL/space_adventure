import React from 'react';
import styled from 'styled-components';
import Input from '../../../assets/uikit/Input';
import Button from '../../../assets/uikit/Button';
import { useForm } from 'react-hook-form';
import { validateEmail, validatePassword } from '../../../validate/Validate';
import AuthorizationLink from '../linkContainer/AuthorizationLink';
import { Form } from '../formStyles/formStyles';



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

            <AuthorizationLink linkText={'Войти'} path={'/login'} text={'Есть аккаунт?'} />
        </>
    );
};

export default SignUpForm;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Div = styled.div`
    margin-right: 70px;
`
