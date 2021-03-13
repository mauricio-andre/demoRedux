import { useStore } from "react-redux";

const Catalog: React.FC = () => {
  const catalog = useStore();

  return (
    <h1>Hello word</h1>
  );
}

export default Catalog;
