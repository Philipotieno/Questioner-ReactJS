import React from "react";

export default () => {
  return (
    <footer className="bg-primary text-white mt-5 p-4 text-center footer fixed-bottom">
      Copyright &copy; {new Date().getFullYear()} Questioner App
    </footer>
  );
};
