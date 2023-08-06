import { Table, TableBody, TableBodyRow, TableBodyText, TableHeadRow, TableHeadText, Thead } from "./TransactionHistory,styled";
import PropTypes from 'prop-types';

export const TransactionHistory = ({transactions}) => {
    return (
      <Table>
        <Thead>
          <TableHeadRow>
            <TableHeadText>Type</TableHeadText>
            <TableHeadText>Amount</TableHeadText>
            <TableHeadText>Currency</TableHeadText>
          </TableHeadRow>
        </Thead>
        <TableBody>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <TableBodyRow key={id}>
                <TableBodyText>{type}</TableBodyText>
                <TableBodyText>{amount}</TableBodyText>
                <TableBodyText>{currency}</TableBodyText>
              </TableBodyRow>
            );
          })}
        </TableBody>
      </Table>
    );
  };

  TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};