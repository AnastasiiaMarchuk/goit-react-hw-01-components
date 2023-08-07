import styled from 'styled-components';

export const StatsSection = styled.section`
  margin: 30px auto;
  width: 350px;
  text-align: center;
  background-color: #f0ffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(7, 52, 82, 1);
  color: #073452;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  padding-top: 20px;
  font-size: 28px;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #073452;
  color: #f0ffff;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-basis: calc(100% / 5);
`;

export const Label = styled.span`
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
`;

export const Percentage = styled.span`
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
`;
