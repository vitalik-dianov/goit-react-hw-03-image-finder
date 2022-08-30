export const Button = ({ onLoadMore, children }) => {
  return (
    <button type="button" onClick={onLoadMore}>
      {children}
    </button>
  );
};
