import { Container } from "./styles";

export function TransactionsTable() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rent</td>
                        <td className="deposit">R$1100,00</td>
                        <td>Home</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Website development</td>
                        <td className="withdraw">-R$12.000</td>
                        <td>development</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}