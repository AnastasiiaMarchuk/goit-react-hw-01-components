import styled from 'styled-components';

export const Table = styled.table`
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 0;
    width: 450px;
    box-shadow: 0px 0px 10px 2px rgba(7, 52, 82, 1);
    border-radius: 10px;
    border: 15px solid #073452;
    border-top: 5px solid #073452;
    border-collapse: collapse;`
    
export const Thead = styled.thead`
    background-color:#073452;`

export const TableHeadRow = styled.tr`
    font-weight: 700;
    font-size: 20px;
    border: none;
    border-bottom: 5px solid #073452;`

export const TableHeadText = styled.th`
    color: #F0FFFF;
    font-weight: 700;
    padding: 10px;`

export const TableBody = styled.tbody`
    background-color: #F0FFFF;`

export const TableBodyRow = styled.tr`
    padding: 5px;
    border: none;
    border-bottom: 8px solid #073452;`

export const TableBodyText = styled.td`
    color: #073452;
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
`
