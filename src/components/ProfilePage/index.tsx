import React from 'react';
import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined> Editar perfil</EditButton>
                <h1>Cristopher Rabelo</h1>
                <h2>@crazarias</h2>

                <p>
                    Developed at 
                    <a href="https://rocktseat.com.br">@Rocketseat</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Três Pontas, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 23 de abril de 1996
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>83</strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />

        </Container>

    );
}
export default ProfilePage;