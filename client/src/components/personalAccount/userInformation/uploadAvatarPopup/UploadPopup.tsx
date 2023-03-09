import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import AvatarEditor from 'react-avatar-editor';
import { plus_icon, minus_icon } from '../../../../assets/img/svgIcons';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getUserInfo } from '../../../../redux/ducks/userInfo';
import { uploadAvatar } from '../../../../redux/ducks/userInfo/asyncThunk';

interface IProps {
    uploadedFile: File | null;
}

const UploadPopup = ({ uploadedFile }: IProps) => {
    const [src, setSrc] = useState<string>('');
    const editor = useRef<AvatarEditor | null>(null);
    const userInfo = useAppSelector(getUserInfo);
    const dispatch = useAppDispatch();

    const [editorParams, setEditorParams] = useState({
        width: 400,
        height: 400,
        borderRadius: 200,
        rotate: 0,
        scale: 1,
    });

    if (uploadedFile) {
        const reader = new FileReader();
        reader.onload = function () {
            setSrc(String(reader.result));
        };
        reader.readAsDataURL(uploadedFile);
    }

    const changeParams = (action: string, param: string) => {
        switch (param) {
            case 'scale':
                if (action === 'plus' && editorParams.scale < 10) {
                    setEditorParams({
                        ...editorParams,
                        scale: Number((editorParams.scale + 0.1).toFixed(1)),
                    });
                } else if (action === 'minus' && editorParams.scale > 0) {
                    setEditorParams({
                        ...editorParams,
                        scale: Number((editorParams.scale - 0.1).toFixed(1)),
                    });
                }
                break;

            case 'rotate':
                if (action === 'plus' && editorParams.rotate < 180) {
                    setEditorParams({
                        ...editorParams,
                        rotate: editorParams.rotate + 1,
                    });
                } else if (action === 'minus' && editorParams.scale > -180) {
                    setEditorParams({
                        ...editorParams,
                        rotate: editorParams.rotate - 1,
                    });
                }
                break;

            default:
                break;
        }
    };

    const handleSaveImage = () => {
        if (editor.current) {
            const img = editor.current.getImageScaledToCanvas().toDataURL();
            dispatch(uploadAvatar({id: userInfo.userInfo.id, img: img}));
        }
    };

    return (
        <UploadContainer>
            <Content>
                <SettingsWrapper>
                    <Setting>
                        <SettingTitle>
                            Размер: {editorParams.scale}
                        </SettingTitle>
                        <ButtonContainer>
                            <PlusButton
                                onClick={() => changeParams('plus', 'scale')}
                            />
                            <MinusButton
                                onClick={() => changeParams('minus', 'scale')}
                            />
                        </ButtonContainer>
                    </Setting>
                </SettingsWrapper>
                <ImageWrapper>
                    <UploadedImage
                        ref={editor}
                        image={src}
                        width={editorParams.width}
                        height={editorParams.height}
                        borderRadius={editorParams.borderRadius}
                        rotate={editorParams.rotate}
                        scale={editorParams.scale}
                    />
                </ImageWrapper>
                <SettingsWrapper>
                    <Setting>
                        <SettingTitle>
                            Поворот: {editorParams.rotate}
                        </SettingTitle>
                        <ButtonContainer>
                            <PlusButton
                                onClick={() => changeParams('plus', 'rotate')}
                            />
                            <MinusButton
                                onClick={() => changeParams('minus', 'rotate')}
                            />
                        </ButtonContainer>
                    </Setting>
                </SettingsWrapper>
            </Content>
            <button onClick={handleSaveImage}>save image</button>
        </UploadContainer>
    );
};

export default UploadPopup;

const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 40px;

    background: #00000099;
    backdrop-filter: blur(10px);

    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SettingsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Setting = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 150px;
    border-radius: 20px;
    padding: 30px;

    background: #0000009b;

    &:first-child {
        margin-bottom: 40px;
    }
`;

const SettingTitle = styled.span`
    font-family: sans-serif;
    font-size: 20px;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
`;

const PlusButton = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    width: 50px;
    height: 50px;

    background-image: url(${plus_icon});
    background-size: contain;
    background-repeat: no-repeat;

    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;
const MinusButton = styled(PlusButton)`
    margin-left: 40px;

    background-image: url(${minus_icon});
    background-position: center;
`;

const ImageWrapper = styled.div`
    width: 500px;
    height: 700px;
    display: flex;
    align-items: center;
`;

const UploadedImage = styled(AvatarEditor)`
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
`;
