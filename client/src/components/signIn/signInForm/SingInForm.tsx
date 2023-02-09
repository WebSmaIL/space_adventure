import React from 'react';
import Input from '../../../assets/uikit/Input';
import Button from '../../../assets/uikit/Button';
import { useForm } from 'react-hook-form';
import { validateEmail, validatePassword } from '../../../validate/Validate';
import AuthorizationLink from '../linkContainer/AuthorizationLink';
import { Form } from '../formStyles/formStyles';

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
            <AuthorizationLink
                linkText={'Регистрация'}
                path={'/register'}
                text={'Нет аккаунта?'}
            />
        </>
    );
};

export default SignInForm;
