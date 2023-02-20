import React, { useEffect } from 'react';
import Input from '../../../assets/uikit/Input';
import Button from '../../../assets/uikit/Button';
import { useForm } from 'react-hook-form';
import { validatePassword } from '../../../validate/Validate';
import AuthorizationLink from '../linkContainer/AuthorizationLink';
import { Form } from '../formStyles/formStyles';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchLogin } from '../../../redux/ducks/userInfo/asyncThunk';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { getUserInfo } from '../../../redux/ducks/userInfo';
import { useNavigate } from 'react-router-dom';

interface IFormInputs {
    UserName: string;
    Password: string;
}

interface IProps {
    isRegister: boolean;
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInForm = ({ setIsRegister, isRegister }: IProps) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(getUserInfo);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        mode: 'onChange',
    });

    const onSubmit = (data: any) =>
        dispatch(fetchLogin({ login: data.UserName, password: data.Password }));

    const navigate = useNavigate();
    useEffect(() => {
        user.userInfo.isAuthorize && navigate('/');
    }, [navigate, user.userInfo.isAuthorize]);

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    registerObj={{
                        ...register('UserName', {
                            required: true,
                            minLength: 3,
                            maxLength: 10,
                        }),
                    }}
                    type="text"
                    name="UserName"
                    placeholder="Имя пользователя"
                    error={errors.UserName}
                    errorMessage="Кол-во символов должно быть не меньше 3 и не больше 10"
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
                isRegister={isRegister}
                setIsRegister={setIsRegister}
                linkText={'Регистрация'}
                text={'Нет аккаунта?'}
            />
            {user.errorMessage && (
                <ErrorMessage errorMessage={user.errorMessage} />
            )}
        </>
    );
};

export default SignInForm;
