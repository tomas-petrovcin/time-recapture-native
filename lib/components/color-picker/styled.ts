import { styled } from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)}px;
`;

export const ColorSample = styled.View<{ color: string; selected: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: ${({ theme }) => theme.radius.medium}px;
  background: ${({ color }) => color};
  ${({ selected }) => selected && 'border: 2px solid #fff;'}
`;
