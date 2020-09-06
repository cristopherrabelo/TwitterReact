import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, SeacrhWrapper, SearchInput,
         SearchIcon, Body } from './styles';


const SideBar: React.FC = () => {
  return(
      <Container>
          <SeacrhWrapper>
              <SearchInput placeholder="Buscar no Twitter"></SearchInput>
              <SearchIcon />
          </SeacrhWrapper>

        <StickyBox>
            <Body>
                <List 
                    title="Talvez você conheça"
                    elements={[
                        <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero"/>,
                        <FollowSuggestion name="Luiz " nickname="@luiz"/>,
                        <FollowSuggestion name=" Batanero" nickname="@batanero"/>,
                        
                    ]}
                />
                <List 
                    title="O que está acontecendo"
                    elements={[
                        <News />, <News />, <News />, <News />, <News />, <News />
                    ]}
                />
                               
            </Body>
        </StickyBox>
      </Container>
  );
};

export default SideBar;