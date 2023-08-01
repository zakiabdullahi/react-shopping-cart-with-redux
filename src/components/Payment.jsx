const Payment = () => {
  return (
    <div className="payment">
      <h2>Pay with</h2>
      <div className="payment-cards">
        <div className="payment-card">
          <h3>Zaad Services</h3>
        </div>
        <div className="payment-card">
          <h3>Evc Plus</h3>
        </div>
        <div className="payment-card">
          <h3>Sahal </h3>
        </div>
        <form>
          <input type="text" placeholder="2526...." />
        </form>
      </div>
    </div>
  );
};
export default Payment;
