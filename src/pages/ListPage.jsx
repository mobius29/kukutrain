import React from 'react';
import styled from 'styled-components';
import StoreTitleContainer from '../components/Container/StoreTitleContainer';
import { palette } from '../constants/palette';
import { getWidthPixel, getHeightPixel } from '../utils/responsive';
import data from '../data/data.json';
import Blank from '../components/Blank';
import { TYPE__LIST } from '../constants';

export default function ListPage({ setSelected, selectedIdx }) {
  return (
    <PageStyled>
      {data.datas.map((store, index) => {
        if (store.type === TYPE__LIST[selectedIdx]) {
          return (
            <ContainerStyled key={store.id}>
              <StoreTitleContainer
                id={store.id}
                title={store.name}
                subTitle={store.group}
                startTime={store.time ? store.time.split('~')[0] : '미정'}
                endTime={store.time ? store.time.split('~')[1] : '미정'}
                setSelected={setSelected}
              />
              {index !== data.datas.length - 1 ? <DividerStyled /> : <Blank height={getHeightPixel(400)} />}
            </ContainerStyled>
          );
        }
      })}
    </PageStyled>
  );
}

const PageStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${palette.none};
  overflow: scroll;
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DividerStyled = styled.div`
  border-top: 1px solid ${palette.light_gray};
  width: ${getWidthPixel(428)};
`;
