import toast from "react-hot-toast";

export const Toast = (error: string) => {
  toast.error(error, {
    duration: 4000,
    position: "top-center",
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};
