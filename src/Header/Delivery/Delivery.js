import { useContext, useEffect, useCallback } from "react";
import "./Delivery.css";
import { AppContext } from "../../AppContext";
export default function Delivery() {
  const { setUser } = useContext(AppContext);
  const handle_resize = useCallback(() => {
    setUser(false);
    if (window.innerWidth <= 600) {
      setUser(true);
    }
  }, [setUser]);
  useEffect(() => {
    handle_resize();
    window.addEventListener("resize", handle_resize);
    return () => {
      window.removeEventListener("resize", handle_resize);
    };
  }, [handle_resize]);

  return (
    <div className="handle_delivery">
      <h1 style={{ textAlign: "center" }}>Our Delivery</h1>
      <h1 style={{ margin: "10px 0px", whiteSpace: "nowrap" }}>
        Shipments and returns
      </h1>
      <h2>Your pack shipment</h2>
      <p style={{ margin: "10px 0px", lineHeight: "23px" }}>
        Packages are generally dispatched within 2 days after receipt of payment
        and are shipped via UPS with tracking and drop-off without signature. If
        you prefer delivery by UPS Extra with required signature, an additional
        cost will be applied, so please contact us before choosing this method.
        Whichever shipment choice you make, we will provide you with a link to
        track your package online.
      </p>

      <p style={{ lineHeight: "23px" }}>
        {" "}
        Shipping fees include handling and packing fees as well as postage
        costs. Handling fees are fixed, whereas transport fees vary according to
        total weight of the shipment. We advise you to group your items in one
        order. We cannot group two distinct orders placed separately, and
        shipping fees will apply to each of them. Your package will be
        dispatched at your own risk, but special care is taken to protect
        fragile objects. Boxes are amply sized and your items are
        well-protected.
      </p>
    </div>
  );
}
