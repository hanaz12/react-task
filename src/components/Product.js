import { Link } from "react-router-dom";

function Product(props) {
  const { product, showButton } = props;

  return (
    <div style={{ width: "18rem", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <div style={{ paddingBottom: "75%", position: "relative" }}>
          <img
            src={product.image}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt={product.title}
          />
        </div>
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <h5
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {product.title}
          </h5>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "10px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
              maxHeight: "100px",
            }}
          >
            {product.description}
          </p>
          <p> price: {product.price}$</p>
          {showButton && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
