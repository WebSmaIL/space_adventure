import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../../assets/uikit/Input';
import Button from '../../../assets/uikit/Button';
import { useForm } from 'react-hook-form';
import { validateEmail, validatePassword } from '../../../validate/Validate';
import AuthorizationLink from '../linkContainer/AuthorizationLink';
import { Form } from '../formStyles/formStyles';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchRegister } from '../../../redux/ducks/userInfo/asyncThunk';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../../redux/ducks/userInfo';
import ErrorMessage from '../errorMessage/ErrorMessage';

interface IFormInputs {
    UserName: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
}

interface IProps {
    isRegister: boolean;
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpForm = ({ isRegister, setIsRegister }: IProps) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(getUserInfo);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInputs>({
        mode: 'onChange',
    });

    const onSubmit = (data: IFormInputs) => {
        dispatch(
            fetchRegister({
                email: data.Email,
                login: data.UserName,
                password: data.Password,
            })
        );
    };

    const navigate = useNavigate();
    useEffect(() => {
        user.userInfo.isAuthorize && navigate('/');
    }, [navigate, user.userInfo.isAuthorize]);

    const confirmPassword = (text: string) => watch('Password') === text;

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FlexContainer>
                    <Div>
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
                            placeholder="?????? ????????????????????????"
                            error={errors.UserName}
                            errorMessage="??????-???? ???????????????? ???????????? ???????? ???? ???????????? 3 ?? ???? ???????????? 10"
                        />
                        <Input
                            registerObj={{
                                ...register('Email', {
                                    required: true,
                                    validate: validateEmail,
                                }),
                            }}
                            type="email"
                            name="Email"
                            placeholder="?????????????????????? ??????????"
                            error={errors.Email}
                            errorMessage="???????????????????????? Email"
                        />
                    </Div>
                    <div>
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
                            placeholder="????????????"
                            error={errors.Password}
                            errorMessage="???????????? ???????????? ?????????????????? ???? ?????????? ???????????? ????????????, ???????????????? ?????????? ???????????? ??????????????????, ?????????? ?? ?????????????????????? ??????????????"
                        />
                        <Input
                            registerObj={{
                                ...register('ConfirmPassword', {
                                    required: true,
                                    minLength: 8,
                                    validate: confirmPassword,
                                }),
                            }}
                            type="password"
                            name="ConfirmPassword"
                            placeholder="?????????????????????? ????????????"
                            error={errors.ConfirmPassword}
                            errorMessage="???????????? ??????????????????????"
                        />
                    </div>
                </FlexContainer>
                <Button text="??????????????????????" />
            </Form>

            <AuthorizationLink
                linkText={'??????????'}
                setIsRegister={setIsRegister}
                isRegister={isRegister}
                text={'???????? ???????????????'}
            />
            {user.errorMessage && <ErrorMessage errorMessage={user.errorMessage} />}
        </>
    );
};

export default SignUpForm;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Div = styled.div`
    margin-right: 70px;
`;
