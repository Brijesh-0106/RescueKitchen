"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const [paymentId, setPaymentId] = useState("");
  const [donationData, setDonationData] = useState<any>(null);

  useEffect(() => {
    const pId = sessionStorage.getItem("paymentId");
    const dData = JSON.parse(localStorage.getItem("donationForm") || "{}");
    if (pId) setPaymentId(pId);
    if (dData) setDonationData(dData);
  }, []);

  const printInvoice = () => {
    window.print();
  };

  if (!donationData) return <div style={{ paddingTop: "100px", textAlign: "center" }}>Loading...</div>;

  return (
    <div style={{ padding: "100px 20px", backgroundColor: "#f2f2f2", minHeight: "100vh" }}>
      <div className="invoice" style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "#fff", padding: "40px", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", color: "rgb(1, 156, 1)" }}>Thank You for Your Donation!</h2>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Your Invoice</h2>
        
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>Title</th>
              <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Name</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{donationData.name}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Phone</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{donationData.phone}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Currency Type</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{donationData.currencyType}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Amount</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{donationData.amount}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Date and Time</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{donationData.DateAndTime}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Payment ID</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{paymentId || "N/A"}</td>
            </tr>
          </tbody>
        </table>

        <div style={{ textAlign: "center", marginTop: "40px", display: "flex", justifyContent: "center", gap: "20px" }}>
          <button 
            onClick={printInvoice}
            style={{ padding: "12px 25px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Print Invoice
          </button>
          <Link href="/donate">
            <button style={{ padding: "12px 25px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Back to Donate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
