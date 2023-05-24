import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCheckout } from "../../app/cartSlice";

const Recap = () => {
  const { checkout } = useSelector(state => state.cart || { checkout: [] });
  const dispatch = useDispatch();
  let total = 0;

  useEffect(() => {
    dispatch(setCheckout([...checkout]));
  }, []);

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
                const itemTotal = item.sold * item.price;
                total += itemTotal;
                return (
                  <tr key={item.id}>
                    <td style={{ textAlign: "left" }}>
                      <h3>{item.title}</h3>
                      <p className="text-muted">{checkout.category}</p>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.sold}</td>
                    <td>{(item.sold * item.price)}</td>
                  </tr>
                );
              })}
              <tr>
                <td>{total}</td>
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