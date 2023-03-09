import React, { useRef } from 'react';
import styled from 'styled-components';
import { edit_icon } from '../../../../../assets/img/svgIcons';
import avatar_icon from '../../../../../assets/img/pngIcons/profile.png';
import { useAppSelector } from '../../../../../hooks';
import { getUserInfo } from '../../../../../redux/ducks/userInfo';

interface IProps {
    setUploadedFile: React.Dispatch<React.SetStateAction<File | null>>
}

const Avatar = ({setUploadedFile}: IProps) => {
    const filePicker = useRef<HTMLInputElement>(null);
    const user = useAppSelector(getUserInfo)

    return (
        <AvatarContainer>
            <UserAvatar src={user.userInfo.avatar_src ? `http://localhost:8000/${user.userInfo.avatar_src}` : avatar_icon} />
            <Button onClick={() => filePicker.current?.click()}>
                <img src={edit_icon} alt="" />
            </Button>
            <SelectFileInput
                ref={filePicker}
                type="file"
                accept="image/*,.png,.jpg,.jpeg,"
                onChange={(e) => {
                    if (e.target.files) {
                        setUploadedFile(e.target.files[0])
                    }
                }}
            />
        </AvatarContainer>
    );
};

export default Avatar;

const AvatarContainer = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
`;

const SelectFileInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    line-height: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
`;

const Button = styled.button`
    width: 100%;
    height: 100%;
    opacity: 0;

    background: #2b2b2ba4;
    border: none;
    border-radius: 50%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    cursor: pointer;

    transition: all 0.3s ease;

    & img {
        width: 50px;
        height: 50px;
        margin: 0 auto;
    }

    &:hover {
        opacity: 1;
        backdrop-filter: blur(5px);
    }
`;

const UserAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
`;
