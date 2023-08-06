import styled from 'styled-components';

export const ProfileContainer = styled.div`
    margin: 30px auto;
    padding: 20px 0 0 0;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #F0FFFF;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 2px rgba(7, 52, 82, 1);
`;

export const Description = styled.div`
    margin-bottom: 10px;
    color: #073452;
`;

export const AvatarImg = styled.img`
    margin: 0 auto 15px;
    width: 200px;
    display: block;
    border-radius: 50%;
`;

export const Name = styled.p`
    margin-bottom: 6px;
    font-size: 32px;
    font-weight: 700;
`;

export const Tag = styled.p`
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 18px;
`;

export const Location = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

export const StatsList = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    color: #F0FFFF;
    background-color: #073452;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 33.333%;
    gap: 7px;
    padding: 6px;
    margin-bottom: 6px;
`;

export const Label = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

export const Quantity = styled.span`
    font-weight: 700;
    font-size: 18px;
`;
