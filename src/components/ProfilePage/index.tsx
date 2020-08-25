import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  EditButton,
  Followage
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>William Roger</h1>
        <h2>@william_roger</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de maio de 1988
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94 </strong>
          </span>
          <span>
            <strong> 675</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );

}

export default ProfilePage;