import { ClipLoader } from "react-spinners";
import { CSSProperties } from "react";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

/**
 * Props:
 * - loading: boolean (required)
 * - color: string (optional, default: '#ffffff')
 * - size: number (optional, default: 150)
 */
const LoadingSpinner = ({ loading, color = "#ffffff", size = 150 }) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LoadingSpinner;
