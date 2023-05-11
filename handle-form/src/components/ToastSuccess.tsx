import toast from "react-hot-toast";

export const ToastSuccess = (success: string) => {
  toast.success(success, {
    duration: 4000,
    position: "top-center",
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};
