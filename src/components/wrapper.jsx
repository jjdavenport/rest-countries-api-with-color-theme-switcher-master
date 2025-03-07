const Wrapper = ({ children }) => {
  return (
    <>
      <div className="flex bg-veryLightGray font-custom dark:bg-veryDarkBlueDarkMode flex-col h-full min-h-screen">
        {children}
      </div>
    </>
  );
};

export default Wrapper;
