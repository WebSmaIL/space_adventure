import React from 'react';
import styled from 'styled-components';


const BlockType = () => {
    return (
        <Container>
            Новость о том, что один маленький мечтатель по имени Элио уже побывал на многих планетах, разлетелась по всему миру. Он разгадывал тайны космоса. Звезды всегда манили его, как всех остальных детей манили игрушки и конфеты. Кто-то собирал конструктор LEGO, в то время, когда Элио изучал ракеты и небо. В одну ночь юный космонавт внезапно пропадает. Группа ученых ищет того, кто поможет найти мальчика и выяснить, что с ним произошло. Это будет долгое и сложное путешествие. Ты готов стать частью его истории?
        </Container>
    );
};

export default BlockType;


const Container = styled.div`
    background-color: #00000021;
    width: 50%;
    font-size: 28px;
    padding: 0.5em;
    border-radius: 1em;
    margin: 0 auto;
    backdrop-filter: blur(30px);
    box-shadow: 0 0 30px #439ec25a;
    margin-top: 30em;
`;