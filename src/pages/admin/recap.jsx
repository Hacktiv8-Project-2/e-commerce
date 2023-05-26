import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Recap = () => {
  const checkout = useSelector(state => state.cart.checkout)
  let totalPrice = 0

  if (checkout.length >= 1) {
    return (
      <div className="pt-5">
        <Container>
          <h1 className="mt-5" style={{ textAlign: 'left' }}>Rekap Penjualan</h1>
          <Table>
            <thead>
              <tr>
                <th style={{ textAlign: "left", }}>Products</th>
                <th>Harga</th>
                <th>Terjual</th>
                <th>Pendapatan</th>
              </tr>
            </thead>
            <tbody>
              {checkout.map((item) => {
                for (let i = 0; i < item.length; i++) {
                  totalPrice += item[i].price * item[i].qty
                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: "left" }}>
                        <h3>{item[i].title}</h3>
                        <p className="text-muted">{checkout.category}</p>
                      </td>
                      <td>${item[i].price}</td>
                      <td>{item[i].qty}</td>
                      <td>${totalPrice}</td>
                    </tr>
                  );
                }
              })}
              <tr>
                <td className="fs-4 fw-bold">${totalPrice}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-full pt-5">
        <h1 className="font-bold text-center my-52 text-6xl mt-5">No Sales</h1>
      </div>
    );
  }
}

export default Recap;