const Wrapper = ({ children }) => {
  return (
    <>
      <div className="flex bg-veryLightGray dark:bg-veryDarkBlueDarkMode flex-col h-full min-h-screen">
        {children}
      </div>
    </>
  );
};

export default Wrapper;
